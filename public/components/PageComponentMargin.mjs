// @ts-check

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/Margin/1.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssLinkText,
  ...cssExample1,
  ...cssCodeExample,
  ...cssPageComponent,
]);

/** React component for the `Margin` component page. */
export default function PageComponentMargin() {
  return h(PageComponent, {
    componentName: "Margin",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for surrounding content with a margin.",
    ),
    examples: h(CodeExample, {
      caption:
        "A bordered box containing a margin surrounding content represented by a square.",
      url: "/components/examples/Margin/1.mjs",
      Example: Example1,
      screenshot: true,
    }),
  });
}
