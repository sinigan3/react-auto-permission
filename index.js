/**
 * the old `createElement` for build tool or React 16 which does not support automatic jsx-runtime.
 */

import React from "react";

export function createElement(...args) {
    console.log("createElement", args);

    return React.createElement.apply(undefined, args);
}

// eslint-disable-next-line no-var
export var Fragment = React.Fragment;
