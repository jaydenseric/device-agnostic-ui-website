// @ts-check

import ListUnordered, {
  css as cssListUnordered,
} from "device-agnostic-ui/ListUnordered.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssListUnordered,
]);

export default function Example() {
  return createElement(
    ListUnordered,
    null,
    createElement("li", null, "Eat healthy"),
    createElement("li", null, "Sleep well"),
    createElement("li", null, "Exercise regularly"),
  );
}
