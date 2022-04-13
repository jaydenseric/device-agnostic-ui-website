// @ts-check

import Heading, { css as cssHeading } from "device-agnostic-ui/Heading.mjs";
import Scroll, { css as cssScroll } from "device-agnostic-ui/Scroll.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssHeading,
  ...cssScroll,
]);

export default function Example() {
  return createElement(
    Scroll,
    { style: { maxWidth: "15rem" } },
    createElement("article", null, createElement(Heading, null, "First")),
    createElement("article", null, createElement(Heading, null, "Second")),
    createElement("article", null, createElement(Heading, null, "Third")),
    createElement("article", null, createElement(Heading, null, "Fourth")),
  );
}
