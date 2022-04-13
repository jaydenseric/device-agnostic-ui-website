// @ts-check

import LinkNav, { css as cssLinkNav } from "device-agnostic-ui/LinkNav.mjs";
import Nav, { css as cssNav } from "device-agnostic-ui/Nav.mjs";
import { createElement } from "react";
import useOnClickRouteLink from "ruck/useOnClickRouteLink.mjs";
import useRoute from "ruck/useRoute.mjs";

export const css = new Set([
  ...cssLinkNav,
  ...cssNav,
]);

/**
 * React component for a Ruck app route {@link LinkNav navigation link}.
 * @param {object} props Props.
 * @param {string} props.href Link HREF.
 * @param {import("react").ReactNode} [props.children] Children.
 */
function LinkNavRoute({ href, children }) {
  const route = useRoute();
  const onClick = useOnClickRouteLink();

  return createElement(
    LinkNav,
    {
      href,
      onClick,
      active: href === route.url.pathname,
    },
    children,
  );
}

export default function Example() {
  return createElement(
    Nav,
    null,
    createElement(LinkNavRoute, { href: "/components/LinkNav" }, "LinkNav"),
    createElement(LinkNavRoute, { href: "/components/Nav" }, "Nav"),
  );
}
