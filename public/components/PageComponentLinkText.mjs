// @ts-check

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/LinkText/1.mjs";
import Example2, { css as cssExample2 } from "./examples/LinkText/2.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssLinkText,
  ...cssExample1,
  ...cssExample2,
  ...cssCodeExample,
  ...cssPageComponent,
]);

/** React component for the `LinkText` component page. */
export default function PageComponentLinkText() {
  return h(PageComponent, {
    componentName: "LinkText",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for an inline text link.",
    ),
    examples: h(
      Fragment,
      null,
      h(CodeExample, {
        caption: "A text link, inactive.",
        url: "/components/examples/LinkText/1.mjs",
        Example: Example1,
        screenshot: true,
      }),
      h(CodeExample, {
        caption: "A text link, active.",
        url: "/components/examples/LinkText/2.mjs",
        Example: Example2,
      }),
    ),
  });
}
