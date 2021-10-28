import GromIconVariant from "./icon/gromIcon";
import LupoIconVariant from "./icon/lupoIcon";
import OpherIconVariant from "./icon/opherIcon";
import ShardIconVariant from "./icon/shardIcon";
import SpellIconVariant from "./icon/spellIcon";
import TuleyIconVariant from "./icon/tuleyIcon";

interface ShardIcon {
    id: "shard",
    iconId: ShardIconVariant,
}
interface SpellIcon {
    id: "spell",
    iconId: SpellIconVariant,
}
interface OpherIcon {
    id: "opher",
    iconId: OpherIconVariant,
}
interface LupoIcon {
    id: "lupo",
    iconId: LupoIconVariant,
}
interface GromIcon {
    id: "grom",
    iconId: GromIconVariant,
}
interface TuleyIcon {
    id: "tuley",
    iconId: TuleyIconVariant,
}
interface FileIcon {
    id: "file",
    path: string,
}
type Icon = ShardIcon | SpellIcon | OpherIcon | LupoIcon | GromIcon | TuleyIcon | FileIcon;

export default Icon;
