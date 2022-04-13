// @ts-check

import LinkNav, { css as cssLinkNav } from "device-agnostic-ui/LinkNav.mjs";
import Nav, { css as cssNav } from "device-agnostic-ui/Nav.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssLinkNav,
  ...cssNav,
]);

export default function Example() {
  return createElement(
    Nav,
    null,
    createElement(
      LinkNav,
      { href: "https://github.com/jaydenseric/device-agnostic-ui" },
      "GitHub",
    ),
    createElement(
      LinkNav,
      { href: "https://npm.im/device-agnostic-ui" },
      "npm",
    ),
  );
}
