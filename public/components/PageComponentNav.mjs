// @ts-check

import Code, { css as cssCode } from "device-agnostic-ui/Code.mjs";
import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/Nav/1.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import LinkTextRoute, { css as cssLinkTextRoute } from "./LinkTextRoute.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssCode,
  ...cssLinkText,
  ...cssExample1,
  ...cssCodeExample,
  ...cssLinkTextRoute,
  ...cssPageComponent,
]);

/** React component for the `Nav` component page. */
export default function PageComponentNav() {
  return h(PageComponent, {
    componentName: "Nav",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for displaying ",
      h(
        LinkTextRoute,
        { href: "/components/LinkNav" },
        h(Code, null, "LinkNav"),
      ),
      " navigation links in a horizontal, spaced, and scrollable grid.",
    ),
    examples: h(CodeExample, {
      caption: "Navigation links.",
      url: "/components/examples/Nav/1.mjs",
      Example: Example1,
      screenshot: true,
    }),
  });
}
