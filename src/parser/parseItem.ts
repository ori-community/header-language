import { Completion, CompletionVariant } from "../completion";
import EquipmentVariants from "../equipment";
import { Item, ItemVariant } from "../item";
import { AbilityVariant } from "../item/ability";
import { BonusItemVariant } from "../item/bonusItem";
import { BonusUpgradeVariant } from "../item/bonusUpgrade";
import { SysSubcommand, SysCommandVariant } from "../item/sysCommand";
import { ProgressMessageVariant, ProgressVariant } from "../item/progressMessage";
import { ResourceVariant } from "../item/resource";
import { SetPointer, SetRange } from "../item/setUberState";
import { ShardVariant } from "../item/shard";
import { ShopCommandVariant, ShopSubcommand } from "../item/shopCommand";
import { TeleporterVariant } from "../item/teleporter";
import { WheelCommandVariant, WheelSubcommand } from "../item/wheelCommand";
import ZoneVariants from "../zone";
import { eat, fail, parseBoolean, ParseFailure, parseFloat, parseInteger, ParseSuccess, parseUberIdentifier, ParseValueSuccess, parseWord, succeed, Token } from "../parser";
import parseIcon from "./parseIcon";

type ParseItemSuccess = ParseSuccess<Item>;

function parseVariantItem(
    string: string,
    variantEnum: Object,
    itemVariant: ItemVariant.resource | ItemVariant.bonusItem | ItemVariant.bonusUpgrade | ItemVariant.relic,
    completion: Completion,
    expected: Token
): ParseItemSuccess | ParseFailure {
    const variantResult = parseInteger(string, true);
    if (variantResult === null) { return fail(expected, string, completion); }
    const variant = variantResult.value;

    if (!(variant in variantEnum)) { return fail(expected, string, completion); }
    string = variantResult.remaining;

    const item: Item = {
        id: itemVariant,
        variant,
    };

    return succeed(item, string);
}
function parseRemovableVariantItem(
    string: string,
    variantEnum: Object,
    itemVariant: ItemVariant.ability | ItemVariant.shard | ItemVariant.teleporter,
    completion: Completion,
    expected: Token
): ParseItemSuccess | ParseFailure {
    const variantResult = parseInteger(string, true);
    if (variantResult === null) { return fail(expected, string, completion); }
    let variant = variantResult.value;

    let remove = false;
    if (variant < 0) {
        variant = -variant;
        remove = true;
    }

    if (!(variant in variantEnum)) { return fail(expected, string, completion); }
    string = variantResult.remaining;

    const item: Item = {
        id: itemVariant,
        variant,
        remove,
    };

    return succeed(item, string);
}

