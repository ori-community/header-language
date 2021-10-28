import { Command } from "./command";
import { Item } from "./item";
import UberIdentifier from "./uberState/uberIdentifier";

export enum LineVariant {
    pickup,
    command,
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

export type Line = PickupLine | CommandLine;
