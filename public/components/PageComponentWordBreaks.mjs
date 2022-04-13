// @ts-check

import Code, { css as cssCode } from "device-agnostic-ui/Code.mjs";
import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/WordBreaks/1.mjs";
import Example2, { css as cssExample2 } from "./examples/WordBreaks/2.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssCode,
  ...cssLinkText,
  ...cssExample1,
  ...cssExample2,
  ...cssCodeExample,
  ...cssPageComponent,
]);

/** React component for the `WordBreaks` component page. */
export default function PageComponentWordBreaks() {
  return h(PageComponent, {
    componentName: "WordBreaks",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for rendering text with aesthetically pleasing word break opportunities.",
    ),
    hasCss: false,
    examples: h(
      Fragment,
      null,
      h(CodeExample, {
        caption: h(
          Fragment,
          null,
          "A long word heading with a narrow width, using ",
          h(Code, null, "WordBreaks"),
          ".",
        ),
        url: "/components/examples/WordBreaks/1.mjs",
        Example: Example1,
        screenshot: true,
      }),
      h(CodeExample, {
        caption: h(
          Fragment,
          null,
          "A long word heading with a narrow width, not using ",
          h(Code, null, "WordBreaks"),
          ".",
        ),
        url: "/components/examples/WordBreaks/2.mjs",
        Example: Example2,
      }),
    ),
  });
}
