// @ts-check

import Code, { css as cssCode } from "device-agnostic-ui/Code.mjs";
import Pre, { css as cssPre } from "device-agnostic-ui/Pre.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssCode,
  ...cssPre,
]);

export default function Example() {
  return createElement(
    Pre,
    null,
    createElement(
      Code,
      null,
      `<section>
  <h1>Header</h1>
</section>`,
    ),
  );
}
