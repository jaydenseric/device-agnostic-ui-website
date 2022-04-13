// @ts-check

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssLinkText,
]);

export default function Example() {
  return createElement(
    LinkText,
    { href: "https://ruck.tech", active: true },
    "Ruck",
  );
}
