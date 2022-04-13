// @ts-check

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/Icon/1.mjs";
import Example2, { css as cssExample2 } from "./examples/Icon/2.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssLinkText,
  ...cssExample1,
  ...cssExample2,
  ...cssCodeExample,
  ...cssPageComponent,
]);

/** React component for the `Icon` component page. */
export default function PageComponentIcon() {
  return h(PageComponent, {
    componentName: "Icon",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for an inline SVG icon.",
    ),
    examples: h(
      Fragment,
      null,
      h(CodeExample, {
        caption: "An icon using fills.",
        url: "/components/examples/Icon/1.mjs",
        Example: Example1,
      }),
      h(CodeExample, {
        caption: "An icon using strokes.",
        url: "/components/examples/Icon/2.mjs",
        Example: Example2,
        screenshot: true,
      }),
    ),
  });
}
