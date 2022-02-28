import Icon from "../icon";
import { ItemVariant } from "../item";
import UberIdentifier from "../uberState/uberIdentifier";

export enum ShopCommandVariant {
    setIcon = 0,
    setTitle = 1,
    setDescription = 2,
    setLocked = 3,
    setVisible = 4,
}

interface SetShopItemIcon {
    id: ShopCommandVariant.setIcon,
    uberIdentifier: UberIdentifier,
    icon: Icon,
}
interface SetShopItemTitle {
    id: ShopCommandVariant.setTitle,
    uberIdentifier: UberIdentifier,
    text: string | null,
}
interface SetShopItemDescription {
    id: ShopCommandVariant.setDescription,
    uberIdentifier: UberIdentifier,
    text: string | null,
}
interface SetShopItemLocked {
    id: ShopCommandVariant.setLocked,
    uberIdentifier: UberIdentifier,
    flag: boolean,
}
interface SetShopItemVisible {
    id: ShopCommandVariant.setVisible,
    uberIdentifier: UberIdentifier,
    flag: boolean,
}
export type ShopSubcommand = SetShopItemIcon | SetShopItemTitle | SetShopItemDescription | SetShopItemLocked | SetShopItemVisible;

export interface ShopCommand {
    id: ItemVariant.shopCommand,
    subcommand: ShopSubcommand
}
