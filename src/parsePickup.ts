import resourceVariants from "./assets/resourceVariants";
import abilityVariants from "./assets/abilityVariants";
import shardVariants from "./assets/shardVariants";
import statueVariants from "./assets/statueVariants";
import equipVariants from "./assets/equipVariants";
import teleporterVariants from "./assets/teleporterVariants";
import bonusItemVariants from "./assets/bonusItemVariants";
import bonusUpgradeVariants from "./assets/bonusUpgradeVariants";
import relicVariants from "./assets/relicVariants";
import progressMessageVariants from "./assets/progressMessageVariants";
import iconVariants from "./assets/iconVariants";

import parseUberState from './parseUberState';

interface Pickup {
    /**
     * The human friendly name of this pickup
     */
    name: string,
    /**
     * If this is a nested pickup, the next pickup in the chain
     */
    next: Pickup | null,
}

const spiritLightRegex = /^0\|(-?\d+)$/;
const resourceRegex = /^1\|(\d+)$/;
const abilityRegex = /^2\|(-?)(\d+)$/;
const shardRegex = /^3\|(-?)(\d+)$/;
const sysCommandRegex = /^4\|/;
const teleporterRegex = /^5\|(-?)(\d+)$/;
const messageRegex = /^6\|/;
const setUberStateRegex = /^8\|(\d+)\|(\d+)\|(?:(bool|teleporter)\|(true|false)|(byte|int|float)\|([+-])?)/;
const waterRegex = /^(-?)9\|0$/;
const bonusItemRegex = /^10\|(\d+)$/;
const bonusUpgradeRegex = /^11\|(\d+)$/;
const relicRegex = /^14\|(\d+)$/;
const progressMessageRegex = /^15\|([023]|1\|\d+)/;
const wheelCommandRegex = /^16\|/;
const shopIconRegex = /17\|0\|(\d+)\|(\d+)\|/;

const autoSaveRegex = /^0$/;
const setResourceRegex = /^1\|([0-4])\|(\d+)$/;
const checkpointRegex = /^2$/;
const statueRegex = /^7\|0\|([01])$/;
const warpRegex = /^8\|(-?\d+(?:[,.]\d+)?)\|(-?\d+(?:[,.]\d+)?)$/;
const applierRegex = /^11\|(-?\d+)\|(-?\d+)$/;
const setHealthRegex = /^12\|(\d+)$/;
const setEnergyRegex = /^13\|(\d+)$/;
const setSpiritLightRegex = /^14\|(-?\d+)$/;
const equipRegex = /^15\|([0-2])\|(\d+)$/;
const keybindRegex = /^16\|(\w+)$/;
const ifEqualRegex = /^17\|(\d+)\|(\d+)\|(-?\d+(?:[,.]\d+)?)\|/;
const ifGreaterRegex = /^18\|(\d+)\|(\d+)\|(-?\d+(?:[,.]\d+)?)\|/;
const ifLessRegex = /^19\|(\d+)\|(\d+)\|(-?\d+(?:[,.]\d+)?)\|/;
const disableSyncRegex = /^20\|(\d+)\|(\d+)$/;
const enableSyncRegex = /^21\|(\d+)\|(\d+)$/;
const createWarpRegex = /^22\|(\d+)\|(-?\d+(?:[,.]\d+)?)\|(-?\d+(?:[,.]\d+)?)$/;
const destroyWarpRegex = /^23\|(\d+)$/;
const ifBoundsRegex = /^24\|(-?\d+(?:[,.]\d+)?)\|(-?\d+(?:[,.]\d+)?)\|(-?\d+(?:[,.]\d+)?)\|(-?\d+(?:[,.]\d+)?)\|/;
const ifSelfEqualRegex = /^25\|(-?\d+(?:[,.]\d+)?)\|/;
const ifSelfGreaterRegex = /^26\|(-?\d+(?:[,.]\d+)?)\|/;
const ifSelfLessRegex = /^27\|(-?\d+(?:[,.]\d+)?)\|/;

const integerValueRegex = /^(\d+)(?:\|(?:skip=)?(\d+))?$/;
const integerBoundaryValueRegex = /^(\d+)$/;
const floatValueRegex = /^(\d+(?:[,.]\d+)?)(?:\|(?:skip=)?(\d+))?$/;
const floatBoundaryValueRegex = /^(\d+(?:[,.]\d+)?)$/;
const pointerValueRegex = /^\$\((\d+)\|(\d+)\)(?:\|(?:skip=)?(\d+))?$/;
const pointerBoundaryValueRegex = /^\$\((\d+)\|(\d+)\)$/;
const rangeValueRegex = /^\[(.+?),(.+?)\](?:\|(?:skip=)?(\d+))?$/;

