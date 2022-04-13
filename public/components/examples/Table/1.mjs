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
      "tbody",
      null,
      createElement(
        "tr",
        null,
        createElement("th", { scope: "row" }, "Country"),
        createElement("td", null, "Australia"),
      ),
      createElement(
        "tr",
        null,
        createElement("th", { scope: "row" }, "Capital"),
        createElement("td", null, "Canberra"),
      ),
    ),
  );
}
