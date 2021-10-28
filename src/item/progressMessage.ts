import { ItemVariant } from "../item";
import ZoneVariants from "../zone";

export enum ProgressVariant {
    relic,
    zoneRelic,
    pickup,
    goalmode,
}

interface RelicProgress {
    id: ProgressVariant.relic,
}
interface ZoneRelicProgress {
    id: ProgressVariant.zoneRelic,
    zone: ZoneVariants,
}
interface PickupProgress {
    id: ProgressVariant.pickup,
}
interface GoalmodeProgress {
    id: ProgressVariant.goalmode,
}
export type ProgressMessageVariant = RelicProgress | ZoneRelicProgress | PickupProgress | GoalmodeProgress;

export interface ProgressMessage {
    id: ItemVariant.progressMessage,
    progressVariant: ProgressMessageVariant,
}
