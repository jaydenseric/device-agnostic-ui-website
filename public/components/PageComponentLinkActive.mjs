// @ts-check

import Code, { css as cssCode } from "device-agnostic-ui/Code.mjs";
import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment } from "react";

import PageComponent, { css as cssPageComponent } from "./PageComponent.mjs";

export const css = new Set([
  ...cssCode,
  ...cssLinkText,
  ...cssPageComponent,
]);

/** React component for the `LinkActive` component page. */
export default function PageComponentLinkActive() {
  return h(PageComponent, {
    componentName: "LinkActive",
    componentDescription: h(
      Fragment,
      null,
      h(LinkText, { href: "https://reactjs.org" }, "React"),
      " component for a ",
      h(LinkText, { href: "https://nextjs.org/" }, "Next.js"),
      " route link that puts an ",
      h(Code, null, "active"),
      " boolean prop on the child if the link matches the current route path.",
    ),
  });
}
