// @ts-check

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/IconTick/1.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssLinkText,
  ...cssExample1,
  ...cssCodeExample,
  ...cssPageComponent,
]);

/** React component for the `IconTick` component page. */
export default function PageComponentIconTick() {
  return h(PageComponent, {
    componentName: "IconTick",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for an inline SVG tick icon.",
    ),
    examples: h(CodeExample, {
      caption: "A tick icon.",
      url: "/components/examples/IconTick/1.mjs",
      Example: Example1,
      screenshot: true,
    }),
  });
}
