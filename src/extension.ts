import * as vscode from 'vscode';

import { parseLine } from './parseLine';

class HeaderHoverProvider implements vscode.HoverProvider {
    provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {
        const documentLine = document.lineAt(position);
        let lineText = documentLine.text;

        const commentIndex = lineText.indexOf("//");
        if (commentIndex !== -1) {
            lineText = lineText.slice(0, commentIndex);
        }
        lineText = lineText.trimEnd();

        let line = parseLine(lineText);
        if (line === undefined) { return undefined; }

        let contents = [ `\`\`\`ori-wotw-header\n${lineText}\n\`\`\`` ].concat(line.description);

        return { contents: contents };
    }
}

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.languages.registerHoverProvider("ori-wotw-header", new HeaderHoverProvider));
}
