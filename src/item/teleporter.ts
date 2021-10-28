import { ItemVariant } from "../item";

export enum TeleporterVariant {
    midnightBurrows,
    howlsDen,
    eastLuma,
    wellspring,
    baursReach,
    kwoloksHollow,
    mouldwoodDepths,
    westWoods,
    eastWoods,
    westWastes,
    eastWastes,
    outerRuins,
    willowsEnd,
    westLuma,
    innerRuins,
    shriek,
    inkwaterMarsh,
    glades,
}
export interface Teleporter {
    id: ItemVariant.teleporter,
    variant: TeleporterVariant,
}
