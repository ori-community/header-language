import * as vscode from "vscode";
import { CompletionItem } from "vscode";
import booleanCompletions from "./completion/booleanCompletion";
import iconTypeCompletions from "./completion/iconTypeCompletion";
import keybindCompletions from "./completion/keybindCompletions";
import messageFlagCompletions from "./completion/messageFlagCompletion";
import { uberIdCompletions, uberStateCompletions } from "./completion/uberStateCompletion";
import uberTypeCompletions from "./completion/uberTypeCompletion";
import waterCompletions from "./completion/waterCompletion";
import wheelBindCompletions from "./completion/wheelBindCompletion";
import EquipmentVariants from "./equipment";
import GromIconVariant from "./icon/gromIcon";
import LupoIconVariant from "./icon/lupoIcon";
import OpherIconVariant from "./icon/opherIcon";
import ShardIconVariant from "./icon/shardIcon";
import SpellIconVariant from "./icon/spellIcon";
import TuleyIconVariant from "./icon/tuleyIcon";
import { AbilityVariant } from "./item/ability";
import { BonusItemVariant } from "./item/bonusItem";
import { BonusUpgradeVariant } from "./item/bonusUpgrade";
import { SysCommandVariant } from "./item/sysCommand";
import { ProgressVariant } from "./item/progressMessage";
import { ResourceVariant } from "./item/resource";
import { ShardVariant } from "./item/shard";
import { ShopCommandVariant } from "./item/shopCommand";
import { TeleporterVariant } from "./item/teleporter";
import { WheelCommandVariant } from "./item/wheelCommand";
import { getItemCompletions, getNameCompletions } from "./util";
import ZoneVariants from "./zone";
import commandCompletions from "./completion/commandCompletion";
import parameterTypeCompletions from "./completion/parameterTypeCompletion";
import { ItemVariant } from "./item";
import { AnnotationVariant } from "./annotation";
import { PickupFlagVariant } from "./pickupFlag";
import { FlagVariant } from "./flag";
import { ParseError } from "wotw-seedgen";
import { Slot } from "./item/slot";
import { NumericBoolean } from "./item/numericBoolean";
import { ToggleCommand } from "./item/toggleCommand";
import { WheelPosition } from "./item/wheelPosition";
import InterpolationCommand from "./interpolationCommand";

export function offerCompletions(error: ParseError, text: string): CompletionItem[] | null {
    const completion = error.completion;
    if (completion === undefined) { return null; }

    switch (completion) {
        case "Uber Group": return uberStateCompletions;
        case "Uber Id":
            const group = +text.slice(0, error.range.start).split(/[|\n]/).slice(-2)[0];
            return uberIdCompletions(group);
        case "Uber Id": return null;
        case "Uber Trigger Value": return null;
        case "Uber Condition Value": return null;
        case "Integer": return null;
        case "Float": return null;
        case "Identifier": return null;
        case "Expression": return uberStateCompletions;
        case "Boolean": return booleanCompletions;
        case "Numeric Boolean": return getItemCompletions(NumericBoolean);
        case "Interpolation Command": return getNameCompletions(InterpolationCommand);
        case "Item Kind": return getItemCompletions(ItemVariant);
        case "Resource": return getItemCompletions(ResourceVariant);
        case "Skill": return getItemCompletions(AbilityVariant);
        case "Shard": return getItemCompletions(ShardVariant);
        case "Command Kind": return getItemCompletions(SysCommandVariant);
        case "Equip Slot": return getItemCompletions(Slot);
        case "Spell": return getItemCompletions(EquipmentVariants);
        case "Toggle Command Kind": return getItemCompletions(ToggleCommand);
        // case CompletionVariant.keybind: return keybindCompletions;
        case "Teleporter": return getItemCompletions(TeleporterVariant);
        case "Message Flag": return messageFlagCompletions;
        case "Uber Type": return uberTypeCompletions;
        case "World Event": return waterCompletions;
        case "Bonus Item": return getItemCompletions(BonusItemVariant);
        case "Bonus Upgrade": return getItemCompletions(BonusUpgradeVariant);
        case "Zone": return getItemCompletions(ZoneVariants);
        case "Sys Message Kind": return getItemCompletions(ProgressVariant);
        case "Wheel Command Kind": return getItemCompletions(WheelCommandVariant);
        case "IconKind": return iconTypeCompletions;
        case "Shard Icon": return getItemCompletions(ShardIconVariant);
        case "Spell Icon": return getItemCompletions(SpellIconVariant);
        case "Opher Icon": return getItemCompletions(OpherIconVariant);
        case "Lupo Icon": return getItemCompletions(LupoIconVariant);
        case "Grom Icon": return getItemCompletions(GromIconVariant);
        case "Tuley Icon": return getItemCompletions(TuleyIconVariant);
        case "Wheel Bind": return wheelBindCompletions;
        case "Wheel Item Position": return getItemCompletions(WheelPosition);
        case "Shop Command Kind": return getItemCompletions(ShopCommandVariant);
        case "HeaderCommand": return commandCompletions;
        case "ParameterType": return parameterTypeCompletions;
        case "Annotation": return getNameCompletions(AnnotationVariant);
        case "PickupFlag": return getNameCompletions(PickupFlagVariant);
        // case CompletionVariant.flag: return getNameCompletions(FlagVariant);
        default:
            vscode.window.showWarningMessage(`Received unknown completion request "${completion}"`);
            return null;
    }
}
