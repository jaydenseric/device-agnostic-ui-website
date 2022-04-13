// @ts-check

import Para, { css as cssPara } from "device-agnostic-ui/Para.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssPara,
]);

export default function Example() {
  return createElement(
    Para,
    null,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  );
}
