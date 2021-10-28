import { ItemVariant } from "../item";

export enum BonusItemVariant {
    healthRegeneration = 30,
    energyRegeneration = 31,
    extraDoubleJump = 35,
    extraAirDash = 36,
}
export interface BonusItem {
    id: ItemVariant.bonusItem,
    variant: BonusItemVariant,
}
