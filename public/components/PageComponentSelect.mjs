// @ts-check

import Code, { css as cssCode } from "device-agnostic-ui/Code.mjs";
import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/Select/1.mjs";
import Example2, { css as cssExample2 } from "./examples/Select/2.mjs";
import Example3, { css as cssExample3 } from "./examples/Select/3.mjs";
import Example4, { css as cssExample4 } from "./examples/Select/4.mjs";
import Example5, { css as cssExample5 } from "./examples/Select/5.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import LinkTextRoute, { css as cssLinkTextRoute } from "./LinkTextRoute.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssCode,
  ...cssLinkText,
  ...cssExample1,
  ...cssExample2,
  ...cssExample3,
  ...cssExample4,
  ...cssExample5,
  ...cssCodeExample,
  ...cssLinkTextRoute,
  ...cssPageComponent,
]);

/** React component for the `Select` component page. */
export default function PageComponentSelect() {
  return h(PageComponent, {
    componentName: "Select",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for an input that provides a selection of options.",
    ),
    examples: h(
      Fragment,
      null,
      h(CodeExample, {
        caption: "A basic selection.",
        url: "/components/examples/Select/1.mjs",
        Example: Example1,
        screenshot: true,
      }),
      h(CodeExample, {
        caption: "A required selection, with a placeholder option.",
        url: "/components/examples/Select/2.mjs",
        Example: Example2,
      }),
      h(CodeExample, {
        caption: "A selection with a default value.",
        url: "/components/examples/Select/3.mjs",
        Example: Example3,
      }),
      h(CodeExample, {
        caption: h(
          Fragment,
          null,
          "A selection allowing multiple options to be selected. ",
          h("strong", null, "Note:"),
          " Due to cross browser rendering and usability issues it’s recommended to use a ",
          h(
            LinkTextRoute,
            { href: "/components/Toggle" },
            h(Code, null, "Toggle"),
          ),
          " group instead.",
        ),
        url: "/components/examples/Select/4.mjs",
        Example: Example4,
      }),
      h(CodeExample, {
        caption:
          "A selection with a size matching the count of options + groups.",
        url: "/components/examples/Select/5.mjs",
        Example: Example5,
      }),
    ),
  });
}
