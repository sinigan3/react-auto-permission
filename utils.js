export function hasNestedPermission(items) {
    if (!items?.length) return false;
    return items?.some(item => {
        return item["data-permission"] || hasNestedPermission(item?.children);
    });
}
