// @ts-check

import Margin, { css as cssMargin } from "device-agnostic-ui/Margin.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssMargin,
]);

export default function Example() {
  return createElement(
    "div",
    { style: { border: "1px dashed" } },
    createElement(
      Margin,
      null,
      createElement("div", {
        style: {
          width: "2rem",
          height: "2rem",
          backgroundColor: "currentColor",
        },
      }),
    ),
  );
}
