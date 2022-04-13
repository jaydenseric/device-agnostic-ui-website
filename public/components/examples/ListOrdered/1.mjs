// @ts-check

import ListOrdered, {
  css as cssListOrdered,
} from "device-agnostic-ui/ListOrdered.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssListOrdered,
]);

export default function Example() {
  return createElement(
    ListOrdered,
    null,
    createElement("li", null, "Pichu"),
    createElement("li", null, "Pikachu"),
    createElement("li", null, "Raichu"),
  );
}
