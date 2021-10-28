import { CompletionItem } from "vscode";

const wheelBindNamesAndCodes = [
    {
        name: "All",
        code: "0",
    },
    {
        name: "Ability1",
        code: "1",
    },
    {
        name: "Ability2",
        code: "2",
    },
    {
        name: "Ability3",
        code: "3",
    },
];

const wheelBindNameCompletions: CompletionItem[] = wheelBindNamesAndCodes.map(({ name, code }) => {
    return {
        label: name,
        detail: code,
        insertText: code,
    };
});
const wheelBindCodeCompletions: CompletionItem[] = wheelBindNamesAndCodes.map(({ name, code }) => {
    return {
        label: code,
        detail: name,
    };
});
const wheelBindCompletions = wheelBindNameCompletions.concat(wheelBindCodeCompletions);

export default wheelBindCompletions;
