import { CompletionItem } from 'vscode';

const commandCompletions: CompletionItem[] = [
    { label: 'include ' },
    { label: 'exclude ' },
    { label: 'add ' },
    { label: 'remove ' },
    { label: 'name ' },
    { label: 'price ' },
    { label: 'icon ' },
    { label: 'parameter ' },
    { label: 'pool ' },
    { label: 'addpool ' },
    { label: 'flush' },
    { label: 'set ' },
    { label: 'if ' },
    { label: 'endif' },
];

export default commandCompletions;