function parseSpiritLight(string: string): ParseItemSuccess | ParseFailure {
    const amountResult = parseInteger(string, true);
    if (amountResult === null) { return fail(Token.integer, string, undefined); }
    string = amountResult.remaining;
    const amount = amountResult.value;

    const item: Item = {
        id: ItemVariant.spiritLight,
        amount,
    };

    return succeed(item, string);
}
function parseResource(string: string): ParseItemSuccess | ParseFailure {
    return parseVariantItem(string, ResourceVariant, ItemVariant.resource, { id: CompletionVariant.resource }, Token.resourceIdentifier);
}
function parseAbility(string: string): ParseItemSuccess | ParseFailure {
    return parseRemovableVariantItem(string, AbilityVariant, ItemVariant.ability, { id: CompletionVariant.ability }, Token.abilityIdentifier);
}
function parseShard(string: string): ParseItemSuccess | ParseFailure {
    return parseRemovableVariantItem(string, ShardVariant, ItemVariant.shard, { id: CompletionVariant.shard }, Token.shardIdentifier);
}
type ParseCommandSuccess = ParseSuccess<SysSubcommand>;
function parseSetResource(string: string): ParseCommandSuccess | ParseFailure {
    const resourceResult = parseInteger(string);
    if (resourceResult === null) { return fail(Token.resourceIdentifier, string, { id: CompletionVariant.resource }); }
    string = resourceResult.remaining;
    const resource = resourceResult.value;

    if (!(resource in ResourceVariant)) { return fail(Token.resourceIdentifier, string, { id: CompletionVariant.resource }); }

    const separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, { id: CompletionVariant.resource }); }
    string = separatorResult;

    const amountResult = parseInteger(string);
    if (amountResult === null) { return fail(Token.integer, string, undefined); }
    string = amountResult.remaining;
    const amount = amountResult.value;

    const command: SysSubcommand = {
        id: SysCommandVariant.setResource,
        resource,
        amount
    };

    return succeed(command, string);
}
function parseKwolokStatue(string: string): ParseCommandSuccess | ParseFailure {
    const zeroResult = eat(string, "0");
    if (zeroResult === null) { return fail(Token.integer, string, undefined); }
    string = zeroResult;
    const separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, undefined); }
    string = separatorResult;

    const valueResult = parseInteger(string);
    if (valueResult === null) { return fail(Token.integer, string, undefined); }
    const value = valueResult.value;

    if (![0, 1].includes(value)) { return fail(Token.integer, string, undefined); }
    string = valueResult.remaining;

    const command: SysSubcommand = {
        id: SysCommandVariant.kwolokStatue,
        value,
    };

    return succeed(command, string);
}
function parseWarp(string: string): ParseCommandSuccess | ParseFailure {
    const xResult = parseFloat(string);
    if (xResult === null) { return fail(Token.float, string, undefined); }
    string = xResult.remaining;
    const x = xResult.value;

    const separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, undefined); }
    string = separatorResult;

    const yResult = parseFloat(string);
    if (yResult === null) { return fail(Token.float, string, undefined); }
    string = yResult.remaining;
    const y = yResult.value;

    const command: SysSubcommand = {
        id: SysCommandVariant.warp,
        x,
        y,
    };

    return succeed(command, string);
}
function parseApplier(string: string): ParseCommandSuccess | ParseFailure {
    const weirdResult = parseInteger(string);
    if (weirdResult === null) { return fail(Token.integer, string, undefined); }
    string = weirdResult.remaining;
    const weird = weirdResult.value;

    const separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, undefined); }
    string = separatorResult;

    const stuffResult = parseInteger(string);
    if (stuffResult === null) { return fail(Token.integer, string, undefined); }
    string = stuffResult.remaining;
    const stuff = stuffResult.value;

    const command: SysSubcommand = {
        id: SysCommandVariant.applier,
        weird,
        stuff,
    };

    return succeed(command, string);
}
function parseSetCurrentResource(string: string, variant: SysCommandVariant.setHealth | SysCommandVariant.setEnergy | SysCommandVariant.setSpiritLight): ParseCommandSuccess | ParseFailure {
    const amountResult = parseInteger(string);
    if (amountResult === null) { return fail(Token.integer, string, undefined); }
    string = amountResult.remaining;
    const amount = amountResult.value;

    const command: SysSubcommand = {
        id: variant,
        amount,
    };

    return succeed(command, string);
}
function parseSetHealth(string: string): ParseCommandSuccess | ParseFailure {
    return parseSetCurrentResource(string, SysCommandVariant.setHealth);
}
function parseSetEnergy(string: string): ParseCommandSuccess | ParseFailure {
    return parseSetCurrentResource(string, SysCommandVariant.setEnergy);
}
function parseSetSpiritLight(string: string): ParseCommandSuccess | ParseFailure {
    return parseSetCurrentResource(string, SysCommandVariant.setSpiritLight);
}
function parseEquip(string: string): ParseCommandSuccess | ParseFailure {
    const slotResult = parseInteger(string);
    if (slotResult === null) { return fail(Token.slot, string, { id: CompletionVariant.slot }); }
    string = slotResult.remaining;
    const slot = slotResult.value;

    if (!(slot === 0 || slot === 1 || slot === 2)) { return fail(Token.slot, string, undefined); }

    const separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, undefined); }
    string = separatorResult;

    const equipmentResult = parseInteger(string);
    if (equipmentResult === null) { return fail(Token.equipment, string, { id: CompletionVariant.equipment }); }
    string = equipmentResult.remaining;
    const equipment = equipmentResult.value;

    if (!(equipment in EquipmentVariants)) { return fail(Token.equipment, string, { id: CompletionVariant.equipment }); }

    const command: SysSubcommand = {
        id: SysCommandVariant.equip,
        slot,
        equipment,
    };

    return succeed(command, string);
}
function parseTriggerBind(string: string): ParseCommandSuccess | ParseFailure {
    const bindResult = parseWord(string);
    if (bindResult === null) { return fail(Token.word, string, { id: CompletionVariant.keybind }); }
    string = bindResult.remaining;
    const bind = bindResult.value;

    const command: SysSubcommand = {
        id: SysCommandVariant.triggerBind,
        bind,
    };

    return succeed(command, string);
}
function parseIf(string: string, variant: SysCommandVariant.ifEqual | SysCommandVariant.ifGreater | SysCommandVariant.ifLess): ParseCommandSuccess | ParseFailure {
    const uberIdentifierResult = parseUberIdentifier(string);
    if (!uberIdentifierResult.success) { return uberIdentifierResult; }
    string = uberIdentifierResult.remaining;
    const uberIdentifier = uberIdentifierResult.result;

    let separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, { id: CompletionVariant.uberId, group: uberIdentifier.group }); }
    string = separatorResult;

    const valueResult = parseFloat(string);
    if (valueResult === null) { return fail(Token.float, string, undefined); }
    string = valueResult.remaining;
    const value = valueResult.value;

    separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, undefined); }
    string = separatorResult;

    const itemResult = parseItem(string);
    if (!itemResult.success) { return itemResult; }
    string = itemResult.remaining;
    const item = itemResult.result;

    const command: SysSubcommand = {
        id: variant,
        uberIdentifier,
        value,
        item,
    };

    return succeed(command, string);
}
function parseIfEqual(string: string): ParseCommandSuccess | ParseFailure {
    return parseIf(string, SysCommandVariant.ifEqual);
}
function parseIfGreater(string: string): ParseCommandSuccess | ParseFailure {
    return parseIf(string, SysCommandVariant.ifGreater);
}
function parseIfLess(string: string): ParseCommandSuccess | ParseFailure {
    return parseIf(string, SysCommandVariant.ifLess);
}
function parseToggleSync(string: string, variant: SysCommandVariant.disableSync | SysCommandVariant.enableSync): ParseCommandSuccess | ParseFailure {
    const uberIdentifierResult = parseUberIdentifier(string);
    if (!uberIdentifierResult.success) { return uberIdentifierResult; }
    string = uberIdentifierResult.remaining;
    const uberIdentifier = uberIdentifierResult.result;

    const command: SysSubcommand = {
        id: variant,
        uberIdentifier,
    };

    return succeed(command, string);
}
function parseDisableSync(string: string): ParseCommandSuccess | ParseFailure {
    return parseToggleSync(string, SysCommandVariant.disableSync);
}
function parseEnableSync(string: string): ParseCommandSuccess | ParseFailure {
    return parseToggleSync(string, SysCommandVariant.enableSync);
}
function parseCreateWarpIcon(string: string): ParseCommandSuccess | ParseFailure {
    const warpIdResult = parseInteger(string);
    if (warpIdResult === null) { return fail(Token.integer, string, undefined); }
    string = warpIdResult.remaining;
    const warpId = warpIdResult.value;

    let separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, undefined); }
    string = separatorResult;

    const xResult = parseFloat(string);
    if (xResult === null) { return fail(Token.float, string, undefined); }
    string = xResult.remaining;
    const x = xResult.value;

    separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, undefined); }
    string = separatorResult;

    const yResult = parseFloat(string);
    if (yResult === null) { return fail(Token.float, string, undefined); }
    string = yResult.remaining;
    const y = yResult.value;

    const command: SysSubcommand = {
        id: SysCommandVariant.createWarpIcon,
        warpId,
        x,
        y,
    };

    return succeed(command, string);
}
function parseDestroyWarpIcon(string: string): ParseCommandSuccess | ParseFailure {
    const warpIdResult = parseInteger(string);
    if (warpIdResult === null) { return fail(Token.integer, string, undefined); }
    string = warpIdResult.remaining;
    const warpId = warpIdResult.value;

    const command: SysSubcommand = {
        id: SysCommandVariant.destroyWarpIcon,
        warpId,
    };

    return succeed(command, string);
}
function parseIfBounds(string: string): ParseCommandSuccess | ParseFailure {
    const x1Result = parseFloat(string);
    if (x1Result === null) { return fail(Token.float, string, undefined); }
    string = x1Result.remaining;
    const x1 = x1Result.value;

    let separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, undefined); }
    string = separatorResult;

    const y1Result = parseFloat(string);
    if (y1Result === null) { return fail(Token.float, string, undefined); }
    string = y1Result.remaining;
    const y1 = y1Result.value;

    separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, undefined); }
    string = separatorResult;

    const x2Result = parseFloat(string);
    if (x2Result === null) { return fail(Token.float, string, undefined); }
    string = x2Result.remaining;
    const x2 = x2Result.value;

    separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, undefined); }
    string = separatorResult;

    const y2Result = parseFloat(string);
    if (y2Result === null) { return fail(Token.float, string, undefined); }
    string = y2Result.remaining;
    const y2 = y2Result.value;

    separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, undefined); }
    string = separatorResult;

    const itemResult = parseItem(string);
    if (!itemResult.success) { return itemResult; }
    string = itemResult.remaining;
    const item = itemResult.result;

    const command: SysSubcommand = {
        id: SysCommandVariant.ifBounds,
        x1,
        y1,
        x2,
        y2,
        item,
    };

    return succeed(command, string);
}
function parseIfSelf(string: string, variant: SysCommandVariant.ifSelfEqual | SysCommandVariant.ifSelfGreater | SysCommandVariant.ifSelfLess): ParseCommandSuccess | ParseFailure {
    const valueResult = parseFloat(string);
    if (valueResult === null) { return fail(Token.float, string, undefined); }
    string = valueResult.remaining;
    const value = valueResult.value;

    const separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, undefined); }
    string = separatorResult;

    const itemResult = parseItem(string);
    if (!itemResult.success) { return itemResult; }
    string = itemResult.remaining;
    const item = itemResult.result;

    const command: SysSubcommand = {
        id: variant,
        value,
        item,
    };

    return succeed(command, string);
}
function parseIfSelfEqual(string: string): ParseCommandSuccess | ParseFailure {
    return parseIfSelf(string, SysCommandVariant.ifSelfEqual);
}
function parseIfSelfGreater(string: string): ParseCommandSuccess | ParseFailure {
    return parseIfSelf(string, SysCommandVariant.ifSelfGreater);
}
function parseIfSelfLess(string: string): ParseCommandSuccess | ParseFailure {
    return parseIfSelf(string, SysCommandVariant.ifSelfLess);
}
function parseCommand(string: string): ParseItemSuccess | ParseFailure {
    const commandIdResult = parseInteger(string);
    if (commandIdResult === null) { return fail(Token.sysCommandIdentifier, string, { id: CompletionVariant.sysCommand }); }
    string = commandIdResult.remaining;
    const commandId = commandIdResult.value;

    // handle the commands without further parts
    if (commandId === SysCommandVariant.autosave || commandId === SysCommandVariant.checkpoint) {
        const item: Item = {
            id: ItemVariant.sysCommand,
            subcommand: {
                id: commandId,
            },
        };

        return succeed(item, string);
    }

    const separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, { id: CompletionVariant.sysCommand }); }
    string = separatorResult;

    let subcommandResult: ParseCommandSuccess | ParseFailure;
    switch (commandId) {
        case SysCommandVariant.setResource:
            subcommandResult = parseSetResource(string);
            break;
        case SysCommandVariant.kwolokStatue:
            subcommandResult = parseKwolokStatue(string);
            break;
        case SysCommandVariant.warp:
            subcommandResult = parseWarp(string);
            break;
        case SysCommandVariant.applier:
            subcommandResult = parseApplier(string);
            break;
        case SysCommandVariant.setHealth:
            subcommandResult = parseSetHealth(string);
            break;
        case SysCommandVariant.setEnergy:
            subcommandResult = parseSetEnergy(string);
            break;
        case SysCommandVariant.setSpiritLight:
            subcommandResult = parseSetSpiritLight(string);
            break;
        case SysCommandVariant.equip:
            subcommandResult = parseEquip(string);
            break;
        case SysCommandVariant.triggerBind:
            subcommandResult = parseTriggerBind(string);
            break;
        case SysCommandVariant.ifEqual:
            subcommandResult = parseIfEqual(string);
            break;
        case SysCommandVariant.ifGreater:
            subcommandResult = parseIfGreater(string);
            break;
        case SysCommandVariant.ifLess:
            subcommandResult = parseIfLess(string);
            break;
        case SysCommandVariant.disableSync:
            subcommandResult = parseDisableSync(string);
            break;
        case SysCommandVariant.enableSync:
            subcommandResult = parseEnableSync(string);
            break;
        case SysCommandVariant.createWarpIcon:
            subcommandResult = parseCreateWarpIcon(string);
            break;
        case SysCommandVariant.destroyWarpIcon:
            subcommandResult = parseDestroyWarpIcon(string);
            break;
        case SysCommandVariant.ifBounds:
            subcommandResult = parseIfBounds(string);
            break;
        case SysCommandVariant.ifSelfEqual:
            subcommandResult = parseIfSelfEqual(string);
            break;
        case SysCommandVariant.ifSelfGreater:
            subcommandResult = parseIfSelfGreater(string);
            break;
        case SysCommandVariant.ifSelfLess:
            subcommandResult = parseIfSelfLess(string);
            break;
        default: return fail(Token.sysCommandIdentifier, string, { id: CompletionVariant.sysCommand });
    }

    if (!subcommandResult.success) { return subcommandResult; }

    string = subcommandResult.remaining;
    const subcommand = subcommandResult.result;
    const item: Item = {
        id: ItemVariant.sysCommand,
        subcommand,
    };

    return succeed(item, string);
}
function parseTeleporter(string: string): ParseItemSuccess | ParseFailure {
    return parseRemovableVariantItem(string, TeleporterVariant, ItemVariant.teleporter, { id: CompletionVariant.teleporter }, Token.teleporterIdentifier);
}
function parseMessage(string: string): ParseItemSuccess | ParseFailure {
    const item: Item = {
        id: ItemVariant.message,
        message: string,  // TODO this proper
    };

    return succeed(item, string);
}
type ParsePointerSuccess = ParseSuccess<SetPointer>;
function parsePointer(string: string): ParsePointerSuccess | ParseFailure | null {
    const openResult = eat(string, "$(");
    if (openResult === null) { return null; }
    string = openResult;

    const uberIdentifierResult = parseUberIdentifier(string);
    if (!uberIdentifierResult.success) { return uberIdentifierResult; }
    string = uberIdentifierResult.remaining;
    const pointerIdentifier = uberIdentifierResult.result;

    const closeResult = eat(string, ")");
    if (closeResult === null) { return fail(")", string, { id: CompletionVariant.uberId, group: pointerIdentifier.group }); }
    string = closeResult;

    return {
        success: true,
        remaining: string,
        result: { pointerIdentifier },
    };
}
type ParseSetValueOrPointerSuccess<Value> = ParseSuccess<Value | SetPointer>;
function parseSetValueOrPointer<Value>(string: string, parseValue: (string: string) => ParseValueSuccess<Value> | null, expected: Token, completion: Completion | undefined): ParseSetValueOrPointerSuccess<Value> | ParseFailure {
    const pointerResult = parsePointer(string);
    if (pointerResult !== null) {
        if (!pointerResult.success) { return pointerResult; }
        string = pointerResult.remaining;
        const value = pointerResult.result;
        return succeed(value, string);
    }

    const valueResult = parseValue(string);
    if (valueResult === null) { return fail(expected, string, completion); }
    string = valueResult.remaining;
    const value = valueResult.value;

    return succeed(value, string);
}
type ParseSetRangeSuccess<Value> = ParseSuccess<SetRange<Value>>;
function parseSetRange<Value>(string: string, parseValue: (string: string) => ParseValueSuccess<Value> | null, expected: Token, completion: Completion | undefined): ParseSetRangeSuccess<Value> | ParseFailure {
    const lowerResult = parseSetValueOrPointer(string, parseValue, expected, completion);
    if (!lowerResult.success) { return lowerResult; }
    string = lowerResult.remaining;
    const lower = lowerResult.result;

    const separatorResult = eat(string, ",");
    if (separatorResult === null) {
        let lowerCompletion: Completion | undefined;
        if ("pointerIdentifier" in lower) {
            lowerCompletion = { id: CompletionVariant.uberId, group: lower.pointerIdentifier.group };
        } else {
            lowerCompletion = completion;
        }
        return fail(",", string, lowerCompletion);
    }
    string = separatorResult;

    const upperResult = parseSetValueOrPointer(string, parseValue, expected, completion);
    if (!upperResult.success) { return upperResult; }
    string = upperResult.remaining;
    const upper = upperResult.result;

    const closeResult = eat(string, "]");
    if (closeResult === null) {
        let upperCompletion: Completion | undefined;
        if ("pointerIdentifier" in upper) {
            upperCompletion = { id: CompletionVariant.uberId, group: upper.pointerIdentifier.group };
        } else {
            upperCompletion = completion;
        }
        return fail("]", string, upperCompletion);
    }
    string = closeResult;

    return {
        success: true,
        remaining: string,
        result: {
            lower,
            upper,
        }
    };
}
type ParseSetValueSuccess<Value> = ParseSuccess<Value | SetPointer | SetRange<Value>>;
function parseSetValue<Value>(string: string, parseValue: (string: string) => ParseValueSuccess<Value> | null, expected: Token, completion: Completion | undefined): ParseSetValueSuccess<Value> | ParseFailure {
    const openRangeResult = eat(string, "[");
    if (openRangeResult !== null) {
        string = openRangeResult;
        return parseSetRange(string, parseValue, expected, completion );
    }
    return parseSetValueOrPointer(string, parseValue, expected, completion);
}
function parseSetUberState(string: string): ParseItemSuccess | ParseFailure {
    const uberIdentifierResult = parseUberIdentifier(string);
    if (!uberIdentifierResult.success) { return uberIdentifierResult; }
    string = uberIdentifierResult.remaining;
    const uberIdentifier = uberIdentifierResult.result;

    let separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, { id: CompletionVariant.uberId, group: uberIdentifier.group }); }
    string = separatorResult;

    type UberType = "bool" | "teleporter" | "byte" | "int" | "float";
    let uberType: UberType | undefined;
    for (const type of [ "bool", "teleporter", "byte", "int", "float" ]) {
        if (string.startsWith(type)) {
            string = string.slice(type.length);
            uberType = type as UberType;
            break;
        }
    }
    if (uberType === undefined) { return fail(Token.uberStateType, string, { id: CompletionVariant.uberStateType }); }

    separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail(Token.uberStateType, string, { id: CompletionVariant.uberStateType }); }
    string = separatorResult;

    let sign: boolean | undefined;
    const addResult = eat(string, "+");
    if (addResult !== null) {
        string = addResult;
        sign = true;
    } else {
        const removeResult = eat(string, "-");
        if (removeResult !== null) {
            string = removeResult;
            sign = false;
        }
    }

    let valueResult;
    switch (uberType) {
        case "bool":
        case "teleporter":
            valueResult = parseSetValue<boolean>(string, parseBoolean, Token.boolean, { id: CompletionVariant.boolean });
            break;
        case "byte":
        case "int":
            valueResult = parseSetValue<number>(string, parseInteger, Token.integer, undefined);
            break;
        case "float":
            valueResult = parseSetValue<number>(string, parseFloat, Token.float, undefined);
            break;
    }

    if (!valueResult.success) { return valueResult; }
    string = valueResult.remaining;
    const value = valueResult.result;

    let skip = 0;
    separatorResult = eat(string, "|");
    if (separatorResult !== null) {
        string = separatorResult;

        const skipKeyResult = eat(string, "skip=");
        if (skipKeyResult !== null) {
            string = skipKeyResult;
        }

        const skipResult = parseInteger(string);
        if (skipResult === null) { return fail(Token.integer, string, undefined); }
        string = skipResult.remaining;

        skip = skipResult.value;
    }

    const item: Item = {
        id: ItemVariant.setUberState,
        uberIdentifier,
        expression: {
            type: uberType,
            sign,
            value,
        },
        skip,
    };

    return succeed(item, string);
}
function parseWater(string: string): ParseItemSuccess | ParseFailure {
    const waterResult = parseInteger(string);
    if (waterResult === null) { return fail(Token.water, string, { id: CompletionVariant.water }); }
    string = waterResult.remaining;
    const water = waterResult.value;

    if (water !== 0) { return fail(Token.water, string, undefined); }

    const item: Item = {
        id: ItemVariant.water,
    };

    return succeed(item, string);
}
function parseBonusItem(string: string): ParseItemSuccess | ParseFailure {
    return parseVariantItem(string, BonusItemVariant, ItemVariant.bonusItem, { id: CompletionVariant.bonusItem }, Token.bonusItem);
}
function parseBonusUpgrade(string: string): ParseItemSuccess | ParseFailure {
    return parseVariantItem(string, BonusUpgradeVariant, ItemVariant.bonusUpgrade, { id: CompletionVariant.bonusUpgrade }, Token.bonusUpgrade);
}
function parseRelic(string: string): ParseItemSuccess | ParseFailure {
    return parseVariantItem(string, ZoneVariants, ItemVariant.relic, { id: CompletionVariant.zone }, Token.zone);
}
function parseProgressMessage(string: string): ParseItemSuccess | ParseFailure {
    const progressIdResult = parseInteger(string);
    if (progressIdResult === null) { return fail(Token.progressIdentifier, string, { id: CompletionVariant.progressMessage }); }
    string = progressIdResult.remaining;
    const progressId = progressIdResult.value;

    const id = ItemVariant.progressMessage;

    switch (progressId) {
        case ProgressVariant.relic:
        case ProgressVariant.pickup:
        case ProgressVariant.goalmode: {
            const progressVariant: ProgressMessageVariant = {
                id: progressId,
            };
            const item: Item = {
                id,
                progressVariant,
            };

            return succeed(item, string);
        } case ProgressVariant.zoneRelic: {
            const separatorResult = eat(string, "|");
            if (separatorResult === null) { return fail("|", string, { id: CompletionVariant.sysCommand }); }
            string = separatorResult;

            const zoneResult = parseInteger(string, true);
            if (zoneResult === null) { return fail(Token.zone, string, { id: CompletionVariant.zone }); }
            string = zoneResult.remaining;
            const zone = zoneResult.value;

            if (!(zone in ZoneVariants)) { return fail(Token.zone, string, { id: CompletionVariant.zone }); }

            const item: Item = {
                id,
                progressVariant: {
                    id: progressId,
                    zone,
                },
            };

            return succeed(item, string);
        } default: return fail(Token.progressIdentifier, string, { id: CompletionVariant.progressMessage });
    }
}
type ParseWheelCommandSuccess = ParseSuccess<WheelSubcommand>;
function parseWheelSetText(string: string, wheel: number, position: number, variant: WheelCommandVariant.setText | WheelCommandVariant.setDescription): ParseWheelCommandSuccess | ParseFailure {
    const subcommand: WheelSubcommand = {
        id: variant,
        wheel,
        position,
        text: string,  // TODO this proper
    };

    return succeed(subcommand, string);
}
function parseWheelSetIcon(string: string, wheel: number, position: number): ParseWheelCommandSuccess | ParseFailure {
    const iconResult = parseIcon(string);
    if (!iconResult.success) { return iconResult; }
    string = iconResult.remaining;
    const icon = iconResult.result;

    const subcommand: WheelSubcommand = {
        id: WheelCommandVariant.setIcon,
        wheel,
        position,
        icon,
    };

    return succeed(subcommand, string);
}
function parseWheelSetColor(string: string, wheel: number, position: number): ParseWheelCommandSuccess | ParseFailure {
    const redResult = parseInteger(string);
    if (redResult === null) { return fail(Token.integer, string, undefined); }
    string = redResult.remaining;
    const red = redResult.value;

    let separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, undefined); }
    string = separatorResult;

    const greenResult = parseInteger(string);
    if (greenResult === null) { return fail(Token.integer, string, undefined); }
    string = greenResult.remaining;
    const green = greenResult.value;

    separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, undefined); }
    string = separatorResult;

    const blueResult = parseInteger(string);
    if (blueResult === null) { return fail(Token.integer, string, undefined); }
    string = blueResult.remaining;
    const blue = blueResult.value;

    separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, undefined); }
    string = separatorResult;

    const alphaResult = parseInteger(string);
    if (alphaResult === null) { return fail(Token.integer, string, undefined); }
    string = alphaResult.remaining;
    const alpha = alphaResult.value;

    const subcommand: WheelSubcommand = {
        id: WheelCommandVariant.setColor,
        wheel,
        position,
        red,
        green,
        blue,
        alpha,
    };

    return succeed(subcommand, string);
}
function parseWheelSetAction(string: string, wheel: number, position: number): ParseWheelCommandSuccess | ParseFailure {
    const bindResult = parseInteger(string);
    if (bindResult === null) { return fail(Token.wheelItemBind, string, { id: CompletionVariant.wheelItemBind }); }
    string = bindResult.remaining;
    const bind = bindResult.value;

    if (!(bind === 0 || bind === 1 || bind === 2 || bind === 3)) { return fail(Token.wheelItemBind, string, undefined); }

    const itemResult = parseItem(string);
    if (!itemResult.success) { return itemResult; }
    string = itemResult.remaining;
    const item = itemResult.result;

    const subcommand: WheelSubcommand = {
        id: WheelCommandVariant.setAction,
        wheel,
        position,
        bind,
        item,
    };

    return succeed(subcommand, string);
}
function parseWheelCommand(string: string): ParseItemSuccess | ParseFailure {
    const commandIdResult = parseInteger(string);
    if (commandIdResult === null) { return fail(Token.wheelCommandIdentifier, string, { id: CompletionVariant.wheelCommand }); }
    string = commandIdResult.remaining;
    const commandId = commandIdResult.value;

    const id = ItemVariant.wheelCommand;

    // handle the command without further parts
    if (commandId === WheelCommandVariant.clear) {
        const item: Item = {
            id,
            subcommand: {
                id: commandId,
            },
        };

        return succeed(item, string);
    }

    let separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, { id: CompletionVariant.wheelCommand }); }
    string = separatorResult;

    // All remaining commands take the wheel as first parameter
    const wheelResult = parseInteger(string);
    if (wheelResult === null) { return fail(Token.integer, string, undefined); }
    string = wheelResult.remaining;
    const wheel = wheelResult.value;

    // handle the command without further parts
    if (commandId === WheelCommandVariant.switch) {
        const item: Item = {
            id: ItemVariant.wheelCommand,
            subcommand: {
                id: commandId,
                wheel,
            }
        };

        return succeed(item, string);
    }

    separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, undefined); }
    string = separatorResult;

    // handle the command that doesn't take the position as next parameter
    if (commandId === WheelCommandVariant.setSticky) {
        const booleanResult = parseBoolean(string);
        if (booleanResult === null) { return fail(Token.boolean, string, { id: CompletionVariant.boolean }); }
        string = booleanResult.remaining;
        const sticky = booleanResult.value;

        const item: Item = {
            id: ItemVariant.wheelCommand,
            subcommand: {
                id: commandId,
                wheel,
                sticky,
            }
        };

        return succeed(item, string);
    }

    // All remaining commands take the position as next parameter
    const positionResult = parseInteger(string);
    if (positionResult === null) { return fail(Token.wheelItemPosition, string, undefined); }
    const position = positionResult.value;

    if (!([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ].includes(position))) { return fail(Token.wheelItemPosition, string, undefined); }
    string = positionResult.remaining;

    // handle the command without further parts
    if (commandId === WheelCommandVariant.remove) {
        const item: Item = {
            id: ItemVariant.wheelCommand,
            subcommand: {
                id: commandId,
                wheel,
                position,
            }
        };

        return succeed(item, string);
    }

    separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, undefined); }
    string = separatorResult;

    let subcommandResult: ParseWheelCommandSuccess | ParseFailure;
    switch (commandId) {
        case WheelCommandVariant.setText:
            subcommandResult = parseWheelSetText(string, wheel, position, WheelCommandVariant.setText);
            break;
        case WheelCommandVariant.setDescription:
            subcommandResult = parseWheelSetText(string, wheel, position, WheelCommandVariant.setDescription);
            break;
        case WheelCommandVariant.setIcon:
            subcommandResult = parseWheelSetIcon(string, wheel, position);
            break;
        case WheelCommandVariant.setColor:
            subcommandResult = parseWheelSetColor(string, wheel, position);
            break;
        case WheelCommandVariant.setAction:
            subcommandResult = parseWheelSetAction(string, wheel, position);
            break;
        default: return fail(Token.wheelCommandIdentifier, string, { id: CompletionVariant.wheelCommand });
    }

    if (!subcommandResult.success) { return subcommandResult; }

    string = subcommandResult.remaining;
    const subcommand = subcommandResult.result;
    const item: Item = {
        id: ItemVariant.wheelCommand,
        subcommand,
    };

    return succeed(item, string);
}
type ParseShopCommandSuccess = ParseSuccess<ShopSubcommand>;
function parseShopSetIcon(string: string): ParseShopCommandSuccess | ParseFailure {
    const uberIdentifierResult = parseUberIdentifier(string);
    if (!uberIdentifierResult.success) { return uberIdentifierResult; }
    string = uberIdentifierResult.remaining;
    const uberIdentifier = uberIdentifierResult.result;

    const separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, { id: CompletionVariant.sysCommand }); }
    string = separatorResult;

    const iconResult = parseIcon(string);
    if (!iconResult.success) { return iconResult; }
    string = iconResult.remaining;
    const icon = iconResult.result;

    const subcommand: ShopSubcommand = {
        id: ShopCommandVariant.setIcon,
        uberIdentifier,
        icon,
    };

    return succeed(subcommand, string);
}
function parseShopCommand(string: string): ParseItemSuccess | ParseFailure {
    const commandIdResult = parseInteger(string);
    if (commandIdResult === null) { return fail(Token.shopCommandIdentifier, string, { id: CompletionVariant.shopCommand }); }
    string = commandIdResult.remaining;
    const commandId = commandIdResult.value;

    const separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, { id: CompletionVariant.sysCommand }); }
    string = separatorResult;

    let subcommandResult: ParseShopCommandSuccess | ParseFailure;
    switch (commandId) {
        case ShopCommandVariant.setIcon:
            subcommandResult = parseShopSetIcon(string);
            break;
        default: return fail(Token.shopCommandIdentifier, string, { id: CompletionVariant.shopCommand });
    }

    if (!subcommandResult.success) { return subcommandResult; }

    string = subcommandResult.remaining;
    const subcommand = subcommandResult.result;
    const item: Item = {
        id: ItemVariant.shopCommand,
        subcommand,
    };

    return succeed(item, string);
}

