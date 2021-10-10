import { Pickup, parsePickup } from './parsePickup';
import { parseIcon } from './parseIcon';

interface Command {
    /**
     * The human friendly name of this command
     */
    name: string,
    /**
     * If this references one or more pickups, the next pickup in the chain
     */
    next: Pickup | null,
}

const includeRegex = /^!!include (\w+)$/;
const excludeRegex = /^!!exclude (\w+)$/;
const addRegex = /^!!(add|remove) (?:(\d+)x\s*)?/;
const nameRegex = /^!!name ([^ ]+) (.+)$/;
const priceRegex = /^!!price ([^ ]+) (\d+)$/;
const iconRegex = /^!!icon ([^ ]+) (.+)$/;
const parameterRegex = /^!!parameter (\w+) (?:bool:(true|false)|int:(\d+)|float:(\d+(?:[,.]\d+)?)|string:(\w+))$/;
const poolRegex = /^!!pool (.+)$/;
const addPoolRegex = /^!!addpool (\d+)x$/;
const flushRegex = /^!!flush$/;
const setRegex = /^!!set (.+)$/;
const ifRegex = /^!!if (\w+) (true|false|\\d+(?:[,.]\\d+)?)$/;
const endIfRegex = /^!!endif$/;

function parseSimpleCommand(string: string, regex: RegExp, name: (values: string[]) => string): Command | undefined {
    const match = string.match(regex);
    if (match === null) { return undefined; }

    const values = match.slice(1);

    return { name: name(values), next: null };
}

function parseInclude(string: string): Command | undefined {
    return parseSimpleCommand(string, includeRegex, ([dependency]) => `Include header "${dependency}"`);
}
function parseExclude(string: string): Command | undefined {
    return parseSimpleCommand(string, excludeRegex, ([dependency]) => `Exclude header "${dependency}"`);
}
function parseAdd(string: string): Command | undefined {
    const match = string.match(addRegex);
    if (match === null) { return undefined; }

    const add = match[1][0] === "a";
    const amount = match[2];

    const pickupString = string.slice(match[0].length);
    let pickup = parsePickup(pickupString);

    if (pickup === undefined) {
        pickup = { name: "Invalid pickup", next: null };
    }

    const pickupDescription = `this item ${amount === undefined ? "" : `${amount} time${amount === "1" ? "" : "s"}`}`;

    let name;
    if (add) {
        name = `Add ${pickupDescription} to the item pool`;
    } else {
        name = `Remove ${pickupDescription} from the item pool`;
    }

    return { name: name, next: pickup };
}
function parsePickupCustomization(string: string, regex: RegExp, name: (value: string) => string): Command | undefined {
    const match = string.match(regex);
    if (match === null) { return undefined; }

    const pickupString = match[1];
    const value = match[2];

    let pickup = parsePickup(pickupString);

    if (pickup === undefined) {
        pickup = { name: "Invalid pickup", next: null };
    }

    return { name: name(value), next: pickup };
}
function parseSetName(string: string): Command | undefined {
    return parsePickupCustomization(string, nameRegex, name => `Set the name of this pickup to "${name}"`);
}
function parseSetPrice(string: string): Command | undefined {
    return parsePickupCustomization(string, priceRegex, price => `Set the price of this pickup to ${price}`);
}
function parseSetIcon(string: string): Command | undefined {
    return parsePickupCustomization(string, iconRegex, icon => {
        let iconName = parseIcon(icon);
        return `Set the icon of this pickup to ${iconName ?? icon}`;
    });
}
function parseParameter(string: string): Command | undefined {
    const match = string.match(parameterRegex);
    if (match === null) { return undefined; }

    const identifier = match[1];

    let type;
    let value;

    const boolValue = match[2];
    if (boolValue !== undefined) {
        type = "boolean";
        value = boolValue;
    } else {
        const intValue = match[3];
        if (intValue !== undefined) {
            type = "integer";
            value = intValue;
        } else {
            const floatValue = match[4];
            if (floatValue !== undefined) {
                type = "float";
                value = floatValue;
            } else {
                const stringValue = match[4];
                type = "string";
                value = stringValue;
            }
        }
    }

    return { name: `Add a ${type} parameter "${identifier}" with default value ${value}`, next: null };
}
function parsePool(string: string): Command | undefined {
    return parseSimpleCommand(string, poolRegex, ([value]) => `Add "${value}" to the random pool`);
}
function parseAddPool(string: string): Command | undefined {
    return parseSimpleCommand(string, addPoolRegex, ([amount]) => `Add ${amount} random items from the random pool to the item pool`);
}
function parseFlush(string: string): Command | undefined {
    return parseSimpleCommand(string, flushRegex, () => "Flush the random pool");
}
function parseSet(string: string): Command | undefined {
    return parseSimpleCommand(string, setRegex, ([state]) => `Sets the logic state "${state}" to be met`);
}
function parseIf(string: string): Command | undefined {
    return parseSimpleCommand(string, ifRegex, ([parameter, value]) => `Opens a block that will only be added to the seed if the parameter ${parameter} is ${value}`);
}
function parseEndIf(string: string): Command | undefined {
    return parseSimpleCommand(string, endIfRegex, () => "Closes one if block");
}

const commandParsers = [
    parseInclude,
    parseExclude,
    parseAdd,
    parseSetName,
    parseSetPrice,
    parseSetIcon,
    parseParameter,
    parsePool,
    parseAddPool,
    parseFlush,
    parseSet,
    parseIf,
    parseEndIf,
];

export function parseCommand(string: string): Command | undefined {
    for (const commandParser of commandParsers) {
        const command = commandParser(string);
        if (command !== undefined) { return command; }
    }
}

export function describeCommand(command: Command): string[] {
    let contents = [`**Command**\n\n${command.name}`];

    let pickup = command.next;
    if (pickup !== null) {
        while (true) {
            contents.push(`**Pickup**\n\n${pickup.name}`);

            if (pickup.next === null) {
                break;
            } else {
                pickup = pickup.next;
            }
        }
    }

    return contents;
}
