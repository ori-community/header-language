import { Command, CommandVariant } from "../command";
import { CompletionVariant } from "../completion";
import { eat, fail, parseBoolean, ParseFailure, parseFloat, parseInteger, ParseSuccess, ParseValueSuccess, parseWord, succeed, Token } from "../parser";
import parseIcon from "./parseIcon";
import { parseItem } from "./parseItem";

type ParseCommandSuccess = ParseSuccess<Command>;

type ParseAmountSuccess = ParseValueSuccess<number>;
function parseAmount(string: string): ParseAmountSuccess | null {
    const amountResult = parseInteger(string);
    if (amountResult === null) { return null; }

    string = amountResult.remaining;
    const amount = amountResult.value;

    const xResult = eat(string, "x");
    if (xResult === null) { return null; }
    string = xResult;

    return {
        remaining: string,
        value: amount,
    };
}

function parseDependency(string: string, variant: CommandVariant.include | CommandVariant.exclude): ParseCommandSuccess | ParseFailure {
    const command: Command = {
        id: variant,
        path: string,
    };

    return succeed(command, string);
}
function parseChangeItemPool(string: string, variant: CommandVariant.add | CommandVariant.remove): ParseCommandSuccess | ParseFailure {
    let amount = 1;
    const amountResult = parseAmount(string);
    if (amountResult !== null) {
        string = amountResult.remaining;
        amount = amountResult.value;

        const separatorResult = eat(string, " ");
        if (separatorResult === null) { return fail(" ", string, undefined); }
        string = separatorResult;
    }

    const itemResult = parseItem(string);
    if (!itemResult.success) { return itemResult; }
    string = itemResult.remaining;
    const item = itemResult.result;

    const command: Command = {
        id: variant,
        amount,
        item,
    };

    return succeed(command, string);
}
function parseNameCommand(string: string): ParseCommandSuccess | ParseFailure {
    const itemResult = parseItem(string);
    if (!itemResult.success) { return itemResult; }
    string = itemResult.remaining;
    const item = itemResult.result;

    const separatorResult = eat(string, " ");
    if (separatorResult === null) { return fail(" ", string, { id: CompletionVariant.command }); }
    string = separatorResult;

    const command: Command = {
        id: CommandVariant.name,
        item,
        name: string,
    };

    return succeed(command, string);
}
function parsePriceCommand(string: string): ParseCommandSuccess | ParseFailure {
    const itemResult = parseItem(string);
    if (!itemResult.success) { return itemResult; }
    string = itemResult.remaining;
    const item = itemResult.result;

    const separatorResult = eat(string, " ");
    if (separatorResult === null) { return fail(" ", string, { id: CompletionVariant.command }); }
    string = separatorResult;

    const priceResult = parseInteger(string);
    if (priceResult === null) { return fail(Token.integer, string, undefined); }
    string = priceResult.remaining;
    const price = priceResult.value;

    const command: Command = {
        id: CommandVariant.price,
        item,
        price,
    };

    return succeed(command, string);
}
function parseIconCommand(string: string): ParseCommandSuccess | ParseFailure {
    const itemResult = parseItem(string);
    if (!itemResult.success) { return itemResult; }
    string = itemResult.remaining;
    const item = itemResult.result;

    const separatorResult = eat(string, " ");
    if (separatorResult === null) { return fail(" ", string, { id: CompletionVariant.command }); }
    string = separatorResult;

    const iconResult = parseIcon(string);
    if (!iconResult.success) { return iconResult; }
    string = iconResult.remaining;
    const icon = iconResult.result;

    const command: Command = {
        id: CommandVariant.icon,
        item,
        icon,
    };

    return succeed(command, string);
}
function parseParameterCommand(string: string): ParseCommandSuccess | ParseFailure {
    const parameterIdResult = parseWord(string);
    if (parameterIdResult === null) { return fail(Token.word, string, undefined); }
    string = parameterIdResult.remaining;
    const parameterId = parameterIdResult.value;

    let separatorResult = eat(string, " ");
    if (separatorResult === null) { return fail(" ", string, { id: CompletionVariant.command }); }
    string = separatorResult;

    const parameterTypeResult = parseWord(string);
    if (parameterTypeResult === null) { return fail(Token.parameterType, string, undefined); }
    string = parameterTypeResult.remaining;
    const parameterType = parameterTypeResult.value;

    separatorResult = eat(string, ":");
    if (separatorResult === null) { return fail(":", string, { id: CompletionVariant.parameterType }); }
    string = separatorResult;

    let defaultValue: boolean | number | string;
    switch (parameterType) {
        case "bool": {
            const defaultValueResult = parseBoolean(string);
            if (defaultValueResult === null) { return fail(Token.boolean, string, { id: CompletionVariant.boolean }); }
            string = defaultValueResult.remaining;
            defaultValue = defaultValueResult.value;
            break;
        } case "int": {
            const defaultValueResult = parseInteger(string);
            if (defaultValueResult === null) { return fail(Token.integer, string, undefined); }
            string = defaultValueResult.remaining;
            defaultValue = defaultValueResult.value;
            break;
        } case "float": {
            const defaultValueResult = parseFloat(string);
            if (defaultValueResult === null) { return fail(Token.float, string, undefined); }
            string = defaultValueResult.remaining;
            defaultValue = defaultValueResult.value;
            break;
        } case "string":
            defaultValue = string;
        default: return fail(Token.parameterType, string, { id: CompletionVariant.parameterType });
    }

    const command: Command = {
        id: CommandVariant.parameter,
        parameterId,
        defaultValue,
    };

    return succeed(command, string);
}
function parsePoolCommand(string: string): ParseCommandSuccess | ParseFailure {
    const command: Command = {
        id: CommandVariant.pool,
        poolItem: string,
    };

    return succeed(command, string);
}
function parseAddPoolCommand(string: string): ParseCommandSuccess | ParseFailure {
    let amount = 1;
    const amountResult = parseAmount(string);
    if (amountResult !== null) {
        string = amountResult.remaining;
        amount = amountResult.value;
    }
    const command: Command = {
        id: CommandVariant.addpool,
        amount,
    };

    return succeed(command, string);
}
function parseSetCommand(string: string): ParseCommandSuccess | ParseFailure {
    const stateResult = parseWord(string);
    if (stateResult === null) { return fail(Token.word, string, undefined); }
    string = stateResult.remaining;
    const state = stateResult.value;

    const command: Command = {
        id: CommandVariant.set,
        state,
    };

    return succeed(command, string);
}
function parseIfCommand(string: string): ParseCommandSuccess | ParseFailure {
    const parameterIdResult = parseWord(string);
    if (parameterIdResult === null) { return fail(Token.word, string, undefined); }
    string = parameterIdResult.remaining;
    const parameterId = parameterIdResult.value;

    const command: Command = {
        id: CommandVariant.if,
        parameterId,
        value: string,
    };

    return succeed(command, string);
}

