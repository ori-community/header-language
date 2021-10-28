import { SpiritLight } from "./item/spiritLight";
import { Resource } from "./item/resource";
import { Ability } from "./item/ability";
import { Shard } from "./item/shard";
import { SysCommand } from "./item/sysCommand";
import { Teleporter } from "./item/teleporter";
import { Message } from "./item/message";
import { SetUberState } from "./item/setUberState";
import { Water } from "./item/water";
import { BonusItem } from "./item/bonusItem";
import { BonusUpgrade } from "./item/bonusUpgrade";
import { Relic } from "./item/relic";
import { ProgressMessage } from "./item/progressMessage";
import { WheelCommand } from "./item/wheelCommand";
import { ShopCommand } from "./item/shopCommand";

export enum ItemVariant {
    spiritLight = 0,
    resource = 1,
    ability = 2,
    shard = 3,
    sysCommand = 4,
    teleporter = 5,
    message = 6,
    setUberState = 8,
    water = 9,
    bonusItem = 10,
    bonusUpgrade = 11,
    relic = 14,
    progressMessage = 15,
    wheelCommand = 16,
    shopCommand = 17,
}

export type Item = SpiritLight | Resource | Ability | Shard | SysCommand | Teleporter | Message | SetUberState | Water | BonusItem | BonusUpgrade | Relic | ProgressMessage | WheelCommand | ShopCommand;
