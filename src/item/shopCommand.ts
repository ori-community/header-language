import Icon from "../icon";
import { ItemVariant } from "../item";
import UberIdentifier from "../uberState/uberIdentifier";

export enum ShopCommandVariant {
    setIcon = 0,
}

interface SetShopItemIcon {
    id: ShopCommandVariant.setIcon,
    uberIdentifier: UberIdentifier,
    icon: Icon,
}
export type ShopSubcommand = SetShopItemIcon;

export interface ShopCommand {
    id: ItemVariant.shopCommand,
    subcommand: ShopSubcommand
}
