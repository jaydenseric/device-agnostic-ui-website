// @ts-check

import Select, { css as cssSelect } from "device-agnostic-ui/Select.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssSelect,
]);

export default function Example() {
  return createElement(
    Select,
    { multiple: true, size: 2 },
    createElement("option", null, "Option A"),
    createElement("option", null, "Option B"),
  );
}
