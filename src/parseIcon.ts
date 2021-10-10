import iconVariants from "./assets/iconVariants";

const iconRegex = /^(?:file:(.+?)|((?:shard|spell|opher|lupo|grom|tuley):\d+))$/;

export function parseIcon(string: string): string | undefined {
    const match = string.match(iconRegex);
    if (match === null) { return undefined; }

    const filepath = match[1];
    if (filepath !== undefined) {
        return `file at ${filepath}`;
    }

    const variant = match[2];
    const iconName = iconVariants[variant];

    return `${iconName} icon`;
}
