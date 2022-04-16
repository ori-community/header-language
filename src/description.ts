import namedUberStates from "./uberState/namedUberStates";
import uberStates from "./uberState/uberStates";
import EquipmentVariants from "./equipment";
import { Item, ItemVariant } from "./item";
import { AbilityVariant } from "./item/ability";
import { BonusItemVariant } from "./item/bonusItem";
import { BonusUpgradeVariant } from "./item/bonusUpgrade";
import { SysSubcommand, SysCommandVariant } from "./item/sysCommand";
import { ResourceVariant } from "./item/resource";
import { ShardVariant } from "./item/shard";
import { TeleporterVariant } from "./item/teleporter";
import UberIdentifier from "./uberState/uberIdentifier";
import ZoneVariants from "./zone";
import { ProgressVariant } from "./item/progressMessage";
import { WheelCommandVariant, WheelSubcommand } from "./item/wheelCommand";
import Icon from "./icon";
import ShardIconVariant from "./icon/shardIcon";
import SpellIconVariant from "./icon/spellIcon";
import OpherIconVariant from "./icon/opherIcon";
import LupoIconVariant from "./icon/lupoIcon";
import TuleyIconVariant from "./icon/tuleyIcon";
import GromIconVariant from "./icon/gromIcon";
import { ShopCommandVariant, ShopSubcommand } from "./item/shopCommand";
import { Line, LineVariant, Pickup } from "./line";
import { Command, CommandVariant } from "./command";

function describeUberState(uberIdentifier: UberIdentifier, uberValue?: number): string {
    const namedEntry = namedUberStates.find(uberState =>
        uberState.groupId === uberIdentifier.group &&
        uberState.uberId === uberIdentifier.id &&
        uberState.uberValue === uberValue
    );
    if (namedEntry !== undefined) {
        let description = namedEntry.id;
        const value = namedEntry.uberValue;
        if (value !== undefined) {
            description += `=${value}`;
        }
        return description;
    }

    const entry = uberStates.find(uberState =>
        uberState.groupId === uberIdentifier.group &&
        uberState.uberId === uberIdentifier.id
    );
    if (entry !== undefined) {
        return entry.id;
    }

    console.warn("Failed to describe uberState: ", uberIdentifier, uberValue);
    let code = `${uberIdentifier.group}|${uberIdentifier.id}`;
    if (uberValue !== undefined) {
        code += `=${uberValue}`;
    }
    return code;
}

