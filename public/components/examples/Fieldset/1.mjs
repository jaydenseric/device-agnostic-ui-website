// @ts-check

import Fieldset, { css as cssFieldset } from "device-agnostic-ui/Fieldset.mjs";
import Toggle, { css as cssToggle } from "device-agnostic-ui/Toggle.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssFieldset,
  ...cssToggle,
]);

export default function Example() {
  return createElement(
    Fieldset,
    { legend: "Options" },
    createElement(Toggle, {
      inputProps: {
        type: "radio",
        name: "options",
        value: "a",
        defaultChecked: true,
      },
    }, "Label A"),
    createElement(Toggle, {
      inputProps: {
        type: "radio",
        name: "options",
        value: "b",
      },
    }, "Label B"),
  );
}
