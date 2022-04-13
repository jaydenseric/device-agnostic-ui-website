// @ts-check

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/Toggle/1.mjs";
import Example2, { css as cssExample2 } from "./examples/Toggle/2.mjs";
import Example3, { css as cssExample3 } from "./examples/Toggle/3.mjs";
import Example4, { css as cssExample4 } from "./examples/Toggle/4.mjs";
import Example5, { css as cssExample5 } from "./examples/Toggle/5.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssLinkText,
  ...cssExample1,
  ...cssExample2,
  ...cssExample3,
  ...cssExample4,
  ...cssExample5,
  ...cssCodeExample,
  ...cssPageComponent,
]);

/** React component for the `Toggle` component page. */
export default function PageComponentToggle() {
  return h(PageComponent, {
    componentName: "Toggle",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for a checkbox or radio input.",
    ),
    examples: h(
      Fragment,
      null,
      h(CodeExample, {
        caption: "A checkbox input.",
        url: "/components/examples/Toggle/1.mjs",
        Example: Example1,
      }),
      h(CodeExample, {
        caption: "A required checkbox input.",
        url: "/components/examples/Toggle/2.mjs",
        Example: Example2,
      }),
      h(CodeExample, {
        caption: "A checkbox input with a custom validation message.",
        url: "/components/examples/Toggle/3.mjs",
        Example: Example3,
      }),
      h(CodeExample, {
        caption: "A radio input group.",
        url: "/components/examples/Toggle/4.mjs",
        Example: Example4,
        screenshot: true,
      }),
      h(CodeExample, {
        caption: "Using an input element ref.",
        url: "/components/examples/Toggle/5.mjs",
        Example: Example5,
      }),
    ),
  });
}
