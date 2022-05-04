function toArray(wasmList) {
    const items = [];
    while (true) {
        const item = wasmList.next();
        if (item === undefined) {
            return items;
        }
        items.push(item);
    }
}
module.exports = { toArray };
