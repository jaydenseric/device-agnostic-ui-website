// @ts-check

import ButtonSubmit, {
  css as cssButtonSubmit,
} from "device-agnostic-ui/ButtonSubmit.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssButtonSubmit,
]);

export default function Example() {
  return createElement(ButtonSubmit, { success: true }, "Submit");
}
