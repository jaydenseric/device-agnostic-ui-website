// @ts-check

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/ListUnordered/1.mjs";
import Example2, { css as cssExample2 } from "./examples/ListUnordered/2.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssLinkText,
  ...cssExample1,
  ...cssExample2,
  ...cssCodeExample,
  ...cssPageComponent,
]);

/** React component for the `ListUnordered` component page. */
export default function PageComponentListUnordered() {
  return h(PageComponent, {
    componentName: "ListUnordered",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for an ordered list.",
    ),
    examples: h(
      Fragment,
      null,
      h(CodeExample, {
        caption: "A bullet list.",
        url: "/components/examples/ListUnordered/1.mjs",
        Example: Example1,
        screenshot: true,
      }),
      h(CodeExample, {
        caption: "Nested paragraphs and bullet lists.",
        url: "/components/examples/ListUnordered/2.mjs",
        Example: Example2,
      }),
    ),
  });
}
