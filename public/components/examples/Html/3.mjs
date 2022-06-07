// @ts-check

import Html, { css as cssHtml } from "device-agnostic-ui/Html.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssHtml,
]);

export default function Example() {
  return createElement(Html, {
    style: /** @type {import("react").CSSProperties} */ ({
      "--daui-h1-font-size": "150%",
    }),
  }, createElement("h1", null, "Heading 1"));
}