export function parseCommand(string: string): ParseCommandSuccess | ParseFailure {
    const commandIdentifierResult = parseWord(string);
    if (commandIdentifierResult === null) { return fail(Token.commandIdentifier, string, { id: CompletionVariant.command }); }
    string = commandIdentifierResult.remaining;
    const commandIdentifier = commandIdentifierResult.value;

    const separatorResult = eat(string, " ");
    if (separatorResult === null) { return fail(" ", string, { id: CompletionVariant.command }); }
    string = separatorResult;

    switch (commandIdentifier) {
        case "include": return parseDependency(string, CommandVariant.include);
        case "exclude": return parseDependency(string, CommandVariant.exclude);
        case "add": return parseChangeItemPool(string, CommandVariant.add);
        case "remove": return parseChangeItemPool(string, CommandVariant.remove);
        case "name": return parseNameCommand(string);
        case "price": return parsePriceCommand(string);
        case "icon": return parseIconCommand(string);
        case "parameter": return parseParameterCommand(string);
        case "pool": return parsePoolCommand(string);
        case "addpool": return parseAddPoolCommand(string);
        case "flush": return succeed({ id: CommandVariant.flush }, string);
        case "set": return parseSetCommand(string);
        case "if": return parseIfCommand(string);
        case "endif": return succeed({ id: CommandVariant.endif }, string);
        default: return fail(Token.commandIdentifier, string, { id: CompletionVariant.command });
    }
}
