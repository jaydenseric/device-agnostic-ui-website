// @ts-check

import Textbox, { css as cssTextbox } from "device-agnostic-ui/Textbox.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssTextbox,
]);

export default function Example() {
  return createElement(Textbox, { placeholder: "Placeholder" });
}
