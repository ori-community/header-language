import { ResourceVariant } from "./resource";
import UberIdentifier from "../uberState/uberIdentifier";
import EquipmentVariants from "../equipment";
import { Item, ItemVariant } from "../item";

export enum SysCommandVariant {
    autosave = 0,
    setResource = 1,
    checkpoint = 2,
    kwolokStatue = 7,
    warp = 8,
    applier = 11,
    setHealth = 12,
    setEnergy = 13,
    setSpiritLight = 14,
    equip = 15,
    triggerBind = 16,
    ifEqual = 17,
    ifGreater = 18,
    ifLess = 19,
    disableSync = 20,
    enableSync = 21,
    createWarpIcon = 22,
    destroyWarpIcon = 23,
    ifBounds = 24,
    ifSelfEqual = 25,
    ifSelfGreater = 26,
    ifSelfLess = 27,
}

interface Autosave {
    id: SysCommandVariant.autosave,
}
interface SetResource {
    id: SysCommandVariant.setResource,
    resource: ResourceVariant,
    amount: number,
}
interface Checkpoint {
    id: SysCommandVariant.checkpoint,
}
interface KwolokStatue {
    id: SysCommandVariant.kwolokStatue,
    value: number,
}
interface Warp {
    id: SysCommandVariant.warp,
    x: number,
    y: number,
}
interface Applier {
    id: SysCommandVariant.applier,
    weird: number,
    stuff: number,
}
interface SetHealth {
    id: SysCommandVariant.setHealth,
    amount: number,
}
interface SetEnergy {
    id: SysCommandVariant.setEnergy,
    amount: number,
}
interface SetSpiritLight {
    id: SysCommandVariant.setSpiritLight,
    amount: number,
}
interface Equip {
    id: SysCommandVariant.equip,
    slot: 0 | 1 | 2,
    equipment: EquipmentVariants,
}
interface TriggerBind {
    id: SysCommandVariant.triggerBind,
    bind: string,
}
interface IfEqual {
    id: SysCommandVariant.ifEqual,
    uberIdentifier: UberIdentifier,
    value: number,
    item: Item,
}
interface IfGreater {
    id: SysCommandVariant.ifGreater,
    uberIdentifier: UberIdentifier,
    value: number,
    item: Item,
}
interface IfLess {
    id: SysCommandVariant.ifLess,
    uberIdentifier: UberIdentifier,
    value: number,
    item: Item,
}
interface DisableSync {
    id: SysCommandVariant.disableSync,
    uberIdentifier: UberIdentifier,
}
interface EnableSync {
    id: SysCommandVariant.enableSync,
    uberIdentifier: UberIdentifier,
}
interface CreateWarpIcon {
    id: SysCommandVariant.createWarpIcon,
    warpId: number,
    x: number,
    y: number,
}
interface DestroyWarpIcon {
    id: SysCommandVariant.destroyWarpIcon,
    warpId: number,
}
interface IfBounds {
    id: SysCommandVariant.ifBounds,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    item: Item,
}
interface IfSelfEqual {
    id: SysCommandVariant.ifSelfEqual,
    value: number,
    item: Item,
}
interface IfSelfGreater {
    id: SysCommandVariant.ifSelfGreater,
    value: number,
    item: Item,
}
interface IfSelfLess {
    id: SysCommandVariant.ifSelfLess,
    value: number,
    item: Item,
}
export type SysSubcommand = Autosave | SetResource | Checkpoint | KwolokStatue | Warp | Applier | SetHealth | SetEnergy | SetSpiritLight | Equip | TriggerBind | IfEqual | IfGreater | IfLess | DisableSync | EnableSync | CreateWarpIcon | DestroyWarpIcon | IfBounds | IfSelfEqual | IfSelfGreater | IfSelfLess;

export interface SysCommand {
    id: ItemVariant.sysCommand,
    subcommand: SysSubcommand,
}
