// @ts-check

import { createElement as h, Fragment } from "react";
import Code, { css as cssCode } from "device-agnostic-ui/Code.mjs";
import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";

import Example1, { css as cssExample1 } from "./examples/LinkNav/1.mjs";
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

/** React component for the `LinkNav` component page. */
export default function PageComponentLinkNav() {
  return h(PageComponent, {
    componentName: "LinkNav",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for a navigation link within the ",
      h(LinkTextRoute, { href: "/components/Nav" }, h(Code, null, "Nav")),
      " component.",
    ),
    examples: h(CodeExample, {
      caption: h(
        Fragment,
        null,
        h(LinkText, { href: "https://ruck.tech" }, "Ruck"),
        " app route navigation links.",
      ),
      url: "/components/examples/LinkNav/1.mjs",
      Example: Example1,
      screenshot: true,
    }),
  });
}
