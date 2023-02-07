// @ts-check

import Code, { css as cssCode } from "device-agnostic-ui/Code.mjs";
import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/Scroll/1.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssLinkText,
  ...cssCode,
  ...cssExample1,
  ...cssCodeExample,
  ...cssPageComponent,
]);

/** React component for the `Scroll` component page. */
export default function PageComponentScroll() {
  return h(PageComponent, {
    componentName: "Scroll",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for displaying children in a horizontally spaced and scrollable grid.",
    ),
    examples: h(CodeExample, {
      caption: h(
        Fragment,
        null,
        "Scrollable articles. The ",
        h(Code, null, "maxWidth"),
        " style is only to demo scrolling; limiting the width isn’t recommended.",
      ),
      url: "/components/examples/Scroll/1.mjs",
      Example: Example1,
      screenshot: true,
    }),
  });
}
