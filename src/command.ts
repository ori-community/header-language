import Icon from "./icon";
import { Item } from "./item";

export enum CommandVariant {
    include,
    exclude,
    add,
    remove,
    name,
    display,
    price,
    icon,
    parameter,
    pool,
    addpool,
    flush,
    set,
    if,
    endif,
}

export interface IncludeCommand {
    id: CommandVariant.include,
    path: string,
}
export interface ExcludeCommand {
    id: CommandVariant.exclude,
    path: string,
}
export interface AddCommand {
    id: CommandVariant.add,
    amount: number,
    item: Item,
}
export interface RemoveCommand {
    id: CommandVariant.remove,
    amount: number,
    item: Item,
}
export interface NameCommand {
    id: CommandVariant.name,
    item: Item,
    name: string,
}
export interface DisplayCommand {
    id: CommandVariant.display,
    item: Item,
    display: string,
}
export interface PriceCommand {
    id: CommandVariant.price,
    item: Item,
    price: number,
}
export interface IconCommand {
    id: CommandVariant.icon,
    item: Item,
    icon: Icon,
}
export interface ParameterCommand {
    id: CommandVariant.parameter,
    parameterId: string,
    defaultValue: boolean | number | string,
}
export interface PoolCommand {
    id: CommandVariant.pool,
    poolItem: string,
}
export interface AddPoolCommand {
    id: CommandVariant.addpool,
    amount: number,
}
export interface FlushCommand {
    id: CommandVariant.flush,
}
export interface SetCommand {
    id: CommandVariant.set,
    state: string,
}
export interface IfCommand {
    id: CommandVariant.if,
    parameterId: string,
    value: boolean | number | string,
}
export interface EndIfCommand {
    id: CommandVariant.endif,
}

export type Command = IncludeCommand | ExcludeCommand | AddCommand | RemoveCommand | NameCommand | DisplayCommand | PriceCommand | IconCommand | ParameterCommand | PoolCommand | AddPoolCommand | FlushCommand | SetCommand | IfCommand | EndIfCommand;
