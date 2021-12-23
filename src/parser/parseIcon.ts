import { Completion, CompletionVariant } from "../completion";
import Icon from "../icon";
import GromIconVariant from "../icon/gromIcon";
import LupoIconVariant from "../icon/lupoIcon";
import OpherIconVariant from "../icon/opherIcon";
import ShardIconVariant from "../icon/shardIcon";
import SpellIconVariant from "../icon/spellIcon";
import TuleyIconVariant from "../icon/tuleyIcon";
import { ParseSuccess, Token, ParseFailure, parseInteger, succeed, parseWord, fail, eat, ParseStatus, parseRemainingLine } from "../parser";

type ParseIconSuccess = ParseSuccess<Icon>;
function parseIconId(status: ParseStatus, typeId: "shard" | "spell" | "opher" | "lupo" | "grom" | "tuley", enumObject: Object, expected: Token, completion: Completion): ParseIconSuccess | ParseFailure {
    if (!eat(status, ":")) { return fail(":", status, undefined); }

    const variant = parseInteger(status, true);
    if (variant === null) { return fail(expected, status, completion); }

    if (!(variant in enumObject)) { return fail(expected, status, completion); }

    const icon: Icon = {
        id: typeId,
        iconId: variant,
    };

    return succeed(icon);
}
function parseIcon(status: ParseStatus): ParseIconSuccess | ParseFailure {
    const iconType = parseWord(status);
    if (iconType === null) { return fail(Token.iconType, status, { id: CompletionVariant.iconType }); }

    switch (iconType) {
        case "shard": return parseIconId(status, iconType, ShardIconVariant, Token.shardIconValue, { id: CompletionVariant.shardIconValue });
        case "spell": return parseIconId(status, iconType, SpellIconVariant, Token.spellIconValue, { id: CompletionVariant.spellIconValue });
        case "opher": return parseIconId(status, iconType, OpherIconVariant, Token.opherIconValue, { id: CompletionVariant.opherIconValue });
        case "lupo": return parseIconId(status, iconType, LupoIconVariant, Token.lupoIconValue, { id: CompletionVariant.lupoIconValue });
        case "grom": return parseIconId(status, iconType, GromIconVariant, Token.gromIconValue, { id: CompletionVariant.gromIconValue });
        case "tuley": return parseIconId(status, iconType, TuleyIconVariant, Token.tuleyIconValue, { id: CompletionVariant.tuleyIconValue });
        case "file":
            if (!eat(status, ":")) { return fail(":", status, undefined); }

            const path = parseRemainingLine(status);
            if (path === null) { return fail(Token.path, status, undefined); }

            const icon: Icon = {
                id: "file",
                path,  // TODO comments?
            };

            return succeed(icon);
        default: return fail(Token.iconType, status, { id: CompletionVariant.iconType });
    }
}

export default parseIcon;
