import namedUberStates from './assets/namedUberStates';
import uberStates from './assets/uberStates';

function parseUberState(uberGroup: string, uberId: string): string {
    const namedEntry = namedUberStates.find(entry => entry.groupId === uberGroup && entry.uberId === uberId);
    if (namedEntry !== undefined) {
        return namedEntry.id;
    }

    const [baseId, uberValue] = uberId.split("=", 2);

    const entry = uberStates.find(entry => entry.groupId === uberGroup && entry.uberId === baseId);
    if (entry !== undefined) {
        return `${entry.id}${uberValue ? `=${uberValue}` : ""}`;
    }

    return `${uberGroup}|${uberId}`;
}
export default parseUberState;
