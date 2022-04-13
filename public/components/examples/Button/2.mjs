// @ts-check

import Button, { css as cssButton } from "device-agnostic-ui/Button.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssButton,
]);

export default function Example() {
  return createElement(Button, { disabled: true }, "Label");
}
