import { Completion, CompletionVariant } from "../completion";
import Icon from "../icon";
import GromIconVariant from "../icon/gromIcon";
import LupoIconVariant from "../icon/lupoIcon";
import OpherIconVariant from "../icon/opherIcon";
import ShardIconVariant from "../icon/shardIcon";
import SpellIconVariant from "../icon/spellIcon";
import TuleyIconVariant from "../icon/tuleyIcon";
import { ParseSuccess, Token, ParseFailure, parseInteger, succeed, parseWord, fail, eat } from "../parser";

type ParseIconSuccess = ParseSuccess<Icon>;
function parseIconId(string: string, typeId: "shard" | "spell" | "opher" | "lupo" | "grom" | "tuley", enumObject: Object, expected: Token, completion: Completion): ParseIconSuccess | ParseFailure {
    const separatorResult = eat(string, ":");
    if (separatorResult === null) { return fail(":", string, undefined); }
    string = separatorResult;

    const variantResult = parseInteger(string, true);
    if (variantResult === null) { return fail(expected, string, completion); }
    string = variantResult.remaining;
    const variant = variantResult.value;

    if (!(variant in enumObject)) { return fail(expected, string, completion); }

    const icon: Icon = {
        id: typeId,
        iconId: variant,
    };

    return succeed(icon, string);
}
function parseIcon(string: string): ParseIconSuccess | ParseFailure {
    const iconTypeResult = parseWord(string);
    if (iconTypeResult === null) { return fail(Token.iconType, string, { id: CompletionVariant.iconType }); }
    string = iconTypeResult.remaining;
    const iconType = iconTypeResult.value;

    switch (iconType) {
        case "shard": return parseIconId(string, iconType, ShardIconVariant, Token.shardIconValue, { id: CompletionVariant.shardIconValue });
        case "spell": return parseIconId(string, iconType, SpellIconVariant, Token.spellIconValue, { id: CompletionVariant.spellIconValue });
        case "opher": return parseIconId(string, iconType, OpherIconVariant, Token.opherIconValue, { id: CompletionVariant.opherIconValue });
        case "lupo": return parseIconId(string, iconType, LupoIconVariant, Token.lupoIconValue, { id: CompletionVariant.lupoIconValue });
        case "grom": return parseIconId(string, iconType, GromIconVariant, Token.gromIconValue, { id: CompletionVariant.gromIconValue });
        case "tuley": return parseIconId(string, iconType, TuleyIconVariant, Token.tuleyIconValue, { id: CompletionVariant.tuleyIconValue });
        case "file":
            const separatorResult = eat(string, ":");
            if (separatorResult === null) { return fail(":", string, undefined); }
            string = separatorResult;

            const icon: Icon = {
                id: "file",
                path: string,  // TODO comments?
            };

            return succeed(icon, string);
        default: return fail(Token.iconType, string, { id: CompletionVariant.iconType });
    }
}

export default parseIcon;
