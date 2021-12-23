import { parseItem } from "./parser/parseItem";
import UberIdentifier from "./uberState/uberIdentifier";
import { Completion, CompletionVariant } from "./completion";
import { Line, LineVariant, Pickup } from "./line";
import { parseCommand } from "./parser/parseCommand";
import { AnnotationVariant } from "./annotation";

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
    annotation,
    lineBreak,
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

export class ParseStatus {
    remaining: string;
    offset: number;

    constructor(input: string) {
        this.remaining = input;
        this.offset = 0;
    }

    progress(offset: number) {
        this.remaining = this.remaining.slice(offset);
        this.offset += offset;
    }
}

export function eat(status: ParseStatus, eat: string): boolean {
    const remaining = status.remaining;

    if (remaining.startsWith(eat)) {
        status.progress(eat.length);
        return true;
    } else {
        return false;
    }
}

function parseNumber(status: ParseStatus, regex: RegExp): number | null {
    const remaining = status.remaining;

    const match = remaining.match(regex);
    if (match === null) { return null; }

    status.progress(match[0].length);
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
// TODO these functions are very similar
export function parseWord(status: ParseStatus): string | null {
    const regex = /^\w+/;
    const remaining = status.remaining;

    const match = remaining.match(regex);
    if (match === null) { return null; }

    status.progress(match[0].length);
    return match[0];
}
export function parseBoolean(status: ParseStatus): boolean | null {
    const regex = /^true|false/;
    const remaining = status.remaining;

    const match = remaining.match(regex);
    if (match === null) { return null; }

    status.progress(match[0].length);
    const boolean = match[0] === "true";

    return boolean;
}
export function parseRemainingLine(status: ParseStatus): string | null {
    const regex = /^.+/;
    const remaining = status.remaining;

    const match = remaining.match(regex);
    if (match === null) { return null; }

    status.progress(match[0].length);
    return match[0];
}
export function parseComment(status: ParseStatus): boolean {
    const regex = /^\s*?\/\/.*/;
    const remaining = status.remaining;

    const match = remaining.match(regex);
    if (match === null) { return false; }

    status.progress(match[0].length);
    return true;
}
export function parseLineBreak(status: ParseStatus): boolean {
    const regex = /^(\r\n|\r|\n|\z)/;
    const remaining = status.remaining;

    const match = remaining.match(regex);
    if (match === null) { return false; }

    status.progress(match[0].length);
    return true;
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
export function parseLine(status: ParseStatus): ParseLineSuccess | ParseFailure {
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

    if (eat(status, "timer:")) {
        eat(status, " ");

        let uberIdentifierResult = parseUberIdentifier(status);
        if (!uberIdentifierResult.success) { return uberIdentifierResult; }
        const trigger = uberIdentifierResult.result;

        if (!eat(status, "|")) { return fail("|", status, { id: CompletionVariant.uberState }); }

        uberIdentifierResult = parseUberIdentifier(status);
        if (!uberIdentifierResult.success) { return uberIdentifierResult; }
        const timer = uberIdentifierResult.result;

        const line: Line = {
            id: LineVariant.timer,
            trigger,
            timer,
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

type ParseAnnotationsSuccess = ParseSuccess<AnnotationVariant[]>;
export function parseAnnotation(status: ParseStatus): ParseAnnotationsSuccess | ParseFailure {
    const annotations: AnnotationVariant[] = [];

    while(true) {
        if (!eat(status, "#")) { break; }

        const identifier = parseWord(status);
        if (identifier === null) { return fail(Token.word, status, undefined); }

        switch(identifier) {
            case "hide":
                annotations.push(AnnotationVariant.hide);
                break;
            default:
                return fail(Token.annotation, status, { id: CompletionVariant.annotation });
        }

        if (!parseLineBreak(status)) { return fail(Token.lineBreak, status, undefined); }
    }

    return succeed(annotations);
}
