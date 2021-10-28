import { CompletionItem } from "vscode";

const waterNamesAndCodes = [
    {
        name: "Water",
        code: "9|0",
    },
];

const waterNameCompletions: CompletionItem[] = waterNamesAndCodes.map(({ name, code }) => {
    return {
        label: name,
        detail: code,
        insertText: code,
    };
});
const waterCodeCompletions: CompletionItem[] = waterNamesAndCodes.map(({ name, code }) => {
    return {
        label: code,
        detail: name,
    };
});
const waterCompletions = waterNameCompletions.concat(waterCodeCompletions);

export default waterCompletions;
