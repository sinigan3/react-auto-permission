import {Fragment, jsxDEV as jsxDEV_} from "react/jsx-dev-runtime";
import {hasNestedPermission} from "../utils";

function jsxDEV(type, config, maybeKey, source, self) {
    const permission = config["data-permission"];
    const permissionType = config["data-permission-type"];
    const hasPermission = permission || hasNestedPermission(config?.items) || config.okButtonProps?.["data-permission"] || hasNestedPermission(config?.menu?.items);

    if (type !== window.PermissionHoc && hasPermission) {
        return jsxDEV_(window.PermissionHoc, {permission, permissionType, children: jsxDEV_(type, config, undefined, source, self)}, maybeKey, false, {});
    }
    return jsxDEV_(type, config, maybeKey, source, self);
}

export {Fragment, jsxDEV};
