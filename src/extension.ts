import * as vscode from 'vscode';
import { offerCompletions } from './completion';

import { check_errors, parse_line } from 'wotw-seedgen';

const completionTriggerCharacters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "!",
    "|",
];

const filePattern = "**/*.{wotwr,wotwrh}";

function toArray<T>(wasmList: { next: () => T | undefined }): T[] {
    const items = [];
    while (true) {
        const item = wasmList.next();
        if (item === undefined) {
            return items;
        }
        items.push(item);
    }
}

class HeaderCompletionItemProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionItem[]> {
        const documentLine = document.lineAt(position);
        const text = documentLine.text;

        const errors = check_errors(text);
        const error = toArray(errors)[0];
        if (error === undefined) { return null; }

        return offerCompletions(error, text);
    }
}

class HeaderHoverProvider implements vscode.HoverProvider {
    provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> {
        const documentLine = document.lineAt(position);
        const lineText = documentLine.text;

        const line = parse_line(lineText);
        if (line === undefined) { return null; }

        const description = line.description();
        if (description === undefined) { return null; }

        const descriptionArray = toArray(description)
            .map(description => description.replace(":", ":\n\n"));
        const contents = [ `\`\`\`ori-wotw-header\n${lineText}\n\`\`\`` ].concat(descriptionArray);

        return { contents: contents };
    }
}

async function provideDiagnostics(collection: vscode.DiagnosticCollection) {
    const files = await vscode.workspace.findFiles(filePattern);
    for (const uri of files) {
        try {
            const document = await vscode.workspace.openTextDocument(uri);
            updateDiagnostics(document, collection);
        } catch (e) {
            console.warn(e);
        }
    }
}

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.languages.registerHoverProvider("ori-wotw-header", new HeaderHoverProvider));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider("ori-wotw-header", new HeaderCompletionItemProvider, ...completionTriggerCharacters));

    const diagnosticsCollection = vscode.languages.createDiagnosticCollection("ori-wotw-header");
    context.subscriptions.push(diagnosticsCollection);

    provideDiagnostics(diagnosticsCollection);

    vscode.workspace.onDidOpenTextDocument(event => {
        if (vscode.languages.match({ language: "ori-wotw-header" }, event) > 0) {
            updateDiagnostics(event, diagnosticsCollection);
        }
    });
    vscode.workspace.onDidChangeTextDocument(event => {
        const document = event.document;
        if (vscode.languages.match({ language: "ori-wotw-header" }, document) > 0) {
            updateDiagnostics(event.document, diagnosticsCollection);
        }
    });
    vscode.workspace.onDidDeleteFiles(event => {
        for (const file of event.files) {
            diagnosticsCollection.delete(file);
        }
    });
}

function updateDiagnostics(document: vscode.TextDocument, collection: vscode.DiagnosticCollection) {
    const text = document.getText();
    const errors = check_errors(text);
    const diagnostics = toArray(errors).map(error => {
        const message = error.message();
        const start = document.positionAt(error.start_index());
        const end = document.positionAt(error.end_index());
        const range = new vscode.Range(start, end);
        return new vscode.Diagnostic(range, message);
    });

    collection.set(document.uri, diagnostics);
}
