// @ts-check

import ListUnordered, {
  css as cssListUnordered,
} from "device-agnostic-ui/ListUnordered.mjs";
import Para, { css as cssPara } from "device-agnostic-ui/Para.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssListUnordered,
  ...cssPara,
]);

export default function Example() {
  return createElement(
    ListUnordered,
    null,
    createElement("li", null, "Lorum ipsum."),
    createElement(
      "li",
      null,
      createElement(Para, null, "Lorum ipsum."),
      createElement(
        ListUnordered,
        null,
        createElement("li", null, "Lorum ipsum."),
        createElement(
          "li",
          null,
          createElement(Para, null, "Lorum ipsum."),
          createElement(
            ListUnordered,
            null,
            createElement("li", null, "Lorum ipsum."),
            createElement("li", null, "Lorum ipsum."),
          ),
        ),
      ),
    ),
  );
}
