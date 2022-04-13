// @ts-check

import Heading, { css as cssHeading } from "device-agnostic-ui/Heading.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssHeading,
]);

export default function Example() {
  return createElement(
    Heading,
    { level: 2, size: 2, id: "lorum-ipsum" },
    "Lorum ipsum",
  );
}
