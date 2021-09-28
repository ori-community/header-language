import resourceTypes from "./assets/resourceType";
import abilityTypes from "./assets/abilityTypes";
import shardTypes from "./assets/shardTypes";
import teleporterTypes from "./assets/teleporterTypes";
import bonusItemTypes from "./assets/bonusItemTypes";
import bonusUpgradeTypes from "./assets/bonusUpgradeTypes";
import relicTypes from "./assets/relicTypes";

interface Pickup {
    /**
     * The human friendly name of this pickup
     */
    name: string,
}

const spiritLightRegex = /^0\|(-?)(\d+)$/;
const resourceRegex = /^1\|(\d+)$/;
const abilityRegex = /^2\|(-?)(\d+)$/;
const shardRegex = /^3\|(-?)(\d+)$/;
const teleporterRegex = /^5\|(-?)(\d+)$/;
const waterRegex = /^(-?)9\|0$/;
const bonusItemRegex = /^10\|(\d+)$/;
const bonusUpgradeRegex = /^11\|(\d+)$/;
const relicRegex = /^14\|(\d+)$/;

function parseSpiritLight(string: string): Pickup | undefined {
    const match = string.match(spiritLightRegex);
    if (match === null) { return undefined; }

    const isRemove = match[1] === "-";
    const amount = +match[2];
    return { name: `${isRemove ? "Remove " : ""}${amount} Spirit Light` };
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
    return { name: `${isRemove ? "Remove " : ""}${name}`};
}
function parseResource(string: string): Pickup | undefined {
    return parseVariantPickup(string, resourceRegex, resourceTypes, false);
}
function parseAbility(string: string): Pickup | undefined {
    return parseVariantPickup(string, abilityRegex, abilityTypes, true);
}
function parseShard(string: string): Pickup | undefined {
    return parseVariantPickup(string, shardRegex, shardTypes, true);
}
function parseTeleporter(string: string): Pickup | undefined {
    return parseVariantPickup(string, teleporterRegex, teleporterTypes, true);
}
function parseBonusItem(string: string): Pickup | undefined {
    return parseVariantPickup(string, bonusItemRegex, bonusItemTypes, false);
}
function parseBonusUpgrade(string: string): Pickup | undefined {
    return parseVariantPickup(string, bonusUpgradeRegex, bonusUpgradeTypes, false);
}
function parseRelic(string: string): Pickup | undefined {
    return parseVariantPickup(string, relicRegex, relicTypes, false);
}

function parseWater(string: string): Pickup | undefined {
    const match = string.match(waterRegex);
    if (match === null) { return undefined; }

    const isRemove = match[1] === "-";

    return { name: `${isRemove ? "Remove " : ""}Clean Water` };
}

const pickupParsers = [
    parseSpiritLight,
    parseResource,
    parseAbility,
    parseShard,
    parseTeleporter,
    parseWater,
    parseBonusItem,
    parseBonusUpgrade,
    parseRelic,
];

function parsePickup(string: string): Pickup | undefined {
    for (const pickupParser of pickupParsers) {
        const pickup = pickupParser(string);
        if (pickup !== undefined) { return pickup; }
    }
}

export default parsePickup;