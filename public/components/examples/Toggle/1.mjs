// @ts-check

import Toggle, { css as cssToggle } from "device-agnostic-ui/Toggle.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssToggle,
]);

export default function Example() {
  return createElement(Toggle, { inputProps: { type: "checkbox" } }, "Label");
}
