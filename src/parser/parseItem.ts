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
import { eat, fail, parseBoolean, ParseFailure, parseFloat, parseInteger, parseRemainingLine, ParseStatus, ParseSuccess, parseUberIdentifier, parseWord, succeed, Token } from "../parser";
import parseIcon from "./parseIcon";

type ParseItemSuccess = ParseSuccess<Item>;

function parseVariantItem(
    status: ParseStatus,
    variantEnum: Object,
    itemVariant: ItemVariant.resource | ItemVariant.bonusItem | ItemVariant.bonusUpgrade | ItemVariant.relic,
    completion: Completion,
    expected: Token
): ParseItemSuccess | ParseFailure {
    const variant = parseInteger(status, true);
    if (variant === null || !(variant in variantEnum)) { return fail(expected, status, completion); }

    const item: Item = {
        id: itemVariant,
        variant,
    };

    return succeed(item);
}
function parseRemovableVariantItem(
    status: ParseStatus,
    variantEnum: Object,
    itemVariant: ItemVariant.ability | ItemVariant.shard | ItemVariant.teleporter,
    completion: Completion,
    expected: Token
): ParseItemSuccess | ParseFailure {
    let variant = parseInteger(status, true);
    if (variant === null) { return fail(expected, status, completion); }

    let remove = false;
    if (variant < 0) {
        variant = -variant;
        remove = true;
    }

    if (!(variant in variantEnum)) { return fail(expected, status, completion); }

    const item: Item = {
        id: itemVariant,
        variant,
        remove,
    };

    return succeed(item);
}

