// @ts-check

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/Fieldset/1.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssLinkText,
  ...cssExample1,
  ...cssCodeExample,
  ...cssPageComponent,
]);

/** React component for the `Fieldset` component page. */
export default function PageComponentFieldset() {
  return h(PageComponent, {
    componentName: "Fieldset",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for grouping and labeling related form fields.",
    ),
    examples: h(CodeExample, {
      caption: "Grouped checkboxes.",
      url: "/components/examples/Fieldset/1.mjs",
      Example: Example1,
      screenshot: true,
    }),
  });
}
