// @ts-check

import Heading, { css as cssHeading } from "device-agnostic-ui/Heading.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssHeading,
]);

export default function Example() {
  return createElement(
    Heading,
    { style: { maxWidth: "4em" } },
    "HTMLTableSectionElement",
  );
}