function parseSpiritLight(status: ParseStatus): ParseItemSuccess | ParseFailure {
    const amount = parseInteger(status, true);
    if (amount === null) { return fail(Token.integer, status, undefined); }

    const item: Item = {
        id: ItemVariant.spiritLight,
        amount,
    };

    return succeed(item);
}
function parseResource(status: ParseStatus): ParseItemSuccess | ParseFailure {
    return parseVariantItem(status, ResourceVariant, ItemVariant.resource, { id: CompletionVariant.resource }, Token.resourceIdentifier);
}
function parseAbility(status: ParseStatus): ParseItemSuccess | ParseFailure {
    return parseRemovableVariantItem(status, AbilityVariant, ItemVariant.ability, { id: CompletionVariant.ability }, Token.abilityIdentifier);
}
function parseShard(status: ParseStatus): ParseItemSuccess | ParseFailure {
    return parseRemovableVariantItem(status, ShardVariant, ItemVariant.shard, { id: CompletionVariant.shard }, Token.shardIdentifier);
}
type ParseCommandSuccess = ParseSuccess<SysSubcommand>;
function parseSetResource(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    const resource = parseInteger(status);
    if (resource === null || !(resource in ResourceVariant)) { return fail(Token.resourceIdentifier, status, { id: CompletionVariant.resource }); }

    if (!eat(status, "|")) { return fail("|", status, { id: CompletionVariant.resource }); }

    const amount = parseInteger(status);
    if (amount === null) { return fail(Token.integer, status, undefined); }

    const command: SysSubcommand = {
        id: SysCommandVariant.setResource,
        resource,
        amount
    };

    return succeed(command);
}
function parseKwolokStatue(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    if (!eat(status, "0")) { return fail(Token.integer, status, undefined); }
    if (!eat(status, "|")) { return fail("|", status, undefined); }

    const value = parseInteger(status);
    if (value === null || ![0, 1].includes(value)) { return fail(Token.integer, status, undefined); }

    const command: SysSubcommand = {
        id: SysCommandVariant.kwolokStatue,
        value,
    };

    return succeed(command);
}
function parseWarp(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    const x = parseFloat(status);
    if (x === null) { return fail(Token.float, status, undefined); }

    if (!eat(status, "|")) { return fail("|", status, undefined); }

    const y = parseFloat(status);
    if (y === null) { return fail(Token.float, status, undefined); }

    const command: SysSubcommand = {
        id: SysCommandVariant.warp,
        x,
        y,
    };

    return succeed(command);
}
function parseApplier(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    const weird = parseInteger(status);
    if (weird === null) { return fail(Token.integer, status, undefined); }

    if (!eat(status, "|")) { return fail("|", status, undefined); }

    const stuff = parseInteger(status);
    if (stuff === null) { return fail(Token.integer, status, undefined); }

    const command: SysSubcommand = {
        id: SysCommandVariant.applier,
        weird,
        stuff,
    };

    return succeed(command);
}
function parseSetCurrentResource(status: ParseStatus, variant: SysCommandVariant.setHealth | SysCommandVariant.setEnergy | SysCommandVariant.setSpiritLight): ParseCommandSuccess | ParseFailure {
    const amount = parseInteger(status);
    if (amount === null) { return fail(Token.integer, status, undefined); }

    const command: SysSubcommand = {
        id: variant,
        amount,
    };

    return succeed(command);
}
function parseSetHealth(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    return parseSetCurrentResource(status, SysCommandVariant.setHealth);
}
function parseSetEnergy(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    return parseSetCurrentResource(status, SysCommandVariant.setEnergy);
}
function parseSetSpiritLight(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    return parseSetCurrentResource(status, SysCommandVariant.setSpiritLight);
}
function parseEquip(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    const slot = parseInteger(status);
    if (slot === null || !(slot === 0 || slot === 1 || slot === 2)) { return fail(Token.slot, status, { id: CompletionVariant.slot }); }

    if (!eat(status, "|")) { return fail("|", status, undefined); }

    const equipment = parseInteger(status);
    if (equipment === null || !(equipment in EquipmentVariants)) { return fail(Token.equipment, status, { id: CompletionVariant.equipment }); }

    const command: SysSubcommand = {
        id: SysCommandVariant.equip,
        slot,
        equipment,
    };

    return succeed(command);
}
function parseTriggerBind(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    const bind = parseWord(status);
    if (bind === null) { return fail(Token.word, status, { id: CompletionVariant.keybind }); }

    const command: SysSubcommand = {
        id: SysCommandVariant.triggerBind,
        bind,
    };

    return succeed(command);
}
function parseIf(status: ParseStatus, variant: SysCommandVariant.ifEqual | SysCommandVariant.ifGreater | SysCommandVariant.ifLess): ParseCommandSuccess | ParseFailure {
    const uberIdentifierResult = parseUberIdentifier(status);
    if (!uberIdentifierResult.success) { return uberIdentifierResult; }
    const uberIdentifier = uberIdentifierResult.result;

    if (!eat(status, "|")) { return fail("|", status, { id: CompletionVariant.uberId, group: uberIdentifier.group }); }

    const value = parseFloat(status);
    if (value === null) { return fail(Token.float, status, undefined); }

    if (!eat(status, "|")) { return fail("|", status, undefined); }

    const itemResult = parseItem(status);
    if (!itemResult.success) { return itemResult; }
    const item = itemResult.result;

    const command: SysSubcommand = {
        id: variant,
        uberIdentifier,
        value,
        item,
    };

    return succeed(command);
}
function parseIfEqual(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    return parseIf(status, SysCommandVariant.ifEqual);
}
function parseIfGreater(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    return parseIf(status, SysCommandVariant.ifGreater);
}
function parseIfLess(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    return parseIf(status, SysCommandVariant.ifLess);
}
function parseToggleSync(status: ParseStatus, variant: SysCommandVariant.disableSync | SysCommandVariant.enableSync): ParseCommandSuccess | ParseFailure {
    const uberIdentifierResult = parseUberIdentifier(status);
    if (!uberIdentifierResult.success) { return uberIdentifierResult; }
    const uberIdentifier = uberIdentifierResult.result;

    const command: SysSubcommand = {
        id: variant,
        uberIdentifier,
    };

    return succeed(command);
}
function parseDisableSync(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    return parseToggleSync(status, SysCommandVariant.disableSync);
}
function parseEnableSync(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    return parseToggleSync(status, SysCommandVariant.enableSync);
}
function parseCreateWarpIcon(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    const warpId = parseInteger(status);
    if (warpId === null) { return fail(Token.integer, status, undefined); }

    if (!eat(status, "|")) { return fail("|", status, undefined); }

    const x = parseFloat(status);
    if (x === null) { return fail(Token.float, status, undefined); }

    if (!eat(status, "|")) { return fail("|", status, undefined); }

    const y = parseFloat(status);
    if (y === null) { return fail(Token.float, status, undefined); }

    const command: SysSubcommand = {
        id: SysCommandVariant.createWarpIcon,
        warpId,
        x,
        y,
    };

    return succeed(command);
}
function parseDestroyWarpIcon(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    const warpId = parseInteger(status);
    if (warpId === null) { return fail(Token.integer, status, undefined); }

    const command: SysSubcommand = {
        id: SysCommandVariant.destroyWarpIcon,
        warpId,
    };

    return succeed(command);
}
function parseIfBounds(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    const x1 = parseFloat(status);
    if (x1 === null) { return fail(Token.float, status, undefined); }

    if (!eat(status, "|")) { return fail("|", status, undefined); }

    const y1 = parseFloat(status);
    if (y1 === null) { return fail(Token.float, status, undefined); }

    if (!eat(status, "|")) { return fail("|", status, undefined); }

    const x2 = parseFloat(status);
    if (x2 === null) { return fail(Token.float, status, undefined); }

    if (!eat(status, "|")) { return fail("|", status, undefined); }

    const y2 = parseFloat(status);
    if (y2 === null) { return fail(Token.float, status, undefined); }

    if (!eat(status, "|")) { return fail("|", status, undefined); }

    const itemResult = parseItem(status);
    if (!itemResult.success) { return itemResult; }
    const item = itemResult.result;

    const command: SysSubcommand = {
        id: SysCommandVariant.ifBounds,
        x1,
        y1,
        x2,
        y2,
        item,
    };

    return succeed(command);
}
function parseIfSelf(status: ParseStatus, variant: SysCommandVariant.ifSelfEqual | SysCommandVariant.ifSelfGreater | SysCommandVariant.ifSelfLess): ParseCommandSuccess | ParseFailure {
    const value = parseFloat(status);
    if (value === null) { return fail(Token.float, status, undefined); }

    if (!eat(status, "|")) { return fail("|", status, undefined); }

    const itemResult = parseItem(status);
    if (!itemResult.success) { return itemResult; }
    const item = itemResult.result;

    const command: SysSubcommand = {
        id: variant,
        value,
        item,
    };

    return succeed(command);
}
function parseIfSelfEqual(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    return parseIfSelf(status, SysCommandVariant.ifSelfEqual);
}
function parseIfSelfGreater(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    return parseIfSelf(status, SysCommandVariant.ifSelfGreater);
}
function parseIfSelfLess(status: ParseStatus): ParseCommandSuccess | ParseFailure {
    return parseIfSelf(status, SysCommandVariant.ifSelfLess);
}
function parseSubcommand(status: ParseStatus, commandId: number): ParseCommandSuccess | ParseFailure {
    switch (commandId) {
        case SysCommandVariant.setResource: return parseSetResource(status);
        case SysCommandVariant.kwolokStatue: return parseKwolokStatue(status);
        case SysCommandVariant.warp: return parseWarp(status);
        case SysCommandVariant.applier: return parseApplier(status);
        case SysCommandVariant.setHealth: return parseSetHealth(status);
        case SysCommandVariant.setEnergy: return parseSetEnergy(status);
        case SysCommandVariant.setSpiritLight: return parseSetSpiritLight(status);
        case SysCommandVariant.equip: return parseEquip(status);
        case SysCommandVariant.triggerBind: return parseTriggerBind(status);
        case SysCommandVariant.ifEqual: return parseIfEqual(status);
        case SysCommandVariant.ifGreater: return parseIfGreater(status);
        case SysCommandVariant.ifLess: return parseIfLess(status);
        case SysCommandVariant.disableSync: return parseDisableSync(status);
        case SysCommandVariant.enableSync: return parseEnableSync(status);
        case SysCommandVariant.createWarpIcon: return parseCreateWarpIcon(status);
        case SysCommandVariant.destroyWarpIcon: return parseDestroyWarpIcon(status);
        case SysCommandVariant.ifBounds: return parseIfBounds(status);
        case SysCommandVariant.ifSelfEqual: return parseIfSelfEqual(status);
        case SysCommandVariant.ifSelfGreater: return parseIfSelfGreater(status);
        case SysCommandVariant.ifSelfLess: return parseIfSelfLess(status);
        default:
            const errorStatus = status.clone();
            errorStatus.offset -= 2;
            return fail(Token.sysCommandIdentifier, errorStatus, { id: CompletionVariant.sysCommand });
    }
}
function parseCommand(status: ParseStatus): ParseItemSuccess | ParseFailure {
    const commandId = parseInteger(status);
    if (commandId === null) { return fail(Token.sysCommandIdentifier, status, { id: CompletionVariant.sysCommand }); }

    // handle the commands without further parts
    if (commandId === SysCommandVariant.autosave || commandId === SysCommandVariant.checkpoint) {
        const item: Item = {
            id: ItemVariant.sysCommand,
            subcommand: {
                id: commandId,
            },
        };

        return succeed(item);
    }

    if (!eat(status, "|")) { return fail("|", status, { id: CompletionVariant.sysCommand }); }

    const subcommandResult = parseSubcommand(status, commandId);
    if (!subcommandResult.success) { return subcommandResult; }
    const subcommand = subcommandResult.result;

    const item: Item = {
        id: ItemVariant.sysCommand,
        subcommand,
    };

    return succeed(item);
}
function parseTeleporter(status: ParseStatus): ParseItemSuccess | ParseFailure {
    return parseRemovableVariantItem(status, TeleporterVariant, ItemVariant.teleporter, { id: CompletionVariant.teleporter }, Token.teleporterIdentifier);
}
function parseMessage(status: ParseStatus): ParseItemSuccess | ParseFailure {
    const message = parseRemainingLine(status);
    if (message === null) { return fail(Token.message, status, undefined); }

    const item: Item = {
        id: ItemVariant.message,
        message,  // TODO this proper
    };

    return succeed(item);
}
type ParsePointerSuccess = ParseSuccess<SetPointer>;
function parsePointer(status: ParseStatus): ParsePointerSuccess | ParseFailure | null {
    if (!eat(status, "$(")) { return null; }

    const uberIdentifierResult = parseUberIdentifier(status);
    if (!uberIdentifierResult.success) { return uberIdentifierResult; }
    const pointerIdentifier = uberIdentifierResult.result;

    if (!eat(status, ")")) { return fail(")", status, { id: CompletionVariant.uberId, group: pointerIdentifier.group }); }

    // TODO why manual?
    return {
        success: true,
        result: { pointerIdentifier },
    };
}
type ParseSetValueOrPointerSuccess<Value> = ParseSuccess<Value | SetPointer>;
function parseSetValueOrPointer<Value>(status: ParseStatus, parseValue: (status: ParseStatus) => Value | null, expected: Token, completion: Completion | undefined): ParseSetValueOrPointerSuccess<Value> | ParseFailure {
    const pointerResult = parsePointer(status);
    if (pointerResult !== null) {
        if (!pointerResult.success) { return pointerResult; }
        const value = pointerResult.result;
        return succeed(value);
    }

    const value = parseValue(status);
    if (value === null) { return fail(expected, status, completion); }

    return succeed(value);
}
type ParseSetRangeSuccess<Value> = ParseSuccess<SetRange<Value>>;
function parseSetRange<Value>(status: ParseStatus, parseValue: (status: ParseStatus) => Value | null, expected: Token, completion: Completion | undefined): ParseSetRangeSuccess<Value> | ParseFailure {
    const lowerResult = parseSetValueOrPointer(status, parseValue, expected, completion);
    if (!lowerResult.success) { return lowerResult; }
    const lower = lowerResult.result;

    if (!eat(status, ",")) {
        let lowerCompletion: Completion | undefined;
        if ("pointerIdentifier" in lower) {
            lowerCompletion = { id: CompletionVariant.uberId, group: lower.pointerIdentifier.group };
        } else {
            lowerCompletion = completion;
        }
        return fail(",", status, lowerCompletion);
    }

    const upperResult = parseSetValueOrPointer(status, parseValue, expected, completion);
    if (!upperResult.success) { return upperResult; }
    const upper = upperResult.result;

    if (!eat(status, "]")) {
        let upperCompletion: Completion | undefined;
        if ("pointerIdentifier" in upper) {
            upperCompletion = { id: CompletionVariant.uberId, group: upper.pointerIdentifier.group };
        } else {
            upperCompletion = completion;
        }
        return fail("]", status, upperCompletion);
    }

    return {
        success: true,
        result: {
            lower,
            upper,
        }
    };
}
type ParseSetValueSuccess<Value> = ParseSuccess<Value | SetPointer | SetRange<Value>>;
function parseSetValue<Value>(status: ParseStatus, parseValue: (status: ParseStatus) => Value | null, expected: Token, completion: Completion | undefined): ParseSetValueSuccess<Value> | ParseFailure {
    if (eat(status, "[")) {
        return parseSetRange(status, parseValue, expected, completion );
    }
    return parseSetValueOrPointer(status, parseValue, expected, completion);
}
function parseSetUberState(status: ParseStatus): ParseItemSuccess | ParseFailure {
    const uberIdentifierResult = parseUberIdentifier(status);
    if (!uberIdentifierResult.success) { return uberIdentifierResult; }
    const uberIdentifier = uberIdentifierResult.result;

    if (!eat(status, "|")) { return fail("|", status, { id: CompletionVariant.uberId, group: uberIdentifier.group }); }

    type UberType = "bool" | "teleporter" | "byte" | "int" | "float";
    let uberType: UberType | undefined;
    const remaining = status.remaining;
    for (const type of [ "bool", "teleporter", "byte", "int", "float" ]) {
        if (remaining.startsWith(type)) {
            status.progress(type.length);
            uberType = type as UberType;
            break;
        }
    }
    if (uberType === undefined) { return fail(Token.uberStateType, status, { id: CompletionVariant.uberStateType }); }

    if (!eat(status, "|")) { return fail(Token.uberStateType, status, { id: CompletionVariant.uberStateType }); }

    let sign: boolean | undefined;
    if (eat(status, "+")) {
        sign = true;
    } else if (eat(status, "-")) {
        sign = false;
    }

    let valueResult;
    switch (uberType) {
        case "bool":
        case "teleporter":
            valueResult = parseSetValue<boolean>(status, parseBoolean, Token.boolean, { id: CompletionVariant.boolean });
            break;
        case "byte":
        case "int":
            valueResult = parseSetValue<number>(status, parseInteger, Token.integer, undefined);
            break;
        case "float":
            valueResult = parseSetValue<number>(status, parseFloat, Token.float, undefined);
            break;
    }

    if (!valueResult.success) { return valueResult; }
    const value = valueResult.result;

    let skip = 0;
    if (eat(status, "|")) {
        eat(status, "skip=");

        const skipResult = parseInteger(status);
        if (skipResult === null) { return fail(Token.integer, status, undefined); }
        skip = skipResult;
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

    return succeed(item);
}
function parseWater(status: ParseStatus): ParseItemSuccess | ParseFailure {
    const water = parseInteger(status);
    if (water === null) { return fail(Token.water, status, { id: CompletionVariant.water }); }

    if (water !== 0) { return fail(Token.water, status, undefined); }

    const item: Item = {
        id: ItemVariant.water,
    };

    return succeed(item);
}
function parseBonusItem(status: ParseStatus): ParseItemSuccess | ParseFailure {
    return parseVariantItem(status, BonusItemVariant, ItemVariant.bonusItem, { id: CompletionVariant.bonusItem }, Token.bonusItem);
}
function parseBonusUpgrade(status: ParseStatus): ParseItemSuccess | ParseFailure {
    return parseVariantItem(status, BonusUpgradeVariant, ItemVariant.bonusUpgrade, { id: CompletionVariant.bonusUpgrade }, Token.bonusUpgrade);
}
function parseRelic(status: ParseStatus): ParseItemSuccess | ParseFailure {
    return parseVariantItem(status, ZoneVariants, ItemVariant.relic, { id: CompletionVariant.zone }, Token.zone);
}
function parseProgressMessage(status: ParseStatus): ParseItemSuccess | ParseFailure {
    const progressId = parseInteger(status);
    if (progressId === null) { return fail(Token.progressIdentifier, status, { id: CompletionVariant.progressMessage }); }

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

            return succeed(item);
        } case ProgressVariant.zoneRelic: {
            if (!eat(status, "|")) { return fail("|", status, { id: CompletionVariant.sysCommand }); }

            const zone = parseInteger(status, true);
            if (zone === null || !(zone in ZoneVariants)) { return fail(Token.zone, status, { id: CompletionVariant.zone }); }

            const item: Item = {
                id,
                progressVariant: {
                    id: progressId,
                    zone,
                },
            };

            return succeed(item);
        } default: return fail(Token.progressIdentifier, status, { id: CompletionVariant.progressMessage });
    }
}
type ParseWheelCommandSuccess = ParseSuccess<WheelSubcommand>;
function parseWheelSetText(status: ParseStatus, wheel: number, position: number, variant: WheelCommandVariant.setText | WheelCommandVariant.setDescription): ParseWheelCommandSuccess | ParseFailure {
    const text = parseRemainingLine(status);
    if (text === null) { return fail(Token.message, status, undefined); }

    const subcommand: WheelSubcommand = {
        id: variant,
        wheel,
        position,
        text,  // TODO this proper
    };

    return succeed(subcommand);
}
function parseWheelSetIcon(status: ParseStatus, wheel: number, position: number): ParseWheelCommandSuccess | ParseFailure {
    const iconResult = parseIcon(status);
    if (!iconResult.success) { return iconResult; }
    const icon = iconResult.result;

    const subcommand: WheelSubcommand = {
        id: WheelCommandVariant.setIcon,
        wheel,
        position,
        icon,
    };

    return succeed(subcommand);
}
function parseWheelSetColor(status: ParseStatus, wheel: number, position: number): ParseWheelCommandSuccess | ParseFailure {
    const red = parseInteger(status);
    if (red === null) { return fail(Token.integer, status, undefined); }

    if (!eat(status, "|")) { return fail("|", status, undefined); }

    const green = parseInteger(status);
    if (green === null) { return fail(Token.integer, status, undefined); }

    if (!eat(status, "|")) { return fail("|", status, undefined); }

    const blue = parseInteger(status);
    if (blue === null) { return fail(Token.integer, status, undefined); }

    if (!eat(status, "|")) { return fail("|", status, undefined); }

    const alpha = parseInteger(status);
    if (alpha === null) { return fail(Token.integer, status, undefined); }

    const subcommand: WheelSubcommand = {
        id: WheelCommandVariant.setColor,
        wheel,
        position,
        red,
        green,
        blue,
        alpha,
    };

    return succeed(subcommand);
}
function parseWheelSetAction(status: ParseStatus, wheel: number, position: number): ParseWheelCommandSuccess | ParseFailure {
    const bind = parseInteger(status);
    if (bind === null || !(bind === 0 || bind === 1 || bind === 2 || bind === 3)) { return fail(Token.wheelItemBind, status, { id: CompletionVariant.wheelItemBind }); }

    if (!eat(status, "|")) { return fail("|", status, undefined); }

    const itemResult = parseItem(status);
    if (!itemResult.success) { return itemResult; }
    const item = itemResult.result;

    const subcommand: WheelSubcommand = {
        id: WheelCommandVariant.setAction,
        wheel,
        position,
        bind,
        item,
    };

    return succeed(subcommand);
}
function parseWheelCommand(status: ParseStatus): ParseItemSuccess | ParseFailure {
    const commandId = parseInteger(status);
    if (commandId === null) { return fail(Token.wheelCommandIdentifier, status, { id: CompletionVariant.wheelCommand }); }

    const id = ItemVariant.wheelCommand;

    // handle the command without further parts
    if (commandId === WheelCommandVariant.clear) {
        const item: Item = {
            id,
            subcommand: {
                id: commandId,
            },
        };

        return succeed(item);
    }

    if (!eat(status, "|")) { return fail("|", status, { id: CompletionVariant.wheelCommand }); }

    // All remaining commands take the wheel as first parameter
    const wheel = parseInteger(status);
    if (wheel === null) { return fail(Token.integer, status, undefined); }

    // handle the command without further parts
    if (commandId === WheelCommandVariant.switch) {
        const item: Item = {
            id: ItemVariant.wheelCommand,
            subcommand: {
                id: commandId,
                wheel,
            }
        };

        return succeed(item);
    }

    if (!eat(status, "|")) { return fail("|", status, undefined); }

    // handle the command that doesn't take the position as next parameter
    if (commandId === WheelCommandVariant.setSticky) {
        const sticky = parseBoolean(status);
        if (sticky === null) { return fail(Token.boolean, status, { id: CompletionVariant.boolean }); }

        const item: Item = {
            id: ItemVariant.wheelCommand,
            subcommand: {
                id: commandId,
                wheel,
                sticky,
            }
        };

        return succeed(item);
    }

    // All remaining commands take the position as next parameter
    const position = parseInteger(status);
    if (position === null || !([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ].includes(position))) { return fail(Token.wheelItemPosition, status, undefined); }

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

        return succeed(item);
    }

    if (!eat(status, "|")) { return fail("|", status, undefined); }

    let subcommandResult: ParseWheelCommandSuccess | ParseFailure;
    switch (commandId) {
        case WheelCommandVariant.setText:
            subcommandResult = parseWheelSetText(status, wheel, position, WheelCommandVariant.setText);
            break;
        case WheelCommandVariant.setDescription:
            subcommandResult = parseWheelSetText(status, wheel, position, WheelCommandVariant.setDescription);
            break;
        case WheelCommandVariant.setIcon:
            subcommandResult = parseWheelSetIcon(status, wheel, position);
            break;
        case WheelCommandVariant.setColor:
            subcommandResult = parseWheelSetColor(status, wheel, position);
            break;
        case WheelCommandVariant.setAction:
            subcommandResult = parseWheelSetAction(status, wheel, position);
            break;
        default:
            const errorStatus = status.clone();
            errorStatus.offset -= 2;
            return fail(Token.wheelCommandIdentifier, errorStatus, { id: CompletionVariant.wheelCommand });
    }

    if (!subcommandResult.success) { return subcommandResult; }
    const subcommand = subcommandResult.result;

    const item: Item = {
        id: ItemVariant.wheelCommand,
        subcommand,
    };

    return succeed(item);
}
type ParseShopCommandSuccess = ParseSuccess<ShopSubcommand>;
function parseShopSetIcon(status: ParseStatus): ParseShopCommandSuccess | ParseFailure {
    const uberIdentifierResult = parseUberIdentifier(status);
    if (!uberIdentifierResult.success) { return uberIdentifierResult; }
    const uberIdentifier = uberIdentifierResult.result;

    if (!eat(status, "|")) { return fail("|", status, { id: CompletionVariant.sysCommand }); }

    const iconResult = parseIcon(status);
    if (!iconResult.success) { return iconResult; }
    const icon = iconResult.result;

    const subcommand: ShopSubcommand = {
        id: ShopCommandVariant.setIcon,
        uberIdentifier,
        icon,
    };

    return succeed(subcommand);
}
function parseShopCommand(status: ParseStatus): ParseItemSuccess | ParseFailure {
    const commandId = parseInteger(status);
    if (commandId === null) { return fail(Token.shopCommandIdentifier, status, { id: CompletionVariant.shopCommand }); }

    if (!eat(status, "|")) { return fail("|", status, { id: CompletionVariant.sysCommand }); }

    let subcommandResult: ParseShopCommandSuccess | ParseFailure;
    switch (commandId) {
        case ShopCommandVariant.setIcon:
            subcommandResult = parseShopSetIcon(status);
            break;
        default:
            const errorStatus = status.clone();
            errorStatus.offset -= 2;
            return fail(Token.shopCommandIdentifier, errorStatus, { id: CompletionVariant.shopCommand });
    }

    if (!subcommandResult.success) { return subcommandResult; }
    const subcommand = subcommandResult.result;

    const item: Item = {
        id: ItemVariant.shopCommand,
        subcommand,
    };

    return succeed(item);
}