function describeSysCommand(command: SysSubcommand): string {
    switch (command.id) {
        case SysCommandVariant.autosave:
            return "Autosave";
        case SysCommandVariant.setResource:
            const resourceName = ResourceVariant[command.resource];
            return `Set ${resourceName} to ${command.amount}`;
        case SysCommandVariant.checkpoint:
            return "Checkpoint";
        case SysCommandVariant.kwolokStatue:
            return `${command.value ? "Enable" : "Disable"} Kwolok statue`;
        case SysCommandVariant.warp:
            return `Warp to ${command.x}, ${command.y}`;
        case SysCommandVariant.applier:
            return `Override applier state ${command.weird} with ${command.stuff}`;
        case SysCommandVariant.setHealth:
            return `Set current health to ${command.amount}`;
        case SysCommandVariant.setEnergy:
            return `Set current energy to ${command.amount}`;
        case SysCommandVariant.setSpiritLight:
            return `Set current spirit light to ${command.amount}`;
        case SysCommandVariant.equip: {
            const equipmentName = EquipmentVariants[command.equipment];
            return `Equip ${equipmentName} to slot ${command.slot}`;
        } case SysCommandVariant.unequip: {
            const equipmentName = EquipmentVariants[command.equipment];
            return `Unequip ${equipmentName}`;
        } case SysCommandVariant.triggerBind:
            return `Trigger keybind ${command.bind}`;
        case SysCommandVariant.ifEqual: {
            const uberStateDescription = describeUberState(command.uberIdentifier);
            const itemDescription = describeItem(command.item);
            return `Grant this item if ${uberStateDescription} is equal to ${command.value}:\n\n${itemDescription}`;
        } case SysCommandVariant.ifGreater: {
            const uberStateDescription = describeUberState(command.uberIdentifier);
            const itemDescription = describeItem(command.item);
            return `Grant this item if ${uberStateDescription} is greater than ${command.value}:\n\n${itemDescription}`;
        } case SysCommandVariant.ifLess: {
            const uberStateDescription = describeUberState(command.uberIdentifier);
            const itemDescription = describeItem(command.item);
            return `Grant this item if ${uberStateDescription} is less than ${command.value}:\n\n${itemDescription}`;
        } case SysCommandVariant.disableSync: {
            const uberStateDescription = describeUberState(command.uberIdentifier);
            return `Disable multiplayer sync for ${uberStateDescription}`;
        } case SysCommandVariant.enableSync: {
            const uberStateDescription = describeUberState(command.uberIdentifier);
            return `Enable multiplayer sync for ${uberStateDescription}`;
        } case SysCommandVariant.createWarpIcon:
            return `Create warp icon ${command.warpId} at ${command.x}, ${command.y}${command.label === undefined ? "" : ` with a label "${command.label}"`}`;
        case SysCommandVariant.destroyWarpIcon:
            return `Destroy warp icon ${command.warpId}`;
        case SysCommandVariant.ifBounds: {
            const itemDescription = describeItem(command.item);
            return `Grant this item if Ori is within the rectangle defined by ${command.x1},${command.y1}/${command.x2},${command.y2}:\n\n${itemDescription}`;
        } case SysCommandVariant.ifSelfEqual: {
            const itemDescription = describeItem(command.item);
            return `Grant this item if the location's value is equal to ${command.value}:\n\n${itemDescription}`;
        } case SysCommandVariant.ifSelfGreater: {
            const itemDescription = describeItem(command.item);
            return `Grant this item if the location's value is greater than ${command.value}:\n\n${itemDescription}`;
        } case SysCommandVariant.ifSelfLess: {
            const itemDescription = describeItem(command.item);
            return `Grant this item if the location's value is less than ${command.value}:\n\n${itemDescription}`;
        } case SysCommandVariant.saveString:
            return `Stores the string "${command.string}" under the identifier ${command.stringId}`;
        case SysCommandVariant.appendString:
            return `Appends the string "${command.string}" to the current value stored under the identifier ${command.stringId}`;
    }
}
function describeIcon(icon: Icon): string {
    switch (icon.id) {
        case "shard": return `the ${ShardIconVariant[icon.iconId]} icon`;
        case "spell": return `the ${SpellIconVariant[icon.iconId]} icon`;
        case "opher": return `the ${OpherIconVariant[icon.iconId]} icon`;
        case "lupo": return `the ${LupoIconVariant[icon.iconId]} icon`;
        case "grom": return `the ${GromIconVariant[icon.iconId]} icon`;
        case "tuley": return `the ${TuleyIconVariant[icon.iconId]} icon`;
        case "file": return `the file at "${icon.path}"`;
    }
}
function describeWheelCommand(command: WheelSubcommand): string {
    switch (command.id) {
        case WheelCommandVariant.setText: return `Sets the name of item ${command.position} in wheel ${command.wheel} to "${command.text}"`;
        case WheelCommandVariant.setDescription: return `Sets the description of item ${command.position} in wheel ${command.wheel} to "${command.text}"`;
        case WheelCommandVariant.setIcon:
            const iconDescription = describeIcon(command.icon);
            return `Sets the icon of item ${command.position} in wheel ${command.wheel} to ${iconDescription}`;
        case WheelCommandVariant.setColor: return `Sets the rgba icon color of item ${command.position} in wheel ${command.wheel} to (${command.red}, ${command.green}, ${command.blue}, ${command.alpha})`;
        case WheelCommandVariant.setAction:
            const itemDescription = describeItem(command.item);
            return `Sets the action bound to ${command.bind === 0 ? "all binds" : `ability ${command.bind}`} of item ${command.position} in wheel ${command.wheel} to this item:\n\n${itemDescription}`;
        case WheelCommandVariant.setSticky: return `Sets wheel ${command.wheel} to be ${command.sticky ? "" : "not "}sticky`;
        case WheelCommandVariant.switch: return `Switch to wheel ${command.wheel}`;
        case WheelCommandVariant.remove: return `Remove item ${command.position} in wheel ${command.wheel}`;
        case WheelCommandVariant.clear: return "Clear all wheels";
    }
}
function describeShopCommand(command: ShopSubcommand): string {
    switch (command.id) {
        case ShopCommandVariant.setIcon: {
            const uberStateDescription = describeUberState(command.uberIdentifier);
            const iconDescription = describeIcon(command.icon);
            return `Sets the shop icon of ${uberStateDescription} to ${iconDescription}`;
        } case ShopCommandVariant.setTitle: {
            const uberStateDescription = describeUberState(command.uberIdentifier);
            return `Sets the shop item title of ${uberStateDescription} to ${command.text || "the default"}`;
        } case ShopCommandVariant.setDescription: {
            const uberStateDescription = describeUberState(command.uberIdentifier);
            return `Sets the shop item description of ${uberStateDescription} to ${command.text || "the default"}`;
        } case ShopCommandVariant.setLocked: {
            const uberStateDescription = describeUberState(command.uberIdentifier);
            return `${command.flag ? "L" : "Unl"}ocks the shop item at ${uberStateDescription}`;
        } case ShopCommandVariant.setVisible:
            const uberStateDescription = describeUberState(command.uberIdentifier);
            return `Turns the shop item at ${uberStateDescription} ${command.flag ? "" : "in"}visible`;
    }
}