export function parseItem(string: string): ParseItemSuccess | ParseFailure {
    const itemIdResult = parseInteger(string);
    if (itemIdResult === null) { return fail(Token.itemIdentifier, string, { id: CompletionVariant.item }); }
    string = itemIdResult.remaining;
    const itemId = itemIdResult.value;

    // Each item has at least two parts, so parsing the separator here is just more efficient
    const separatorResult = eat(string, "|");
    if (separatorResult === null) { return fail("|", string, { id: CompletionVariant.item }); }
    string = separatorResult;

    switch (itemId) {
        case ItemVariant.spiritLight: return parseSpiritLight(string);
        case ItemVariant.resource: return parseResource(string);
        case ItemVariant.ability: return parseAbility(string);
        case ItemVariant.shard: return parseShard(string);
        case ItemVariant.sysCommand: return parseCommand(string);
        case ItemVariant.teleporter: return parseTeleporter(string);
        case ItemVariant.message: return parseMessage(string);
        case ItemVariant.setUberState: return parseSetUberState(string);
        case ItemVariant.water: return parseWater(string);
        case ItemVariant.bonusItem: return parseBonusItem(string);
        case ItemVariant.bonusUpgrade: return parseBonusUpgrade(string);
        case ItemVariant.relic: return parseRelic(string);
        case ItemVariant.progressMessage: return parseProgressMessage(string);
        case ItemVariant.wheelCommand: return parseWheelCommand(string);
        case ItemVariant.shopCommand: return parseShopCommand(string);
        default: return fail(Token.itemIdentifier, string, { id: CompletionVariant.item });
    }
}
