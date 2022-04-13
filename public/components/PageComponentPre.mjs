// @ts-check

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/Pre/1.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssLinkText,
  ...cssExample1,
  ...cssCodeExample,
  ...cssPageComponent,
]);

/** React component for the `Pre` component page. */
export default function PageComponentPre() {
  return h(PageComponent, {
    componentName: "Pre",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for preformatted text.",
    ),
    examples: h(CodeExample, {
      caption: "Displaying HTML code.",
      url: "/components/examples/Pre/1.mjs",
      Example: Example1,
      screenshot: true,
    }),
  });
}
