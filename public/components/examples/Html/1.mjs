// @ts-check

import Html, { css as cssHtml } from "device-agnostic-ui/Html.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssHtml,
]);

export default function Example() {
  return createElement(
    Html,
    null,
    createElement("h1", null, "Heading 1"),
    createElement("h2", null, "Heading 2"),
    createElement("h3", null, "Heading 3"),
    createElement("h4", null, "Heading 4"),
    createElement("h5", null, "Heading 5"),
    createElement("h6", null, "Heading 6"),
    createElement(
      "p",
      null,
      "Paragraph containing ",
      createElement("code", null, "code"),
      " and a ",
      createElement("a", { href: "https://deviceagnosticui.com" }, "link"),
      ".",
    ),
    createElement("blockquote", null, "Blockquote containing text."),
    createElement(
      "blockquote",
      null,
      createElement("p", null, "Blockquote containing paragraphs."),
      createElement("p", null, "Blockquote containing paragraphs."),
    ),
    createElement(
      "ul",
      null,
      createElement("li", null, "Unordered list item"),
      createElement("li", null, "Unordered list item"),
    ),
    createElement(
      "ol",
      null,
      createElement("li", null, "Ordered list item"),
      createElement("li", null, "Ordered list item"),
    ),
    createElement(
      "pre",
      null,
      createElement("code", null, "Preformatted code"),
    ),
    createElement(
      "table",
      null,
      createElement(
        "thead",
        null,
        createElement(
          "tr",
          null,
          createElement("th", { scope: "col" }, "Table header"),
          createElement("th", { scope: "col" }, "Table header"),
        ),
      ),
      createElement(
        "tbody",
        null,
        createElement(
          "tr",
          null,
          createElement("td", null, "Table cell"),
          createElement("td", null, "Table cell"),
        ),
        createElement(
          "tr",
          null,
          createElement("td", null, "Table cell"),
          createElement("td", null, "Table cell"),
        ),
      ),
    ),
    createElement(
      "p",
      null,
      createElement("img", {
        src: "/example-picture/example.svg",
        width: "180",
        alt: "Alternate text.",
      }),
    ),
  );
}