const wheelNameRegex = /^0\|(\d+)\|(\d|1[01])\|/;
const wheelDescriptionRegex = /^1\|(\d+)\|(\d|1[01])\|/;
const wheelIconRegex = /^2\|(\d+)\|(\d|1[01])\|/;
const wheelColorRegex = /^3\|(\d+)\|(\d|1[01])\|(\d+)\|(\d+)\|(\d+)\|(\d+)$/;
const wheelActionRegex = /^4\|(\d+)\|(\d|1[01])\|([0-3])\|/;
const wheelStickyRegex = /^5\|(\d+)\|(true|false)$/;
const wheelSwitchRegex = /^6\|(\d+)$/;
const wheelRemoveRegex = /^7\|(\d+)\|(\d|1[01])$/;
const wheelClearRegex = /^8$/;

const iconRegex = /^(?:file:(.+?)|((?:shard|spell|opher|lupo|grom|tuley):\d+))$/;

function parseSimplePickup(string: string, regex: RegExp, name: string, canRemove: boolean): Pickup | undefined {
    const match = string.match(regex);
    if (match === null) { return undefined; }

    const isRemove = canRemove && match[1] === "-";

    return { name: `${isRemove ? "Remove " : ""}${name}`, next: null };
}
function parseVariantPickup(string: string, regex: RegExp, map: { [index: string]: string | undefined }, canRemove: boolean): Pickup | undefined {
    const match = string.match(regex);
    if (match === null) { return undefined; }

    let isRemove = false;
    let name;
    if (canRemove) {
        isRemove = match[1] === "-";
        name = map[match[2]];
    } else {
        name = map[match[1]];
    }

    if (name === undefined) { return undefined; }
    return { name: `${isRemove ? "Remove " : ""}${name}`, next: null };
}
function parseValuePickup(string: string, regex: RegExp, name: (values: string[]) => string): Pickup | undefined {
    const match = string.match(regex);
    if (match === null) { return undefined; }

    const values = match.slice(1);

    return { name: name(values), next: null };
}

