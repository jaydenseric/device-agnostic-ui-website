// @ts-check

import Code, { css as cssCode } from "device-agnostic-ui/Code.mjs";
import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import Example1, { css as cssExample1 } from "./examples/Picture/1.mjs";
import Example2, { css as cssExample2 } from "./examples/Picture/2.mjs";
import Example3, { css as cssExample3 } from "./examples/Picture/3.mjs";
import Example4, { css as cssExample4 } from "./examples/Picture/4.mjs";
import CodeExample, { css as cssCodeExample } from "./CodeExample.mjs";
import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssCode,
  ...cssLinkText,
  ...cssExample1,
  ...cssExample2,
  ...cssExample3,
  ...cssExample4,
  ...cssCodeExample,
  ...cssPageComponent,
]);

/** React component for the `Picture` component page. */
export default function PageComponentPicture() {
  return h(PageComponent, {
    componentName: "Picture",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for a picture with a responsive width and proportionate height, even while loading. It’s displayed as a block and tends to take up 100% of the available space unless an inline style ",
      h(Code, null, "width"),
      " is set.",
    ),
    examples: h(
      Fragment,
      null,
      h(CodeExample, {
        caption: "A picture with an SVG source.",
        url: "/components/examples/Picture/1.mjs",
        Example: Example1,
        screenshot: true,
      }),
      h(CodeExample, {
        caption: "A picture with WebP and PNG sources.",
        url: "/components/examples/Picture/2.mjs",
        Example: Example2,
      }),
      h(CodeExample, {
        caption:
          "A picture with separate light and dark mode WebP and PNG sources.",
        url: "/components/examples/Picture/3.mjs",
        Example: Example3,
      }),
      h(CodeExample, {
        caption: "A circular picture.",
        url: "/components/examples/Picture/4.mjs",
        Example: Example4,
      }),
    ),
  });
}
