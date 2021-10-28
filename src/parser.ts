import { parseItem } from "./parser/parseItem";
import UberIdentifier from "./uberState/uberIdentifier";
import { Completion, CompletionVariant } from "./completion";
import { Line, LineVariant, Pickup } from "./line";
import { parseCommand } from "./parser/parseCommand";

export enum Token {
    integer,
    float,
    word,
    boolean,
    uberGroup,
    uberId,
    itemIdentifier,
    resourceIdentifier,
    abilityIdentifier,
    shardIdentifier,
    sysCommandIdentifier,
    slot,
    equipment,
    teleporterIdentifier,
    uberStateType,
    water,
    bonusItem,
    bonusUpgrade,
    zone,
    progressIdentifier,
    wheelCommandIdentifier,
    wheelItemPosition,
    iconType,
    shardIconValue,
    spellIconValue,
    opherIconValue,
    lupoIconValue,
    gromIconValue,
    tuleyIconValue,
    wheelItemBind,
    shopCommandIdentifier,
    commandIdentifier,
    parameterType,
}

export interface ParseSuccess<Result> {
    success: true,
    remaining: string,
    result: Result,
}
export function succeed<Result>(result: Result, remaining: string): ParseSuccess<Result> {
    return {
        success: true,
        remaining,
        result,
    };
}

export interface ParseFailure {
    success: false,
    expected: Token | string,
    found: string,
    completion?: Completion,
}

export function fail(expected: Token | string, found: string, completion: Completion | undefined): ParseFailure {
    return {
        success: false,
        expected,
        found,
        completion,
    };
}

export function eat(string: string, eat: string): string | null {
    if (string.startsWith(eat)) {
        return string.slice(eat.length);
    } else {
        return null;
    }
}

export interface ParseValueSuccess<Value> {
    remaining: string,
    value: Value,
}

type ParseNumberSuccess = ParseValueSuccess<number>;
function parseNumber(string: string, regex: RegExp): ParseNumberSuccess | null {
    const match = string.match(regex);
    if (match === null) { return null; }

    const remaining = string.slice(match[0].length);
    const number = +match[0];

    return {
        remaining,
        value: number,
    };
}
export function parseInteger(string: string, signed: boolean = false): ParseNumberSuccess | null {
    let regex;
    if (signed) {
        regex = /^-?\d+/;
    } else {
        regex = /^\d+/;
    }

    return parseNumber(string, regex);
}
export function parseFloat(string: string): ParseNumberSuccess | null {
    const regex = /^-?\d+(?:\.\d+)?/;

    return parseNumber(string, regex);
}
type ParseWordSuccess = ParseValueSuccess<string>;
export function parseWord(string: string): ParseWordSuccess | null {
    const regex = /^\w+/;

    const match = string.match(regex);
    if (match === null) { return null; }

    const remaining = string.slice(match[0].length);
    const word = match[0];

    return {
        remaining,
        value: word,
    };
}
type ParseBooleanSuccess = ParseValueSuccess<boolean>;
export function parseBoolean(string: string): ParseBooleanSuccess | null {
    const regex = /^true|false/;

    const match = string.match(regex);
    if (match === null) { return null; }

    const remaining = string.slice(match[0].length);
    const boolean = match[0] === "true";

    return {
        remaining,
        value: boolean,
    };
}

type ParseUberIdentifierSuccess = ParseSuccess<UberIdentifier>;
export function parseUberIdentifier(string: string): ParseUberIdentifierSuccess | ParseFailure {
    const groupResult = parseInteger(string);
    if (groupResult === null) { return fail(Token.uberGroup, string, { id: CompletionVariant.uberState }); }
    string = groupResult.remaining;
    const group = groupResult.value;

    const separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, { id: CompletionVariant.uberState }); }
    string = separatorResult;

    const idResult = parseInteger(string);
    if (idResult === null) { return fail(Token.uberId, string, { id: CompletionVariant.uberId, group }); }
    string = idResult.remaining;
    const id = idResult.value;

    const uberIdentifier = {
        group,
        id,
    };

    return {
        success: true,
        remaining: string,
        result: uberIdentifier,
    };
}

type ParseUberValueSuccess = ParseSuccess<number>;
function parseUberValue(string: string): ParseUberValueSuccess | ParseFailure {
    const valueResult = parseInteger(string);
    if (valueResult === null) { return fail(Token.integer, string, undefined); }
    string = valueResult.remaining;
    const value = valueResult.value;

    return {
        success: true,
        remaining: string,
        result: value,
    };
}

type ParsePickupSuccess = ParseSuccess<Pickup>;
function parsePickup(string: string): ParsePickupSuccess | ParseFailure {
    if (string.startsWith("!")) {
        string = string.slice(1);
    }

    const uberIdentifierResult = parseUberIdentifier(string);
    if (!uberIdentifierResult.success) { return uberIdentifierResult; }
    string = uberIdentifierResult.remaining;
    const uberIdentifier = uberIdentifierResult.result;

    let uberValue;
    const equalSignResult = eat(string, "=");
    if (equalSignResult !== null) {
        string = equalSignResult;

        const uberValueResult = parseUberValue(string);
        if (!uberValueResult.success) { return uberValueResult; }
        string = uberValueResult.remaining;
        uberValue = uberValueResult.result;
    }

    const separatorResult = eat(string, "|");
    if (separatorResult === null) {
        let completion: Completion | undefined;
        if (uberValue === undefined) {
            completion = { id: CompletionVariant.uberId, group: uberIdentifier.group };
        }
        return fail("|", string, completion);
    }
    string = separatorResult;

    const itemResult = parseItem(string);
    if (!itemResult.success) { return itemResult; }
    string = itemResult.remaining;
    const item = itemResult.result;

    const pickup: Pickup = {
        uberIdentifier,
        uberValue,
        item,
    };

    return succeed(pickup, string);
}

type ParseLineSuccess = ParseSuccess<Line>;
export function parseLine(string: string): ParseLineSuccess | ParseFailure {
    const commandSymbolResult = eat(string, "!!");
    if (commandSymbolResult !== null) {
        string = commandSymbolResult;

        const commandResult = parseCommand(string);
        if (!commandResult.success) { return commandResult; }
        string = commandResult.remaining;
        const command = commandResult.result;

        const line: Line = {
            id: LineVariant.command,
            command,
        };

        return succeed(line, string);
    }

    const pickupResult = parsePickup(string);
    if (!pickupResult.success) { return pickupResult; }
    string = pickupResult.remaining;
    const pickup = pickupResult.result;

    const line: Line = {
        id: LineVariant.pickup,
        pickup,
    };

    return succeed(line, string);
}
