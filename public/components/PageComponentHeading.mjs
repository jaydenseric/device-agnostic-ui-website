// @ts-check

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/Heading/1.mjs";
import Example2, { css as cssExample2 } from "./examples/Heading/2.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssLinkText,
  ...cssExample1,
  ...cssExample2,
  ...cssCodeExample,
  ...cssPageComponent,
]);

/** React component for the `Heading` component page. */
export default function PageComponentHeading() {
  return h(PageComponent, {
    componentName: "Heading",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for a heading.",
    ),
    examples: h(
      Fragment,
      null,
      h(CodeExample, {
        caption: "A primary heading.",
        url: "/components/examples/Heading/1.mjs",
        Example: Example1,
        screenshot: true,
      }),
      h(CodeExample, {
        caption: "A secondary heading with an ID.",
        url: "/components/examples/Heading/2.mjs",
        Example: Example2,
      }),
    ),
  });
}
