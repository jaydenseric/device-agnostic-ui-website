// @ts-check

import ListOrdered, {
  css as cssListOrdered,
} from "device-agnostic-ui/ListOrdered.mjs";
import Para, { css as cssPara } from "device-agnostic-ui/Para.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssListOrdered,
  ...cssPara,
]);

export default function Example() {
  return createElement(
    ListOrdered,
    null,
    createElement("li", null, "Lorum ipsum."),
    createElement(
      "li",
      null,
      createElement(Para, null, "Lorum ipsum."),
      createElement(
        ListOrdered,
        null,
        createElement("li", null, "Lorum ipsum."),
        createElement(
          "li",
          null,
          createElement(Para, null, "Lorum ipsum."),
          createElement(
            ListOrdered,
            null,
            createElement("li", null, "Lorum ipsum."),
            createElement("li", null, "Lorum ipsum."),
          ),
        ),
      ),
    ),
  );
}
