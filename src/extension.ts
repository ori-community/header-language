import * as vscode from 'vscode';
import { offerCompletions } from './completion';
import { describeLine } from './description';

import { parseLine } from './parser';

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

function removeComment(line: string): string {
    const commentIndex = line.indexOf("//");
    if (commentIndex !== -1) {
        line = line.slice(0, commentIndex);
    }
    return line;
}

class HeaderCompletionItemProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionItem[]> {
        const documentLine = document.lineAt(position);
        let lineText = removeComment(documentLine.text);

        const line = parseLine(lineText);
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
        let lineText = removeComment(documentLine.text);
        lineText = lineText.trimEnd();

        const line = parseLine(lineText);
        if (!line.success) { return null; }

        const description = describeLine(line.result);

        const contents = [ `\`\`\`ori-wotw-header\n${lineText}\n\`\`\`` ].concat(description);

        return { contents: contents };
    }
}

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.languages.registerHoverProvider("ori-wotw-header", new HeaderHoverProvider));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider("ori-wotw-header", new HeaderCompletionItemProvider, ...completionTriggerCharacters));
}
