// @ts-check

import Toggle, { css as cssToggle } from "device-agnostic-ui/Toggle.mjs";
import { createElement, Fragment } from "react";

export const css = new Set([
  ...cssToggle,
]);

export default function Example() {
  return createElement(
    Fragment,
    null,
    createElement(Toggle, {
      inputProps: {
        type: "radio",
        name: "options",
        value: "a",
        defaultChecked: true,
      },
    }, "Label A"),
    createElement(Toggle, {
      inputProps: {
        type: "radio",
        name: "options",
        value: "b",
      },
    }, "Label B"),
  );
}
