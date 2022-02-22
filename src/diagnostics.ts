import * as vscode from 'vscode';

import { ParseFailure, Token } from "./parser";

function errorMessage(parseFailure: ParseFailure): string {
    const expected = parseFailure.expected;
    if (typeof expected === "string") {
        return `expected "${expected}"`;
    }

    return `expected ${Token[expected]}`;
}

export function diagnose(document: vscode.TextDocument, parseFailure: ParseFailure): vscode.Diagnostic | undefined {
    const position = document.positionAt(parseFailure.status.offsetInSource());
    let range = document.getWordRangeAtPosition(position);
    if (range === undefined) { range = new vscode.Range(position, position); }

    const message = errorMessage(parseFailure);

    return new vscode.Diagnostic(range, message);
}
