// @ts-check

import Code, { css as cssCode } from "device-agnostic-ui/Code.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssCode,
]);

export default function Example() {
  return createElement(Code, null, "window");
}
