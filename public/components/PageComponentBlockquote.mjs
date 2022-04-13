// @ts-check

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/Blockquote/1.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssLinkText,
  ...cssExample1,
  ...cssCodeExample,
  ...cssPageComponent,
]);

/** React component for the `Blockquote` component page. */
export default function PageComponentBlockquote() {
  return h(PageComponent, {
    componentName: "Blockquote",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for displaying content quoted from elsewhere.",
    ),
    examples: h(CodeExample, {
      caption: "A simple text quote.",
      url: "/components/examples/Blockquote/1.mjs",
      Example: Example1,
      screenshot: true,
    }),
  });
}
