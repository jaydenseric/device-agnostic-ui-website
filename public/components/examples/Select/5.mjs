// @ts-check

import Select, { css as cssSelect } from "device-agnostic-ui/Select.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssSelect,
]);

export default function Example() {
  return createElement(
    Select,
    { size: 6 },
    createElement(
      "optgroup",
      { label: "Group 1" },
      createElement("option", null, "Option A"),
      createElement("option", null, "Option B"),
    ),
    createElement(
      "optgroup",
      { label: "Group 2" },
      createElement("option", null, "Option C"),
      createElement("option", null, "Option D"),
    ),
  );
}
