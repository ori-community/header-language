import { CompletionItem } from 'vscode';

import uberStates, { UberState } from '../uberState/uberStates';
import namedUberStates from '../uberState/namedUberStates';

function getCode(uberState: UberState): string {
    let code = `${uberState.groupId}|${uberState.uberId}`;
    const uberValue = uberState.uberValue;
    if (uberValue !== undefined) {
        code += `=${uberValue}`;
    }
    return code + "|";
}

const allUberStates = uberStates.concat(namedUberStates);
const mergedUberStates = uberStates.map(uberState => {
    const namedUberState = namedUberStates.find(namedUberState => namedUberState.id === uberState.id);
    return namedUberState ?? uberState;
});

const uberStateNameCompletions: CompletionItem[] = allUberStates.map(uberState => {
    const code = getCode(uberState);
    return {
        label: uberState.id,
        detail: code,
        insertText: code,
    };
});
const uberStateCodeCompletions: CompletionItem[] = mergedUberStates.map(uberState => {
    const code = getCode(uberState);
    return {
        label: code,
        detail: uberState.id,
        insertText: code,
    };
});

export const uberStateCompletions = uberStateNameCompletions.concat(uberStateCodeCompletions);

function getIdCode(uberState: UberState): string {
    let code = `${uberState.uberId}`;
    const uberValue = uberState.uberValue;
    if (uberValue !== undefined) {
        code += `=${uberValue}`;
    }
    return code + "|";
}
function getIdName(uberState: UberState): string {
    const labelParts = uberState.id.split(".");
    const idLabel = labelParts[1];
    if (idLabel === undefined) {
        console.warn(`UberState ${uberState.id} had no "." separator`);
        return labelParts[0];
    } else {
        return idLabel;
    }
}

export function uberIdCompletions(group: number): CompletionItem[] {
    const groupUberStates = uberStates.filter(uberState => uberState.groupId === group);
    const groupNamesUberStates = namedUberStates.filter(uberState => uberState.groupId === group);

    const allUberStates = groupUberStates.concat(groupNamesUberStates);
    const mergedUberStates = groupUberStates.map(uberState => {
        const namedUberState = groupNamesUberStates.find(namedUberState => namedUberState.id === uberState.id);
        return namedUberState ?? uberState;
    });

    const uberStateNameCompletions: CompletionItem[] = allUberStates.map(uberState => {
        const code = getIdCode(uberState);
        const name = getIdName(uberState);
        return {
            label: name,
            detail: code,
            insertText: code,
        };
    });
    const uberStateCodeCompletions: CompletionItem[] = mergedUberStates.map(uberState => {
        const code = getIdCode(uberState);
        const name = getIdName(uberState);
        return {
            label: code,
            detail: name,
        };
    });

    return uberStateNameCompletions.concat(uberStateCodeCompletions);
}
