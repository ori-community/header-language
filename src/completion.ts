import { CompletionItem } from "vscode";
import booleanCompletions from "./completion/booleanCompletion";
import iconTypeCompletions from "./completion/iconTypeCompletion";
import keybindCompletions from "./completion/keybindCompletions";
import messageFlagCompletions from "./completion/messageFlagCompletion";
import slotCompletions from "./completion/slotCompletion";
import { uberIdCompletions, uberStateCompletions } from "./completion/uberStateCompletion";
import uberTypeCompletions from "./completion/uberTypeCompletion";
import waterCompletions from "./completion/waterCompletion";
import wheelBindCompletions from "./completion/wheelBindCompletion";
import EquipmentVariants from "./equipment";
import GromIconVariant from "./icon/gromIcon";
import LupoIconVariant from "./icon/lupoIcon";
import OpherIconVariant from "./icon/opherIcon";
import ShardIconVariant from "./icon/shardIcon";
import SpellIconVariant from "./icon/spellIcon";
import TuleyIconVariant from "./icon/tuleyIcon";
import { AbilityVariant } from "./item/ability";
import { BonusItemVariant } from "./item/bonusItem";
import { BonusUpgradeVariant } from "./item/bonusUpgrade";
import { SysCommandVariant } from "./item/sysCommand";
import { Message } from "./item/message";
import { ProgressVariant } from "./item/progressMessage";
import { ResourceVariant } from "./item/resource";
import { ShardVariant } from "./item/shard";
import { ShopCommandVariant } from "./item/shopCommand";
import { TeleporterVariant } from "./item/teleporter";
import { WheelCommandVariant } from "./item/wheelCommand";
import { getItemCompletions, getNameCompletions } from "./util";
import ZoneVariants from "./zone";
import commandCompletions from "./completion/commandCompletion";
import parameterTypeCompletions from "./completion/parameterTypeCompletion";
import { ItemVariant } from "./item";
import { AnnotationVariant } from "./annotation";
import { FlagVariant } from "./flag";

export enum CompletionVariant {
    uberState,
    uberId,
    boolean,
    item,
    resource,
    ability,
    shard,
    sysCommand,
    slot,
    equipment,
    keybind,
    teleporter,
    messageFlag,
    uberStateType,
    water,
    bonusItem,
    bonusUpgrade,
    zone,
    progressMessage,
    wheelCommand,
    iconType,
    shardIconValue,
    spellIconValue,
    opherIconValue,
    lupoIconValue,
    gromIconValue,
    tuleyIconValue,
    wheelItemBind,
    shopCommand,
    command,
    parameterType,
    annotation,
    flag,
}

interface UberState {
    id: CompletionVariant.uberState,
}
interface UberId {
    id: CompletionVariant.uberId,
    group: number,
}
interface Boolean {
    id: CompletionVariant.boolean,
}
interface Item {
    id: CompletionVariant.item,
}
interface Resource {
    id: CompletionVariant.resource,
}
interface Ability {
    id: CompletionVariant.ability,
}
interface Shard {
    id: CompletionVariant.shard,
}
interface SysCommand {
    id: CompletionVariant.sysCommand,
}
interface Slot {
    id: CompletionVariant.slot,
}
interface Equipment {
    id: CompletionVariant.equipment,
}
interface Keybind {
    id: CompletionVariant.keybind,
}
interface Teleporter {
    id: CompletionVariant.teleporter,
}
interface MessageFlag {
    id: CompletionVariant.messageFlag,
    message: Message,
}
interface UberStateType {
    id: CompletionVariant.uberStateType,
}
interface Water {
    id: CompletionVariant.water,
}
interface BonusItem {
    id: CompletionVariant.bonusItem,
}
interface BonusUpgrade {
    id: CompletionVariant.bonusUpgrade,
}
interface Zone {
    id: CompletionVariant.zone,
}
interface ProgressMessage {
    id: CompletionVariant.progressMessage,
}
interface WheelCommand {
    id: CompletionVariant.wheelCommand,
}
interface IconType {
    id: CompletionVariant.iconType,
}
interface ShardIconValue {
    id: CompletionVariant.shardIconValue,
}
interface SpellIconValue {
    id: CompletionVariant.spellIconValue,
}
interface OpherIconValue {
    id: CompletionVariant.opherIconValue,
}
interface LupoIconValue {
    id: CompletionVariant.lupoIconValue,
}
interface GromIconValue {
    id: CompletionVariant.gromIconValue,
}
interface TuleyIconValue {
    id: CompletionVariant.tuleyIconValue,
}
interface WheelItemBind {
    id: CompletionVariant.wheelItemBind,
}
interface ShopCommand {
    id: CompletionVariant.shopCommand,
}
interface Command {
    id: CompletionVariant.command,
}
interface ParameterType {
    id: CompletionVariant.parameterType,
}
interface Annotation {
    id: CompletionVariant.annotation,
}
interface Flag {
    id: CompletionVariant.flag,
}
export type Completion = UberState | UberId | Boolean | Item | Resource | Ability | Shard | SysCommand | Slot | Equipment | Keybind | Teleporter | MessageFlag | UberStateType | Water | BonusItem | BonusUpgrade | Zone | ProgressMessage | WheelCommand | IconType | ShardIconValue | SpellIconValue | OpherIconValue | LupoIconValue | GromIconValue | TuleyIconValue | WheelItemBind | ShopCommand | Command | ParameterType | Annotation | Flag;

