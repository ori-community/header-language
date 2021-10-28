import Icon from "../icon";
import { Item, ItemVariant } from "../item";

export enum WheelCommandVariant {
    setText,
    setDescription,
    setIcon,
    setColor,
    setAction,
    setSticky,
    switch,
    remove,
    clear,
}

interface SetWheelItemText {
    id: WheelCommandVariant.setText,
    wheel: number,
    position: number,
    text: string,
}
interface SetWheelItemDescription {
    id: WheelCommandVariant.setDescription,
    wheel: number,
    position: number,
    text: string,
}
interface SetWheelItemIcon {
    id: WheelCommandVariant.setIcon,
    wheel: number,
    position: number,
    icon: Icon,
}
interface SetWheelItemColor {
    id: WheelCommandVariant.setColor,
    wheel: number,
    position: number,
    red: number,
    green: number,
    blue: number,
    alpha: number,
}
interface SetWheelItemAction {
    id: WheelCommandVariant.setAction,
    wheel: number,
    position: number,
    bind: 0 | 1 | 2 | 3,
    item: Item,
}
interface SetWheelSticky {
    id: WheelCommandVariant.setSticky,
    wheel: number,
    sticky: boolean,
}
interface SwitchWheel {
    id: WheelCommandVariant.switch,
    wheel: number,
}
interface RemoveWheelItem {
    id: WheelCommandVariant.remove,
    wheel: number,
    position: number,
}
interface ClearWheels {
    id: WheelCommandVariant.clear,
}
export type WheelSubcommand = SetWheelItemText | SetWheelItemDescription | SetWheelItemIcon | SetWheelItemColor | SetWheelItemAction | SetWheelSticky | SwitchWheel | RemoveWheelItem | ClearWheels;

export interface WheelCommand {
    id: ItemVariant.wheelCommand,
    subcommand: WheelSubcommand
}