function describeItem(item: Item): string {
    switch (item.id) {
        case ItemVariant.spiritLight:
            const amount = item.amount;
            return `${amount < 0 ? `Remove ${-amount}` : amount} Spirit Light`;
        case ItemVariant.resource: return ResourceVariant[item.variant];
        case ItemVariant.ability: return AbilityVariant[item.variant];
        case ItemVariant.shard: return ShardVariant[item.variant];
        case ItemVariant.sysCommand: return describeSysCommand(item.subcommand);
        case ItemVariant.teleporter: return `${TeleporterVariant[item.variant]} Teleporter`;
        case ItemVariant.message: return `Display "${item.message}"`;
        case ItemVariant.setUberState:
            const uberStateDescription = describeUberState(item.uberIdentifier);

            const expression = item.expression;

            const value = expression.value;
            let valueDescription: string;
            if (typeof value !== "object") {
                valueDescription = `${value}`;
            } else if ("pointerIdentifier" in value) {
                const pointerDescription = describeUberState(value.pointerIdentifier);
                valueDescription = `the value of ${pointerDescription}`;
            } else if ("lower" in value) {
                const lower = value.lower;
                let lowerDescription: string;
                if (typeof lower !== "object") {
                    lowerDescription = `${lower}`;
                } else if ("pointerIdentifier" in lower) {
                    const pointerDescription = describeUberState(lower.pointerIdentifier);
                    lowerDescription = `the value of ${pointerDescription}`;
                } else {
                    console.warn("failed to describe uberSet value of: ", lower);
                    lowerDescription = "";
                }
                const upper = value.upper;
                let upperDescription: string;
                if (typeof upper !== "object") {
                    upperDescription = `${upper}`;
                } else if ("pointerIdentifier" in upper) {
                    const pointerDescription = describeUberState(upper.pointerIdentifier);
                    upperDescription = `the value of ${pointerDescription}`;
                } else {
                    console.warn("failed to describe uberSet value of: ", upper);
                    upperDescription = "";
                }
                valueDescription = `a random value between ${lowerDescription} and ${upperDescription}`;
            } else {
                console.warn("failed to describe uberSet value of: ", value);
                valueDescription = "";
            }

            let description;
            switch (expression.sign) {
                case undefined:
                    description = `Set ${uberStateDescription} to ${valueDescription}`;
                    break;
                case true:
                    description = `Add ${valueDescription} to ${uberStateDescription}`;
                    break;
                case false:
                    description = `Subtract ${valueDescription} from ${uberStateDescription}`;
                    break;
            }

            const skip = item.skip;
            if (skip > 0) {
                description += `, skipping the next ${skip === 1 ? "trigger" : `${skip} triggers`}`;
            }

            return description;
        case ItemVariant.water: return "Water";
        case ItemVariant.bonusItem: return BonusItemVariant[item.variant];
        case ItemVariant.bonusUpgrade: return BonusUpgradeVariant[item.variant];
        case ItemVariant.relic: return `${ZoneVariants[item.variant]} Relic`;
        case ItemVariant.progressMessage:
            const variant = item.progressVariant;
            switch (variant.id) {
                case ProgressVariant.relic:
                    return "Relic progress";
                case ProgressVariant.zoneRelic:
                    return `${ZoneVariants[variant.zone]} Relic Progress`;
                case ProgressVariant.pickup:
                    return "Pickup progress";
                case ProgressVariant.goalmode:
                    return "Goalmode progress";
            }
        case ItemVariant.wheelCommand: return describeWheelCommand(item.subcommand);
        case ItemVariant.shopCommand: return describeShopCommand(item.subcommand);
        default:
            const safeguard: never = item;
            return safeguard;
    }
}

