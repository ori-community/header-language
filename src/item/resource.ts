import { ItemVariant } from "../item";

export enum ResourceVariant {
    healthFragment,
    energyFragment,
    gorlekOre,
    keystone,
    shardSlot,
}
export interface Resource {
    id: ItemVariant.resource,
    variant: ResourceVariant,
}
