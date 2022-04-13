// @ts-check

import Table, { css as cssTable } from "device-agnostic-ui/Table.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssTable,
]);

export default function Example() {
  return createElement(
    Table,
    null,
    createElement(
      "thead",
      null,
      createElement(
        "tr",
        null,
        createElement("th", { scope: "col" }, "Country"),
        createElement("th", { scope: "col" }, "Capital"),
      ),
    ),
    createElement(
      "tbody",
      null,
      createElement(
        "tr",
        null,
        createElement("td", null, "Australia"),
        createElement("td", null, "Canberra"),
      ),
      createElement(
        "tr",
        null,
        createElement("td", null, "New Zealand"),
        createElement("td", null, "Wellington"),
      ),
    ),
  );
}
