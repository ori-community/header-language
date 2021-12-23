import { Command } from "./command";
import { Item } from "./item";
import UberIdentifier from "./uberState/uberIdentifier";

export enum LineVariant {
    pickup,
    command,
    timer,
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

export type Line = PickupLine | CommandLine | TimerLine;
