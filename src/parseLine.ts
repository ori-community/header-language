import { parseUberState, describeUberState } from './parseUberState';
import { parseCommand, describeCommand } from './parseCommand';
import { parsePickup, describePickup } from './parsePickup';

export interface Line {
    /**
     * The full description of this line
     */
    description: string[],
}

const commandRegex = /^!!/;
const pickupRegex = /^!?(\d+)\|(\d+(?:=\d+)?)\|/;

function parseCommandLine(line: string): Line | undefined {
    if (line.match(commandRegex) !== null) {
        const command = parseCommand(line);
        if (command === undefined) { return undefined; }

        const commandDescription = describeCommand(command);
        return { description: commandDescription};
    }
}

function parsePickupLine(line: string): Line | undefined {
    let description = [];

    const match = line.match(pickupRegex);
    if (match === null) { return undefined; }

    const uberGroup = match[1];
    const uberId = match[2];
    const uberState = parseUberState(uberGroup, uberId);
    const uberStateDescription = describeUberState(uberState);
    description.push(uberStateDescription);

    const pickupString = line.slice(match[0].length);
    let pickup = parsePickup(pickupString);
    if (pickup === undefined) {
        pickup = { name: pickupString, next: null };
    }
    const pickupDescription = describePickup(pickup);
    description = description.concat(pickupDescription);

    return { description: description };
}

const lineParsers = [
    parseCommandLine,
    parsePickupLine,
];

export function parseLine(line: string): Line | undefined {
    for (const lineParser of lineParsers) {
        const description = lineParser(line);
        if (description !== undefined) { return description; }
    }
}
