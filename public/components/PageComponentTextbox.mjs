// @ts-check

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/Textbox/1.mjs";
import Example2, { css as cssExample2 } from "./examples/Textbox/2.mjs";
import Example3, { css as cssExample3 } from "./examples/Textbox/3.mjs";
import Example4, { css as cssExample4 } from "./examples/Textbox/4.mjs";
import Example5, { css as cssExample5 } from "./examples/Textbox/5.mjs";
import Example6, { css as cssExample6 } from "./examples/Textbox/6.mjs";
import Example7, { css as cssExample7 } from "./examples/Textbox/7.mjs";
import Example8, { css as cssExample8 } from "./examples/Textbox/8.mjs";
import Example9, { css as cssExample9 } from "./examples/Textbox/9.mjs";
import Example10, { css as cssExample10 } from "./examples/Textbox/10.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssLinkText,
  ...cssExample1,
  ...cssExample2,
  ...cssExample3,
  ...cssExample4,
  ...cssExample5,
  ...cssExample6,
  ...cssExample7,
  ...cssExample8,
  ...cssExample9,
  ...cssExample10,
  ...cssCodeExample,
  ...cssPageComponent,
]);

/** React component for the `Textbox` component page. */
export default function PageComponentTextbox() {
  return h(PageComponent, {
    componentName: "Textbox",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for an input or textarea.",
    ),
    examples: h(
      Fragment,
      null,
      h(CodeExample, {
        caption: "A text input with a placeholder.",
        url: "/components/examples/Textbox/1.mjs",
        Example: Example1,
        screenshot: true,
      }),
      h(CodeExample, {
        caption: "A text input with a default value.",
        url: "/components/examples/Textbox/2.mjs",
        Example: Example2,
      }),
      h(CodeExample, {
        caption: "A required text input.",
        url: "/components/examples/Textbox/3.mjs",
        Example: Example3,
      }),
      h(CodeExample, {
        caption: "A text input with a custom validation message.",
        url: "/components/examples/Textbox/4.mjs",
        Example: Example4,
      }),
      h(CodeExample, {
        caption: "A textarea.",
        url: "/components/examples/Textbox/5.mjs",
        Example: Example5,
      }),
      h(CodeExample, {
        caption: "An email input.",
        url: "/components/examples/Textbox/6.mjs",
        Example: Example6,
      }),
      h(CodeExample, {
        caption: "A password input.",
        url: "/components/examples/Textbox/7.mjs",
        Example: Example7,
      }),
      h(CodeExample, {
        caption: "A telephone number input.",
        url: "/components/examples/Textbox/8.mjs",
        Example: Example8,
      }),
      h(CodeExample, {
        caption: "A date input.",
        url: "/components/examples/Textbox/9.mjs",
        Example: Example9,
      }),
      h(CodeExample, {
        caption: "A search input.",
        url: "/components/examples/Textbox/10.mjs",
        Example: Example10,
      }),
    ),
  });
}
