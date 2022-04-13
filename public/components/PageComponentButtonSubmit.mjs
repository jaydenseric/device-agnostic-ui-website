// @ts-check

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/ButtonSubmit/1.mjs";
import Example2, { css as cssExample2 } from "./examples/ButtonSubmit/2.mjs";
import Example3, { css as cssExample3 } from "./examples/ButtonSubmit/3.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssLinkText,
  ...cssExample1,
  ...cssExample2,
  ...cssExample3,
  ...cssCodeExample,
  ...cssPageComponent,
]);

/** React component for the `ButtonSubmit` component page. */
export default function PageComponentButtonSubmit() {
  return h(PageComponent, {
    componentName: "ButtonSubmit",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for a form submit button that displays loading and success state.",
    ),
    examples: h(
      Fragment,
      null,
      h(CodeExample, {
        caption: "A submit button.",
        url: "/components/examples/ButtonSubmit/1.mjs",
        Example: Example1,
      }),
      h(CodeExample, {
        caption: "A submit button with loading state.",
        url: "/components/examples/ButtonSubmit/2.mjs",
        Example: Example2,
      }),
      h(CodeExample, {
        caption: "A submit button with success state.",
        url: "/components/examples/ButtonSubmit/3.mjs",
        Example: Example3,
        screenshot: true,
      }),
    ),
  });
}
