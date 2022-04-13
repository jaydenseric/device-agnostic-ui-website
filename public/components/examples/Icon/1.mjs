// @ts-check

import Icon, { css as cssIcon } from "device-agnostic-ui/Icon.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssIcon,
]);

export default function Example() {
  return createElement(
    Icon,
    { size: "2em", title: "Circle filled" },
    createElement("circle", {
      cx: "50%",
      cy: "50%",
      r: "50%",
      stroke: "none",
    }),
  );
}
