import { ItemVariant } from "../item";

export interface Message {
    id: ItemVariant.message,
    message: string,
    mute?: true,
    lifetime?: number,
    instant?: true,
    quiet?: true,
    position?: number,
    noclear?: true,
}
