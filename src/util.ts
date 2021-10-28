import { CompletionItem } from "vscode";

function getNamesAndCodes(enumObject: Object): { name: string, code: string }[] {
    const keys = Object.keys(enumObject);
    const length = keys.length;
    const split = length / 2;

    let namesAndCodes = [];
    for (let i = 0, j = split; i < split; ++i, ++j) {
        const code = keys[i];
        const name = keys[j];
        namesAndCodes.push({ code, name });
    }

    return namesAndCodes;
}

export function getCompletions(enumObject: Object): CompletionItem[] {
    const namesAndCodes = getNamesAndCodes(enumObject);

    const nameCompletions: CompletionItem[] = namesAndCodes.map(({ name, code }) => {
        return {
            label: name,
            detail: code,
            insertText: code,
        };
    });
    const codeCompletions: CompletionItem[] = namesAndCodes.map(({ name, code }) => {
        return {
            label: code,
            detail: name,
        };
    });

    return nameCompletions.concat(codeCompletions);
}