function describePickup(pickup: Pickup): string[] {
    const uberStateDescription = describeUberState(pickup.uberIdentifier, pickup.uberValue);
    const itemDescription = describeItem(pickup.item);

    return [
        `**Location**\n\n${uberStateDescription}`,
        `**Item**\n\n${itemDescription}`,
    ];
}

function describeCommand(command: Command): string {
    switch (command.id) {
        case CommandVariant.include: return `Include header "${command.path}"`;
        case CommandVariant.exclude: return `Exclude header "${command.path}"`;
        case CommandVariant.add:
        case CommandVariant.remove: {
            const add = command.id === CommandVariant.add;
            const amount = command.amount;
            const amountDescription = amount === 1 ? "" : `${amount} times `;
            const itemDescription = describeItem(command.item);
            return `${add ? "Add" : "Remove"} this item ${amountDescription}${add ? "to" : "from"} the item pool:\n\n${itemDescription}`;
        } case CommandVariant.name: {
            const itemDescription = describeItem(command.item);
            return `Set the name of this item to "${command.name}":\n\n${itemDescription}`;
        } case CommandVariant.display: {
            const itemDescription = describeItem(command.item);
            return `Set the display name of this item to "${command.display}":\n\n${itemDescription}`;
        } case CommandVariant.description: {
            const itemDescription = describeItem(command.item);
            return `Set the shop description of this item to "${command.description}":\n\n${itemDescription}`;
        } case CommandVariant.price: {
            const itemDescription = describeItem(command.item);
            return `Set the price of this item to "${command.price}":\n\n${itemDescription}`;
        } case CommandVariant.icon: {
            const itemDescription = describeItem(command.item);
            const iconDescription = describeIcon(command.icon);
            return `Set the icon of this item to "${iconDescription}":\n\n${itemDescription}`;
        } case CommandVariant.parameter: {
            const parameter = command.parameter;
            return `Add a parameter "${parameter.identifier}" with default value "${parameter.defaultValue}"`;
        } case CommandVariant.pool: return `Add "${command.poolItem}" to the random pool`;
        case CommandVariant.addpool: return `Add ${command.amount} random items from the random pool to the item pool`;
        case CommandVariant.flush: return "Flush the random pool";
        case CommandVariant.set: return `Sets the logic state "${command.state}" to be met`;
        case CommandVariant.if: return `Opens a block that will only be added to the seed if the parameter "${command.parameterId}" is "${command.value}"`;
        case CommandVariant.endif: return "Closes one if block";
    }
}
function describeCommandLine(command: Command): string[] {
    const commandDescription = describeCommand(command);

    return [
        `**Command**\n\n${commandDescription}`
    ];
}
function describeTimerLine(trigger: UberIdentifier, timer: UberIdentifier): string[] {
    return [
        `**Timer**\n\nBind a timer on ${trigger.group}|${trigger.id} to a toggle on ${timer.group}|${timer.id}`
    ];
}

export function describeLine(line: Line): string[] {
    switch (line.id) {
        case LineVariant.pickup: return describePickup(line.pickup);
        case LineVariant.command: return describeCommandLine(line.command);
        case LineVariant.timer: return describeTimerLine(line.trigger, line.timer);
        case LineVariant.flags:
        case LineVariant.spawn: return [];
    }
}
