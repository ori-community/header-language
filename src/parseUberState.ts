import namedUberStates from './assets/namedUberStates';
import uberStates from './assets/uberStates';

interface UberState {
    /**
     * The human friendly name of this pickup
     */
    name: string,
}

export function parseUberState(uberGroup: string, uberId: string): UberState {
    const namedEntry = namedUberStates.find(entry => entry.groupId === uberGroup && entry.uberId === uberId);
    if (namedEntry !== undefined) {
        return { name: namedEntry.id };
    }

    const [baseId, uberValue] = uberId.split("=", 2);

    const entry = uberStates.find(entry => entry.groupId === uberGroup && entry.uberId === baseId);
    if (entry !== undefined) {
        return { name: `${entry.id}${uberValue ? `=${uberValue}` : ""}` };
    }

    return { name: `${uberGroup}|${uberId}` };
}

export function describeUberState(uberState: UberState): string {
    return `**Location**\n\n${uberState.name}`;
}