export function offerCompletions(completion: Completion): CompletionItem[] {
    switch (completion.id) {
        case CompletionVariant.uberState: return uberStateCompletions;
        case CompletionVariant.uberId: return uberIdCompletions(completion.group);
        case CompletionVariant.boolean: return booleanCompletions;
        case CompletionVariant.item: return getItemCompletions(ItemVariant);
        case CompletionVariant.resource: return getItemCompletions(ResourceVariant);
        case CompletionVariant.ability: return getItemCompletions(AbilityVariant);
        case CompletionVariant.shard: return getItemCompletions(ShardVariant);
        case CompletionVariant.sysCommand: return getItemCompletions(SysCommandVariant);
        case CompletionVariant.slot: return slotCompletions;
        case CompletionVariant.equipment: return getItemCompletions(EquipmentVariants);
        case CompletionVariant.keybind: return keybindCompletions;
        case CompletionVariant.teleporter: return getItemCompletions(TeleporterVariant);
        case CompletionVariant.messageFlag: return messageFlagCompletions;
        case CompletionVariant.uberStateType: return uberTypeCompletions;
        case CompletionVariant.water: return waterCompletions;
        case CompletionVariant.bonusItem: return getItemCompletions(BonusItemVariant);
        case CompletionVariant.bonusUpgrade: return getItemCompletions(BonusUpgradeVariant);
        case CompletionVariant.zone: return getItemCompletions(ZoneVariants);
        case CompletionVariant.progressMessage: return getItemCompletions(ProgressVariant);
        case CompletionVariant.wheelCommand: return getItemCompletions(WheelCommandVariant);
        case CompletionVariant.iconType: return iconTypeCompletions;
        case CompletionVariant.shardIconValue: return getItemCompletions(ShardIconVariant);
        case CompletionVariant.spellIconValue: return getItemCompletions(SpellIconVariant);
        case CompletionVariant.opherIconValue: return getItemCompletions(OpherIconVariant);
        case CompletionVariant.lupoIconValue: return getItemCompletions(LupoIconVariant);
        case CompletionVariant.gromIconValue: return getItemCompletions(GromIconVariant);
        case CompletionVariant.tuleyIconValue: return getItemCompletions(TuleyIconVariant);
        case CompletionVariant.wheelItemBind: return wheelBindCompletions;
        case CompletionVariant.shopCommand: return getItemCompletions(ShopCommandVariant);
        case CompletionVariant.command: return commandCompletions;
        case CompletionVariant.parameterType: return parameterTypeCompletions;
        case CompletionVariant.annotation: return getNameCompletions(AnnotationVariant);
        case CompletionVariant.flag: return getNameCompletions(FlagVariant);
        default:
            const safeguard: never = completion;
            return safeguard;
    }
}
