// @ts-check

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/Button/1.mjs";
import Example2, { css as cssExample2 } from "./examples/Button/2.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssLinkText,
  ...cssExample1,
  ...cssExample2,
  ...cssCodeExample,
  ...cssPageComponent,
]);

/** React component for the `Button` component page. */
export default function PageComponentButton() {
  return h(PageComponent, {
    componentName: "Button",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for a button for on-page interactions, typically in forms.",
    ),
    examples: h(
      Fragment,
      null,
      h(CodeExample, {
        caption: "An enabled button.",
        url: "/components/examples/Button/1.mjs",
        Example: Example1,
        screenshot: true,
      }),
      h(CodeExample, {
        caption: "A disabled button.",
        url: "/components/examples/Button/2.mjs",
        Example: Example2,
      }),
    ),
  });
}
