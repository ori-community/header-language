import * as vscode from 'vscode';

import parseUberState from './parseUberState';
import parsePickup from './parsePickup';

class HeaderHoverProvider implements vscode.HoverProvider {
    provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {
        const line = document.lineAt(position);
        let lineText = line.text;

        const commentIndex = lineText.indexOf("//");
        if (commentIndex !== -1) {
            lineText = lineText.slice(0, commentIndex);
        }
        lineText = lineText.trimEnd();

        let contents = [ `\`\`\`ori-wotw-header\n${lineText}\n\`\`\`` ];

        if (lineText[0] === "!") {
            lineText = lineText.slice(1);
        }

        const [uberGroup, uberId] = lineText.split("|", 2);
        const separatorIndex = uberGroup.length + uberId.length + 1;

        const uberStateName = parseUberState(uberGroup, uberId);
        contents.push(`**Location**\n\n${uberStateName}`);

        let pickupString = lineText.slice(separatorIndex + 1);

        let pickup = parsePickup(pickupString);
        if (pickup === undefined) {
            contents.push(`**Pickup**\n\n${pickupString}`);
        } else {
            while (true) {
                contents.push(`**Pickup**\n\n${pickup.name}`);

                if (pickup.next === null) {
                    break;
                } else {
                    pickup = pickup.next;
                }
            }
        }

        return { contents: contents };
    }
}

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.languages.registerHoverProvider("ori-wotw-header", new HeaderHoverProvider));
}
