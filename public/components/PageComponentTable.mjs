// @ts-check

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/Table/1.mjs";
import Example2, { css as cssExample2 } from "./examples/Table/2.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssLinkText,
  ...cssExample1,
  ...cssExample2,
  ...cssCodeExample,
  ...cssPageComponent,
]);

/** React component for the `Table` component page. */
export default function PageComponentTable() {
  return h(PageComponent, {
    componentName: "Table",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for tabulated data.",
    ),
    examples: h(
      Fragment,
      null,
      h(CodeExample, {
        caption: "A table with row headers.",
        url: "/components/examples/Table/1.mjs",
        Example: Example1,
      }),
      h(CodeExample, {
        caption: "A table with column headers.",
        url: "/components/examples/Table/2.mjs",
        Example: Example2,
        screenshot: true,
      }),
    ),
  });
}
