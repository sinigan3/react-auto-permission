import {Fragment, jsx as jsx_, jsxs as jsxs_} from "react/jsx-runtime";
import {hasNestedPermission} from "../utils";

function jsx(type, config, maybeKey, source, self) {
    const permission = config["data-permission"];
    const permissionType = config["data-permission-type"];
    const hasPermission = permission || hasNestedPermission(config?.items) || config.okButtonProps?.["data-permission"] || hasNestedPermission(config?.menu?.items);

    if (type !== window.PermissionHoc && hasPermission) {
        return jsx_(window.PermissionHoc, {permission, permissionType, children: jsx_(type, config, undefined, source, self)}, maybeKey, false, {});
    }
    return jsx_(type, config, maybeKey, source, self);
}

function jsxs(type, config, maybeKey, source, self) {
    const permission = config["data-permission"];
    const permissionType = config["data-permission-type"];
    const hasPermission = permission || hasNestedPermission(config?.items) || config.okButtonProps?.["data-permission"] || hasNestedPermission(config?.menu?.items);

    if (type !== window.PermissionHoc && hasPermission) {
        return jsxs_(window.PermissionHoc, {permission, permissionType, children: jsxs_(type, config, undefined, source, self)}, maybeKey, false, {});
    }
    return jsxs_(type, config, maybeKey, source, self);
}

export {Fragment, jsx, jsxs};
