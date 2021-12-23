import { Command, CommandVariant } from "../command";
import { CompletionVariant } from "../completion";
import { eat, fail, Parameter, parseBoolean, ParseFailure, parseFloat, parseInteger, parseLogicIdentifier, parseRemainingLine, ParseStatus, ParseSuccess, parseWord, succeed, Token } from "../parser";
import parseIcon from "./parseIcon";
import { parseItem } from "./parseItem";

type ParseCommandSuccess = ParseSuccess<Command>;

function parseAmount(status: ParseStatus): number | null {
    const backup = status.clone();

    const amount = parseInteger(status);
    if (amount === null) { return null; }

    if (!eat(status, "x")) {
        status.replaceWith(backup);
        return null;
    }

    return amount;
}

function parseDependency(status: ParseStatus, variant: CommandVariant.include | CommandVariant.exclude): ParseCommandSuccess | ParseFailure {
    const path = parseRemainingLine(status);
    if (path === null) { return fail(Token.path, status, undefined); }

    const command: Command = {
        id: variant,
        path,
    };

    return succeed(command);
}
function parseChangeItemPool(status: ParseStatus, variant: CommandVariant.add | CommandVariant.remove): ParseCommandSuccess | ParseFailure {
    const amountResult = parseAmount(status);
    if (amountResult !== null && !eat(status, " ")) { return fail(" ", status, undefined); }
    const amount = amountResult || 1;

    const itemResult = parseItem(status);
    if (!itemResult.success) { return itemResult; }
    const item = itemResult.result;

    const command: Command = {
        id: variant,
        amount,
        item,
    };

    return succeed(command);
}
// TODO the below functions are very similar
function parseNameCommand(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    const itemResult = parseItem(status);
    if (!itemResult.success) { return itemResult; }
    const item = itemResult.result;

    if (!eat(status, " ")) { return fail(" ", status, { id: CompletionVariant.command }); }

    const name = parseRemainingLine(status);
    if (name === null) { return fail(Token.text, status, undefined); }

    const command: Command = {
        id: CommandVariant.name,
        item,
        name,
    };

    return succeed(command);
}
function parseDisplayCommand(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    const itemResult = parseItem(status);
    if (!itemResult.success) { return itemResult; }
    const item = itemResult.result;

    if (!eat(status, " ")) { return fail(" ", status, { id: CompletionVariant.command }); }

    const display = parseRemainingLine(status);
    if (display === null) { return fail(Token.message, status, undefined); }

    const command: Command = {
        id: CommandVariant.display,
        item,
        display,
    };

    return succeed(command);
}
function parsePriceCommand(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    const itemResult = parseItem(status);
    if (!itemResult.success) { return itemResult; }
    const item = itemResult.result;

    if (!eat(status, " ")) { return fail(" ", status, { id: CompletionVariant.command }); }

    const price = parseInteger(status);
    if (price === null) { return fail(Token.integer, status, undefined); }

    const command: Command = {
        id: CommandVariant.price,
        item,
        price,
    };

    return succeed(command);
}
function parseIconCommand(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    const itemResult = parseItem(status);
    if (!itemResult.success) { return itemResult; }
    const item = itemResult.result;

    if (!eat(status, " ")) { return fail(" ", status, { id: CompletionVariant.command }); }

    const iconResult = parseIcon(status);
    if (!iconResult.success) { return iconResult; }
    const icon = iconResult.result;

    const command: Command = {
        id: CommandVariant.icon,
        item,
        icon,
    };

    return succeed(command);
}
function parseParameterCommand(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    const parameterId = parseWord(status);
    if (parameterId === null) { return fail(Token.word, status, undefined); }

    if (!eat(status, " ")) { return fail(" ", status, { id: CompletionVariant.command }); }

    const parameterType = parseWord(status);
    if (parameterType === null) { return fail(Token.parameterType, status, undefined); }

    if (!eat(status, ":")) { return fail(":", status, { id: CompletionVariant.parameterType }); }

    let defaultValue: boolean | number | string;
    switch (parameterType) {
        case "bool": {
            const defaultValueResult = parseBoolean(status);
            if (defaultValueResult === null) { return fail(Token.boolean, status, { id: CompletionVariant.boolean }); }
            defaultValue = defaultValueResult;
            break;
        } case "int": {
            const defaultValueResult = parseInteger(status);
            if (defaultValueResult === null) { return fail(Token.integer, status, undefined); }
            defaultValue = defaultValueResult;
            break;
        } case "float": {
            const defaultValueResult = parseFloat(status);
            if (defaultValueResult === null) { return fail(Token.float, status, undefined); }
            defaultValue = defaultValueResult;
            break;
        } case "string": {
            const defaultValueResult = parseRemainingLine(status);
            if (defaultValueResult === null) { defaultValue = ""; }
            else { defaultValue = defaultValueResult; }
        } default: return fail(Token.parameterType, status, { id: CompletionVariant.parameterType });
    }

    const parameter: Parameter = {
        identifier: parameterId,
        defaultValue,
    };

    status.parameters.push(parameter);

    const command: Command = {
        id: CommandVariant.parameter,
        parameter,
    };

    return succeed(command);
}
function parsePoolCommand(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    const poolItem = parseRemainingLine(status);
    if (poolItem === null) { return fail(Token.text, status, undefined); }

    const command: Command = {
        id: CommandVariant.pool,
        poolItem,
    };

    return succeed(command);
}
function parseAddPoolCommand(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    const amount = parseAmount(status) || 1;

    const command: Command = {
        id: CommandVariant.addpool,
        amount,
    };

    return succeed(command);
}
function parseSetCommand(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    const state = parseLogicIdentifier(status);
    if (state === null) { return fail(Token.logicIdentifier, status, undefined); }

    const command: Command = {
        id: CommandVariant.set,
        state,
    };

    return succeed(command);
}
function parseIfCommand(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    const parameterId = parseWord(status);
    if (parameterId === null) { return fail(Token.word, status, undefined); }

    const value = parseRemainingLine(status);
    if (value === null) { return fail(Token.text, status, undefined); }

    const command: Command = {
        id: CommandVariant.if,
        parameterId,
        value,
    };

    return succeed(command);
}

export function parseCommand(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    const commandIdentifier = parseWord(status);
    if (commandIdentifier === null) { return fail(Token.commandIdentifier, status, { id: CompletionVariant.command }); }

    if (commandIdentifier === "flush") { return succeed({ id: CommandVariant.flush }); }
    if (commandIdentifier === "endif") { return succeed({ id: CommandVariant.endif }); }

    if (!eat(status, " ")) { return fail(" ", status, { id: CompletionVariant.command }); }

    switch (commandIdentifier) {
        case "include": return parseDependency(status, CommandVariant.include);
        case "exclude": return parseDependency(status, CommandVariant.exclude);
        case "add": return parseChangeItemPool(status, CommandVariant.add);
        case "remove": return parseChangeItemPool(status, CommandVariant.remove);
        case "name": return parseNameCommand(status);
        case "display": return parseDisplayCommand(status);
        case "price": return parsePriceCommand(status);
        case "icon": return parseIconCommand(status);
        case "parameter": return parseParameterCommand(status);
        case "pool": return parsePoolCommand(status);
        case "addpool": return parseAddPoolCommand(status);
        case "set": return parseSetCommand(status);
        case "if": return parseIfCommand(status);
        default: return fail(Token.commandIdentifier, status, { id: CompletionVariant.command });
    }
}
