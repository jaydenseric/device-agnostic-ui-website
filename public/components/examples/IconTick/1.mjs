// @ts-check

import IconTick, { css as cssIconTick } from "device-agnostic-ui/IconTick.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssIconTick,
]);

export default function Example() {
  return createElement(IconTick, { size: "2em" });
}