export function parseItem(status: ParseStatus): ParseItemSuccess | ParseFailure {
    const itemId = parseInteger(status);
    if (itemId === null) { return fail(Token.itemIdentifier, status, { id: CompletionVariant.item }); }

    // Each item has at least two parts, so parsing the separator here is just more efficient
    if (!eat(status, "|")) { return fail("|", status, { id: CompletionVariant.item }); }

    switch (itemId) {
        case ItemVariant.spiritLight: return parseSpiritLight(status);
        case ItemVariant.resource: return parseResource(status);
        case ItemVariant.ability: return parseAbility(status);
        case ItemVariant.shard: return parseShard(status);
        case ItemVariant.sysCommand: return parseCommand(status);
        case ItemVariant.teleporter: return parseTeleporter(status);
        case ItemVariant.message: return parseMessage(status);
        case ItemVariant.setUberState: return parseSetUberState(status);
        case ItemVariant.water: return parseWater(status);
        case ItemVariant.bonusItem: return parseBonusItem(status);
        case ItemVariant.bonusUpgrade: return parseBonusUpgrade(status);
        case ItemVariant.relic: return parseRelic(status);
        case ItemVariant.progressMessage: return parseProgressMessage(status);
        case ItemVariant.wheelCommand: return parseWheelCommand(status);
        case ItemVariant.shopCommand: return parseShopCommand(status);
        default:
            const errorStatus = status.clone();
            errorStatus.offset -= 2;
            return fail(Token.itemIdentifier, errorStatus, { id: CompletionVariant.item });
    }
}
