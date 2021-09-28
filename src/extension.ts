import * as vscode from 'vscode';

import uberStates from './assets/uberStates';
import parsePickup from './parsePickup';

function nameUberState(uberGroup: string, uberId: string) {
    const entry = uberStates.find(entry => entry.groupId === uberGroup && entry.uberId === uberId);
    return entry?.id;
}

function namePickup(pickupString: string) {
    const pickup = parsePickup(pickupString);
    return pickup?.name;
}

class HeaderHoverProvider implements vscode.HoverProvider {
    provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {
        const line = document.lineAt(position);
        const positionOffset = position.character - line.range.start.character;
        const lineText = line.text;

        const [uberGroup, uberId] = lineText.split("|", 2);
        const separatorIndex = uberGroup.length + uberId.length + 1;

        const isUberStatePart = positionOffset <= separatorIndex;
        if (isUberStatePart) {
            const name = nameUberState(uberGroup, uberId);

            let contents = [ lineText.slice(0, separatorIndex) ];
            if (name !== undefined) {
                contents.push(name);
            }

            return { contents: contents };
        }

        let pickup = lineText.slice(separatorIndex + 1);

        const commentIndex = pickup.indexOf("//");
        if (commentIndex !== -1) {
            pickup = pickup.slice(0, commentIndex);
        }

        pickup = pickup.trimEnd();

        if (positionOffset > separatorIndex + pickup.length) {
            return undefined;
        }

        const name = namePickup(pickup);

        let contents = [ pickup ];
        if (name !== undefined) {
            contents.push(name);
        }

        return { contents: contents };
    }
}

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.languages.registerHoverProvider("ori-wotw-header", new HeaderHoverProvider));
}
