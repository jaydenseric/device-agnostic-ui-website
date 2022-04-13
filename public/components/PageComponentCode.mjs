// @ts-check

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/Code/1.mjs";
import Example2, { css as cssExample2 } from "./examples/Code/2.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssLinkText,
  ...cssExample1,
  ...cssExample2,
  ...cssCodeExample,
  ...cssPageComponent,
]);

/** React component for the `Code` component page. */
export default function PageComponentCode() {
  return h(PageComponent, {
    componentName: "Code",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for displaying inline code.",
    ),
    examples: h(
      Fragment,
      null,
      h(CodeExample, {
        caption: "JavaScript code.",
        url: "/components/examples/Code/1.mjs",
        Example: Example1,
        screenshot: true,
      }),
      h(CodeExample, {
        caption: "JavaScript code in a link.",
        url: "/components/examples/Code/2.mjs",
        Example: Example2,
      }),
    ),
  });
}
