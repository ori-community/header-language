import { watch } from 'fs';
import * as vscode from 'vscode';
import { offerCompletions } from './completion';
import { describeLine } from './description';
import { diagnose } from './diagnostics';

import { parseAnnotation, parseComment, parseLine, parseLineBreak, parseRemainingLine, ParseStatus } from './parser';

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
        const status: ParseStatus = new ParseStatus(documentLine.text);

        const line = parseLine(status);
        if (line.success) { return null; }

        const completion = line.completion;
        if (completion !== undefined) {
            return offerCompletions(completion);
        }

        return null;
    }
}

class HeaderHoverProvider implements vscode.HoverProvider {
    provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> {
        const documentLine = document.lineAt(position);
        let lineText = documentLine.text;
        const status: ParseStatus = new ParseStatus(lineText);

        const line = parseLine(status);
        if (!line.success) { return null; }

        const description = describeLine(line.result);

        const commentIndex = lineText.indexOf("//");
        if (commentIndex !== -1) {
            lineText = lineText.slice(0, commentIndex);
        }
        lineText = lineText.trimEnd();

        const contents = [ `\`\`\`ori-wotw-header\n${lineText}\n\`\`\`` ].concat(description);

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

    vscode.workspace.onDidChangeTextDocument(event => {
        updateDiagnostics(event.document, diagnosticsCollection);
    });
    vscode.workspace.onDidDeleteFiles(event => {
        for (const file of event.files) {
            diagnosticsCollection.delete(file);
        }
    });
}

function updateDiagnostics(document: vscode.TextDocument, collection: vscode.DiagnosticCollection) {
    let diagnostics: vscode.Diagnostic[] = [];

    const status: ParseStatus = new ParseStatus(document.getText());

    const annotationsResult = parseAnnotation(status);
    if (!annotationsResult.success) {
        const diagnosis = diagnose(document, annotationsResult);
        if (diagnosis !== undefined) { diagnostics.push(diagnosis); }
    }

    while(true) {
        parseComment(status);
        if (status.remaining.length === 0) { break; }
        if (parseLineBreak(status)) { continue; }

        const lineResult = parseLine(status);
        if (!lineResult.success) {
            const diagnosis = diagnose(document, lineResult);
            if (diagnosis !== undefined) { diagnostics.push(diagnosis); }
            parseRemainingLine(status);
        }
    }

    collection.set(document.uri, diagnostics);
}
