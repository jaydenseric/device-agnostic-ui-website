// @ts-check

/** @import { ReactNode } from "react" */

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h } from "react";
import useOnClickRouteLink from "ruck/useOnClickRouteLink.mjs";
import useRoute from "ruck/useRoute.mjs";

export const css = new Set([
  ...cssLinkText,
]);

/**
 * React component for a Ruck app route {@link LinkText navigation link}.
 * @param {object} props Props.
 * @param {string} props.href Link HREF.
 * @param {ReactNode} [props.children] Children.
 */
export default function LinkTextRoute({ href, children }) {
  const route = useRoute();
  const onClick = useOnClickRouteLink();

  return h(
    LinkText,
    {
      href,
      onClick,
      active: href === route.url.pathname,
    },
    children,
  );
}
