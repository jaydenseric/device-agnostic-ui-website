// @ts-check

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/Html/1.mjs";
import Example2, { css as cssExample2 } from "./examples/Html/2.mjs";
import Example3, { css as cssExample3 } from "./examples/Html/3.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssLinkText,
  ...cssExample1,
  ...cssExample2,
  ...cssExample3,
  ...cssCodeExample,
  ...cssPageComponent,
]);

/** React component for the `Html` component page. */
export default function PageComponentHtml() {
  return h(PageComponent, {
    componentName: "Html",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for rendering simple HTML with styles, typically derived from Markdown.",
    ),
    examples: h(
      Fragment,
      null,
      h(CodeExample, {
        caption: "Rending HTML React elements.",
        url: "/components/examples/Html/1.mjs",
        Example: Example1,
        screenshot: true,
      }),
      h(CodeExample, {
        caption: "Rending a HTML string.",
        url: "/components/examples/Html/2.mjs",
        Example: Example2,
      }),
      h(CodeExample, {
        caption: "Locally overridden heading font size.",
        url: "/components/examples/Html/3.mjs",
        Example: Example3,
      }),
    ),
  });
}
