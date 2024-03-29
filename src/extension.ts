import * as vscode from 'vscode';
import { offerCompletions } from './completion';

import { checkErrors, parseLine } from 'wotw-seedgen';

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

class HeaderCompletionItemProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionItem[]> {
        const documentLine = document.lineAt(position);
        const text = documentLine.text;

        const errors = checkErrors(text);
        const error = errors[0];
        if (error === undefined) { return null; }

        return offerCompletions(error, text);
    }
}

class HeaderHoverProvider implements vscode.HoverProvider {
    provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> {
        const documentLine = document.lineAt(position);
        const lineText = documentLine.text;

        const line = parseLine(lineText);
        if (line === undefined) { return null; }

        const description = line.description();
        if (description === undefined) { return null; }

        const multilineDescription = description.map(description => description.replace(":", ":\n\n"));
        const contents = [ `\`\`\`ori-wotw-header\n${lineText}\n\`\`\`` ].concat(multilineDescription);

        return { contents: contents };
    }
}

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.languages.registerHoverProvider("ori-wotw-header", new HeaderHoverProvider));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider("ori-wotw-header", new HeaderCompletionItemProvider, ...completionTriggerCharacters));

    const diagnosticsCollection = vscode.languages.createDiagnosticCollection("ori-wotw-header");
    context.subscriptions.push(diagnosticsCollection);

    for (const document of vscode.workspace.textDocuments.filter(document => document.languageId === "ori-wotw-header")) {
        updateDiagnostics(document, diagnosticsCollection);
    }

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
    const errors = checkErrors(text);
    const diagnostics = errors.map(error => {
        const errorRange = error.range;
        const start = document.positionAt(errorRange.start);
        const end = document.positionAt(errorRange.end);
        const range = new vscode.Range(start, end);
        return new vscode.Diagnostic(range, error.message);
    });

    collection.set(document.uri, diagnostics);
}
