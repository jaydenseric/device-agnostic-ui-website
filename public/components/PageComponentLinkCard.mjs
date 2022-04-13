// @ts-check

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/LinkCard/1.mjs";
import Example2, { css as cssExample2 } from "./examples/LinkCard/2.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssLinkText,
  ...cssExample1,
  ...cssExample2,
  ...cssCodeExample,
  ...cssPageComponent,
]);

/** React component for the `LinkCard` component page. */
export default function PageComponentLinkCard() {
  return h(PageComponent, {
    componentName: "LinkCard",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for a link to wrap a small card of content.",
    ),
    examples: h(
      Fragment,
      null,
      h(CodeExample, {
        caption: "A picture link card, inactive.",
        url: "/components/examples/LinkCard/1.mjs",
        Example: Example1,
        screenshot: true,
      }),
      h(CodeExample, {
        caption: "A picture link card, active.",
        url: "/components/examples/LinkCard/2.mjs",
        Example: Example2,
      }),
    ),
  });
}
