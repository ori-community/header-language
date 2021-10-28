import { CompletionItem } from "vscode";

const slotNamesAndCodes = [
    {
        name: "Ability1",
        code: "0",
    },
    {
        name: "Ability2",
        code: "1",
    },
    {
        name: "Ability3",
        code: "2",
    },
];

const slotNameCompletions: CompletionItem[] = slotNamesAndCodes.map(({ name, code }) => {
    return {
        label: name,
        detail: code,
        insertText: code,
    };
});
const slotCodeCompletions: CompletionItem[] = slotNamesAndCodes.map(({ name, code }) => {
    return {
        label: code,
        detail: name,
    };
});
const slotCompletions = slotNameCompletions.concat(slotCodeCompletions);

export default slotCompletions;
