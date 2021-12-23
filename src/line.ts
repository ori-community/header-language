import { Command } from "./command";
import { Item } from "./item";
import UberIdentifier from "./uberState/uberIdentifier";

export enum LineVariant {
    pickup,
    command,
    timer,
    flags,
    spawn,
}

export interface Pickup {
    uberIdentifier: UberIdentifier,
    uberValue?: number,
    item: Item,
}

export interface PickupLine {
    id: LineVariant.pickup,
    pickup: Pickup,
}
export interface CommandLine {
    id: LineVariant.command,
    command: Command,
}
export interface TimerLine {
    id: LineVariant.timer,
    trigger: UberIdentifier,
    timer: UberIdentifier,
}
export interface FlagLine {
    id: LineVariant.flags,
}
export interface SpawnLine {
    id: LineVariant.spawn,
}

export type Line = PickupLine | CommandLine | TimerLine | FlagLine | SpawnLine;
