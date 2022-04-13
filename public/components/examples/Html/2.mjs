// @ts-check

import Html, { css as cssHtml } from "device-agnostic-ui/Html.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssHtml,
]);

export default function Example() {
  return createElement(Html, {
    dangerouslySetInnerHTML: {
      __html: "<h1>Heading 1</h1>",
    },
  });
}
