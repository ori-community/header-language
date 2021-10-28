import { ItemVariant } from "../item";
import UberIdentifier from "../uberState/uberIdentifier";

export interface SetPointer {
    pointerIdentifier: UberIdentifier,
}
export interface SetRange<ValueType> {
    lower: ValueType | SetPointer,
    upper: ValueType | SetPointer,
}

export interface SetExpression<ValueType> {
    type: "bool" | "teleporter" | "byte" | "int" | "float",
    sign?: boolean,
    value: ValueType | SetPointer | SetRange<ValueType>,
}

export interface SetUberState {
    id: ItemVariant.setUberState,
    uberIdentifier: UberIdentifier,
    expression: SetExpression<any>,
    skip: number,
}
