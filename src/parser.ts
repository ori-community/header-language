import { parseItem } from "./parser/parseItem";
import UberIdentifier from "./uberState/uberIdentifier";
import { Completion, CompletionVariant } from "./completion";
import { Line, LineVariant, Pickup } from "./line";
import { parseCommand } from "./parser/parseCommand";

export enum Token {
    integer,
    float,
    word,
    text,
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
    message,
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
    path,
    parameterType,
}

export interface ParseSuccess<Result> {
    success: true,
    result: Result,
}
export function succeed<Result>(result: Result): ParseSuccess<Result> {
    return {
        success: true,
        result,
    };
}

export interface ParseFailure {
    success: false,
    expected: Token | string,
    status: ParseStatus,
    completion?: Completion,
}

export function fail(expected: Token | string, status: ParseStatus, completion: Completion | undefined): ParseFailure {
    return {
        success: false,
        expected,
        status,
        completion,
    };
}

export interface ParseStatus {
    remaining: string,
}

export function eat(status: ParseStatus, eat: string): boolean {
    const remaining = status.remaining;

    if (remaining.startsWith(eat)) {
        status.remaining = remaining.slice(eat.length);
        return true;
    } else {
        return false;
    }
}

function parseNumber(status: ParseStatus, regex: RegExp): number | null {
    const remaining = status.remaining;

    const match = remaining.match(regex);
    if (match === null) { return null; }

    status.remaining = remaining.slice(match[0].length);
    return +match[0];
}
export function parseInteger(status: ParseStatus, signed: boolean = false): number | null {
    let regex;
    if (signed) {
        regex = /^-?\d+/;
    } else {
        regex = /^\d+/;
    }

    return parseNumber(status, regex);
}
export function parseFloat(status: ParseStatus): number | null {
    const regex = /^-?\d+(?:\.\d+)?/;

    return parseNumber(status, regex);
}
export function parseWord(status: ParseStatus): string | null {
    const regex = /^\w+/;
    const remaining = status.remaining;

    const match = remaining.match(regex);
    if (match === null) { return null; }

    status.remaining = remaining.slice(match[0].length);
    return match[0];
}
export function parseBoolean(status: ParseStatus): boolean | null {
    const remaining = status.remaining;

    const regex = /^true|false/;

    const match = remaining.match(regex);
    if (match === null) { return null; }

    status.remaining = remaining.slice(match[0].length);
    const boolean = match[0] === "true";

    return boolean;
}
export function parseRemainingLine(status: ParseStatus): string | null {
    const regex = /^.+/;
    const remaining = status.remaining;

    const match = remaining.match(regex);
    if (match === null) { return null; }

    status.remaining = remaining.slice(match[0].length);
    return match[0];
}

type ParseUberIdentifierSuccess = ParseSuccess<UberIdentifier>;
export function parseUberIdentifier(status: ParseStatus): ParseUberIdentifierSuccess | ParseFailure {
    const group = parseInteger(status);
    if (group === null) { return fail(Token.uberGroup, status, { id: CompletionVariant.uberState }); }

    if (!eat(status, "|")) { return fail("|", status, { id: CompletionVariant.uberState }); }

    const id = parseInteger(status);
    if (id === null) { return fail(Token.uberId, status, { id: CompletionVariant.uberId, group }); }

    const uberIdentifier = {
        group,
        id,
    };

    return {
        success: true,
        result: uberIdentifier,
    };
}

type ParseUberValueSuccess = ParseSuccess<number>;
function parseUberValue(status: ParseStatus): ParseUberValueSuccess | ParseFailure {
    const value = parseInteger(status);
    if (value === null) { return fail(Token.integer, status, undefined); }

    return {
        success: true,
        result: value,
    };
}

type ParsePickupSuccess = ParseSuccess<Pickup>;
function parsePickup(status: ParseStatus): ParsePickupSuccess | ParseFailure {
    eat(status, "!");

    const uberIdentifierResult = parseUberIdentifier(status);
    if (!uberIdentifierResult.success) { return uberIdentifierResult; }
    const uberIdentifier = uberIdentifierResult.result;

    let uberValue;
    if (eat(status, "=")) {
        const uberValueResult = parseUberValue(status);
        if (!uberValueResult.success) { return uberValueResult; }
        uberValue = uberValueResult.result;
    }

    if (!eat(status, "|")) {
        let completion: Completion | undefined;
        if (uberValue === undefined) {
            completion = { id: CompletionVariant.uberId, group: uberIdentifier.group };
        }
        return fail("|", status, completion);
    }

    const itemResult = parseItem(status);
    if (!itemResult.success) { return itemResult; }
    const item = itemResult.result;

    const pickup: Pickup = {
        uberIdentifier,
        uberValue,
        item,
    };

    return succeed(pickup);
}

type ParseLineSuccess = ParseSuccess<Line>;
export function parseLine(string: string): ParseLineSuccess | ParseFailure {
    const status: ParseStatus = { remaining: string };

    if (eat(status, "!!")) {
        const commandResult = parseCommand(status);
        if (!commandResult.success) { return commandResult; }
        const command = commandResult.result;

        const line: Line = {
            id: LineVariant.command,
            command,
        };

        return succeed(line);
    }

    const pickupResult = parsePickup(status);
    if (!pickupResult.success) { return pickupResult; }
    const pickup = pickupResult.result;

    const line: Line = {
        id: LineVariant.pickup,
        pickup,
    };

    return succeed(line);
}