function parseSpiritLight(string: string): Pickup | undefined {
    return parseValuePickup(string, spiritLightRegex, ([amount]) => `${+amount < 0 ? `Remove ${-amount}` : amount} Spirit Light`);
}
function parseResource(string: string): Pickup | undefined {
    return parseVariantPickup(string, resourceRegex, resourceVariants, false);
}
function parseAbility(string: string): Pickup | undefined {
    return parseVariantPickup(string, abilityRegex, abilityVariants, true);
}
function parseShard(string: string): Pickup | undefined {
    return parseVariantPickup(string, shardRegex, shardVariants, true);
}
function parseAutoSave(string: string): Pickup | undefined {
    return parseSimplePickup(string, autoSaveRegex, "Autosave", false);
}
function parseSetResource(string: string): Pickup | undefined {
    const match = string.match(setResourceRegex);
    if (match === null) { return undefined; }

    const resourceName = resourceVariants[match[1]];
    const amount = +match[2];
    return { name: `Set ${resourceName} to ${amount}`, next: null };
}
function parseCheckpoint(string: string): Pickup | undefined {
    return parseSimplePickup(string, checkpointRegex, "Checkpoint", false);
}
function parseStatue(string: string): Pickup | undefined {
    return parseVariantPickup(string, statueRegex, statueVariants, false);
}
function parseWarp(string: string): Pickup | undefined {
    return parseValuePickup(string, warpRegex, ([x, y]) => `Warp to ${x}, ${y}`);
}
function parseApplier(string: string): Pickup | undefined {
    return parseValuePickup(string, applierRegex, ([from , to]) => `Override applier state ${from} with ${to}`);
}
function parseSetHealth(string: string): Pickup | undefined {
    return parseValuePickup(string, setHealthRegex, ([amount]) => `Set current health to ${amount}`);
}
function parseSetEnergy(string: string): Pickup | undefined {
    return parseValuePickup(string, setEnergyRegex, ([amount]) => `Set current energy to ${amount}`);
}
function parseSetSpiritLight(string: string): Pickup | undefined {
    return parseValuePickup(string, setSpiritLightRegex, ([amount]) => `Set current spirit light to ${amount}`);
}
function parseEquip(string: string): Pickup | undefined {
    const match = string.match(equipRegex);
    if (match === null) { return undefined; }

    const slot = +match[1];
    const equpimentString = match[2];
    const equipment = equipVariants[equpimentString] ?? equpimentString;
    return { name: `Equip ${equipment} to slot ${slot}`, next: null };
}
function parseKeybind(string: string): Pickup | undefined {
    const match = string.match(keybindRegex);
    if (match === null) { return undefined; }

    const bind = match[1];
    return { name: `Trigger keybind ${bind}`, next: null };
}
function parseIf(string: string, regex: RegExp, condition: string): Pickup | undefined {
    const match = string.match(regex);
    if (match === null) { return undefined; }

    const uberGroup = match[1];
    const uberId = match[2];
    const uberStateName = parseUberState(uberGroup, uberId);

    const value = +match[3];

    const next = string.slice(match[0].length);
    const pickup = parsePickup(next) ?? { name: next, next: null };

    return { name: `Grant this pickup if ${uberStateName} is ${condition} ${value}`, next: pickup };
}
function parseIfEqual(string: string): Pickup | undefined {
    return parseIf(string, ifEqualRegex, "equal to");
}
function parseIfGreater(string: string): Pickup | undefined {
    return parseIf(string, ifGreaterRegex, "greater than");
}
function parseIfLess(string: string): Pickup | undefined {
    return parseIf(string, ifLessRegex, "less than");
}
function parseDisableSync(string: string): Pickup | undefined {
    return parseValuePickup(string, disableSyncRegex, ([uberGroup, uberId]) => {
        const uberStateName = parseUberState(uberGroup.toString(), uberId.toString());
        return `Disable multiplayer sync for ${uberStateName}`;
    });
}
function parseEnableSync(string: string): Pickup | undefined {
    return parseValuePickup(string, enableSyncRegex, ([uberGroup, uberId]) => {
        const uberStateName = parseUberState(uberGroup.toString(), uberId.toString());
        return `Enable multiplayer sync for ${uberStateName}`;
    });
}
function parseCreateWarp(string: string): Pickup | undefined {
    return parseValuePickup(string, createWarpRegex, ([id, x, y]) => {
        return `Create warp icon ${id} at ${x}, ${y}`;
    });
}
function parseDestroyWarp(string: string): Pickup | undefined {
    return parseValuePickup(string, destroyWarpRegex, ([id, x, y]) => {
        return `Destroy warp icon ${id} at ${x}, ${y}`;
    });
}
function parseIfBounds(string: string): Pickup | undefined {
    const match = string.match(ifBoundsRegex);
    if (match === null) { return undefined; }

    console.log(match);

    const [x1, y1, x2, y2] = match.slice(1);

    const next = string.slice(match[0].length);
    const pickup = parsePickup(next) ?? { name: next, next: null };

    return { name: `Grant this pickup if Ori is within the rectangle defined by ${x1},${y1}/${x2},${y2}`, next: pickup };
}
function parseIfSelf(string: string, regex: RegExp, condition: string): Pickup | undefined {
    const match = string.match(regex);
    if (match === null) { return undefined; }

    const value = +match[1];

    const next = string.slice(match[0].length);
    const pickup = parsePickup(next) ?? { name: next, next: null };

    return { name: `Grant this pickup if the location uberState's value is ${condition} ${value}`, next: pickup };
}
function parseIfSelfEqual(string: string): Pickup | undefined {
    return parseIfSelf(string, ifSelfEqualRegex, "equal to");
}
function parseIfSelfGreater(string: string): Pickup | undefined {
    return parseIfSelf(string, ifSelfGreaterRegex, "greater than");
}
function parseIfSelfLess(string: string): Pickup | undefined {
    return parseIfSelf(string, ifSelfLessRegex, "less than");
}
const sysCommandParsers = [
    parseAutoSave,
    parseSetResource,
    parseCheckpoint,
    parseStatue,
    parseWarp,
    parseApplier,
    parseSetHealth,
    parseSetEnergy,
    parseSetSpiritLight,
    parseEquip,
    parseKeybind,
    parseIfEqual,
    parseIfGreater,
    parseIfLess,
    parseDisableSync,
    parseEnableSync,
    parseCreateWarp,
    parseDestroyWarp,
    parseIfBounds,
    parseIfSelfEqual,
    parseIfSelfGreater,
    parseIfSelfLess,
];
function parseSysCommand(string: string): Pickup | undefined {
    const match = string.match(sysCommandRegex);
    if (match === null) { return undefined; }

    const next = string.slice(match[0].length);
    for (const sysCommandParser of sysCommandParsers) {
        const pickup = sysCommandParser(next);
        if (pickup !== undefined) { return pickup; }
    }
}
function parseTeleporter(string: string): Pickup | undefined {
    return parseVariantPickup(string, teleporterRegex, teleporterVariants, true);
}
function parseMessage(string: string): Pickup | undefined {
    const match = string.match(messageRegex);
    if (match === null) { return undefined; }

    const message = string.slice(match[0].length);
    return { name: `Display "${message}"`, next: null };
}
function parsePointerValue(string: string): [string, string | undefined] | undefined {
    const match = string.match(pointerValueRegex);
    if (match === null) { return undefined; }

    const uberGroup = match[1];
    const uberId = match[2];
    const uberStateName = parseUberState(uberGroup, uberId);

    const skip = match[3];

    return [`the value of ${uberStateName}`, skip];
}
function parseValue(string: string, regex: RegExp): [string, string | undefined] | undefined {
    const match = string.match(regex);
    if (match !== null) {
        const value = match[1];
        const skip = match[2];

        return [value, skip];
    }

    return parsePointerValue(string);
}
function parseBoundaryPointerValue(string: string): string | undefined {
    const match = string.match(pointerBoundaryValueRegex);
    if (match === null) { return undefined; }

    const uberGroup = match[1];
    const uberId = match[2];
    const uberStateName = parseUberState(uberGroup, uberId);

    return `the value of ${uberStateName}`;
}
function parseBoundaryValue(string: string, regex: RegExp): string | undefined {
    const match = string.match(regex);
    if (match !== null) {
        const value = match[1];

        return value;
    }

    return parseBoundaryPointerValue(string);
}
function parseRangeValue(string: string, boundaryRegex: RegExp): [string, string | undefined] | undefined {
    const match = string.match(rangeValueRegex);
    if (match === null) { return undefined; }

    const lower = match[1];
    const upper = match[2];

    const lowerValue = parseBoundaryValue(lower, boundaryRegex);
    const upperValue = parseBoundaryValue(upper, boundaryRegex);

    if (lowerValue === undefined || upperValue === undefined) { return undefined; }

    const skip = match[3];

    return [`a random value between ${lower} and ${upper}`, skip];
}
function parseSetUberState(string: string): Pickup | undefined {
    const match = string.match(setUberStateRegex);
    if (match === null) { return undefined; }

    const uberGroup = match[1];
    const uberId = match[2];
    const uberStateName = parseUberState(uberGroup, uberId);

    const isBool = match[3] !== undefined;
    if (isBool) {
        const value = match[4];

        return { name: `Set ${uberStateName} to ${value}`, next: null };
    }

    const uberStateType = match[5];

    const operator = match[6];
    const next = string.slice(match[0].length);

    let setUberStateParsers: [parser: (string: string, regex: RegExp) => [string, string | undefined] | undefined, regex: RegExp][];
    if (uberStateType === "float") {
        setUberStateParsers = [
            [parseValue, floatValueRegex],
            [parseRangeValue, floatBoundaryValueRegex],
        ];
    } else {
        setUberStateParsers = [
            [parseValue, integerValueRegex],
            [parseRangeValue, integerBoundaryValueRegex],
        ];
    }

    for (const [setUberStateParser, regex] of setUberStateParsers) {
        const result = setUberStateParser(next, regex);
        if (result === undefined) { continue; }
        const [value, skip] = result;

        const skipDescription = skip === undefined
        ? ""
        : skip === "1"
            ? ", skipping the next trigger"
            : `, skipping the next ${skip} triggers`;

        switch (operator) {
            case undefined: return { name: `Set ${uberStateName} to ${value}${skipDescription}`, next: null };
            case "+": return { name: `Add ${value} to ${uberStateName}${skipDescription}`, next: null };
            case "-": return { name: `Subtract ${value} from ${uberStateName}${skipDescription}`, next: null };
            default: return undefined;
        }
    }
}
function parseWater(string: string): Pickup | undefined {
    return parseSimplePickup(string, waterRegex, "Clean Water", true);
}
function parseBonusItem(string: string): Pickup | undefined {
    return parseVariantPickup(string, bonusItemRegex, bonusItemVariants, false);
}
function parseBonusUpgrade(string: string): Pickup | undefined {
    return parseVariantPickup(string, bonusUpgradeRegex, bonusUpgradeVariants, false);
}
function parseRelic(string: string): Pickup | undefined {
    return parseVariantPickup(string, relicRegex, relicVariants, false);
}
function parseProgressMessage(string: string): Pickup | undefined {
    return parseVariantPickup(string, progressMessageRegex, progressMessageVariants, false);
}
function parseIcon(string: string): string | undefined {
    const match = string.match(iconRegex);
    if (match === null) { return undefined; }

    const filepath = match[1];
    if (filepath !== undefined) {
        return `file at ${filepath}`;
    }

    const variant = match[2];
    const iconName = iconVariants[variant];

    return `${iconName} icon`;
}
function parseWheelText(string: string, regex: RegExp, name: string): Pickup | undefined {
    const match = string.match(regex);
    if (match === null) { return undefined; }

    const wheel = match[1];
    const position = match[2];
    const text = string.slice(match[0].length);

    return { name: `Sets the ${name} of item ${position} in wheel ${wheel} to "${text}""`, next: null };
}
function parseWheelName(string: string): Pickup | undefined {
    return parseWheelText(string, wheelNameRegex, "name");
}
function parseWheelDescription(string: string): Pickup | undefined {
    return parseWheelText(string, wheelDescriptionRegex, "description");
}
function parseWheelIcon(string: string): Pickup | undefined {
    const match = string.match(wheelIconRegex);
    if (match === null) { return undefined; }

    const wheel = match[1];
    const position = match[2];

    const iconString = string.slice(match[0].length);
    const icon = parseIcon(iconString) ?? iconString;

    return { name: `Sets the icon of item ${position} in wheel ${wheel} to the ${icon}`, next: null };
}
function parseWheelColor(string: string): Pickup | undefined {
    return parseValuePickup(string, wheelColorRegex, ([wheel, position, red, green, blue, alpha]) => `Sets the rgba icon color of item ${position} in wheel ${wheel} to (${red}, ${green}, ${blue}, ${alpha})`);
}
function parseWheelAction(string: string): Pickup | undefined {
    const match = string.match(wheelActionRegex);
    if (match === null) { return undefined; }

    const wheel = match[1];
    const position = match[2];
    const binding = match[3];

    const next = string.slice(match[0].length);
    const pickup = parsePickup(next) ?? { name: next, next: null };

    return { name: `Sets the action bound to ${binding === "0" ? "all binds" : `ability ${binding}`} of item ${position} in wheel ${wheel} to this pickup`, next: pickup };
}
function parseWheelSticky(string: string): Pickup | undefined {
    return parseValuePickup(string, wheelStickyRegex, ([wheel, value]) => `Sets wheel ${wheel} to be ${value ? "" : "not "}sticky`);
}
function parseWheelSwitch(string: string): Pickup | undefined {
    return parseValuePickup(string, wheelSwitchRegex, ([wheel]) => `Switch to wheel ${wheel}`);
}
function parseWheelRemove(string: string): Pickup | undefined {
    return parseValuePickup(string, wheelRemoveRegex, ([wheel, position]) => `Remove item ${position} in wheel ${wheel}`);
}
function parseWheelClear(string: string): Pickup | undefined {
    return parseSimplePickup(string, wheelClearRegex, "Clear all wheels", false);
}
const wheelCommandParsers = [
    parseWheelName,
    parseWheelDescription,
    parseWheelIcon,
    parseWheelColor,
    parseWheelAction,
    parseWheelSticky,
    parseWheelSwitch,
    parseWheelRemove,
    parseWheelClear,
];
function parseWheelCommand(string: string): Pickup | undefined {
    const match = string.match(wheelCommandRegex);
    if (match === null) { return undefined; }

    const next = string.slice(match[0].length);
    for (const wheelCommandParser of wheelCommandParsers) {
        const pickup = wheelCommandParser(next);
        if (pickup !== undefined) { return pickup; }
    }
}
function parseShopIcon(string: string): Pickup | undefined {
    const match = string.match(shopIconRegex);
    if (match === null) { return undefined; }

    const uberGroup = match[1];
    const uberId = match[2];
    const uberState = parseUberState(uberGroup, uberId);

    const iconString = string.slice(match[0].length);
    const icon = parseIcon(iconString) ?? iconString;

    return { name: `Sets the shop icon of ${uberState} to the ${icon}`, next: null };
}

const pickupParsers = [
    parseSpiritLight,
    parseResource,
    parseAbility,
    parseShard,
    parseSysCommand,
    parseTeleporter,
    parseMessage,
    parseSetUberState,
    parseWater,
    parseBonusItem,
    parseBonusUpgrade,
    parseRelic,
    parseProgressMessage,
    parseWheelCommand,
    parseShopIcon,
];

function parsePickup(string: string): Pickup | undefined {
    for (const pickupParser of pickupParsers) {
        const pickup = pickupParser(string);
        if (pickup !== undefined) { return pickup; }
    }
}

export default parsePickup;