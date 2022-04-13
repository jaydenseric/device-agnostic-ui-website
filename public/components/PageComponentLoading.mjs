// @ts-check

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/Loading/1.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssLinkText,
  ...cssExample1,
  ...cssCodeExample,
  ...cssPageComponent,
]);

/** React component for the `Loading` component page. */
export default function PageComponentLoading() {
  return h(PageComponent, {
    componentName: "Loading",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for an animated icon indicating loading or processing.",
    ),
    examples: h(CodeExample, {
      caption: "A loading indicator.",
      url: "/components/examples/Loading/1.mjs",
      Example: Example1,
      screenshot: true,
    }),
  });
}
