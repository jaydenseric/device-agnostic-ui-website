// @ts-check

import Select, { css as cssSelect } from "device-agnostic-ui/Select.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssSelect,
]);

export default function Example() {
  return createElement(
    Select,
    { value: "B" },
    createElement("option", { value: "A" }, "Option A"),
    createElement("option", { value: "B" }, "Option B"),
  );
}
