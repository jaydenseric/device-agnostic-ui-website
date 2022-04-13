// @ts-check

import Code, { css as cssCode } from "device-agnostic-ui/Code.mjs";
import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssCode,
  ...cssLinkText,
]);

export default function Example() {
  return createElement(LinkText, {
    href: "https://developer.mozilla.org/en-US/docs/Web/API/Window",
  }, createElement(Code, null, "window"));
}
