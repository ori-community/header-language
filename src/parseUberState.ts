import uberStates from './assets/uberStates';

function parseUberState(uberGroup: string, uberId: string): string {
    const entry = uberStates.find(entry => entry.groupId === uberGroup && entry.uberId === uberId);
    return entry?.id ?? `${uberGroup}|${uberId}`;
}
export default parseUberState;
