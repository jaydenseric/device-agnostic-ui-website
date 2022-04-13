// @ts-check

import LinkNav, { css as cssLinkNav } from "device-agnostic-ui/LinkNav.mjs";
import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import Nav, { css as cssNav } from "device-agnostic-ui/Nav.mjs";
import { createElement as h, Fragment } from "react";
import useCss from "ruck/useCss.mjs";
import useHead from "ruck/useHead.mjs";
import useRoute from "ruck/useRoute.mjs";

import useOpenGraphImage from "../hooks/useOpenGraphImage.mjs";
import DeviceAgnosticUILogo from "./DeviceAgnosticUILogo.mjs";
import LinkNavRoute, { css as cssLinkNavRoute } from "./LinkNavRoute.mjs";
import NavigationIndicator, {
  css as cssNavigationIndicator,
} from "./NavigationIndicator.mjs";

const css = new Set([
  "https://unpkg.com/device-agnostic-ui@10.1.0/theme.css",
  "https://unpkg.com/device-agnostic-ui@10.1.0/global.css",
  ...cssLinkNav,
  ...cssLinkNavRoute,
  ...cssLinkText,
  ...cssNav,
  ...cssNavigationIndicator,
  "/components/App.css",
]);

const metaFragment = h(
  Fragment,
  null,
  h("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
  }),
  h("meta", { name: "color-scheme", content: "light dark" }),
  h("meta", { name: "theme-color", content: "white" }),
  h("meta", { name: "twitter:card", content: "summary" }),
  h("meta", { name: "twitter:site", content: "@jaydenseric" }),
  h("meta", { name: "twitter:creator", content: "@jaydenseric" }),
  h("link", { rel: "icon", href: "/favicon.ico" }),
  h("link", {
    rel: "icon",
    type: "image/svg+xml",
    sizes: "any",
    href: "/favicon.svg",
  }),
  h("link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }),
  h("link", { rel: "manifest", href: "/manifest.webmanifest" }),
);

/**
 * React component for the Ruck app.
 * @type {import("ruck/serve.mjs").AppComponent}
 */
export default function App() {
  const route = useRoute();

  useHead("1-1-meta", metaFragment);
  useOpenGraphImage("/social-preview.png");

  for (const href of css) useCss(href);

  return h(
    Fragment,
    null,
    h(
      Nav,
      null,
      h(LinkNavRoute, { href: "/" }, h(DeviceAgnosticUILogo, { width: 3.5 })),
      h(LinkNavRoute, { href: "/components" }, "Components"),
      h(
        LinkNav,
        { href: "https://github.com/jaydenseric/device-agnostic-ui" },
        "GitHub",
      ),
      h(
        LinkNav,
        { href: "https://npm.im/device-agnostic-ui" },
        "npm",
      ),
    ),
    route.content,
    h(
      "footer",
      { className: "App__footer" },
      h(
        "small",
        null,
        "© ",
        h(LinkText, { href: "https://jaydenseric.com" }, "Jayden Seric"),
      ),
    ),
    h(NavigationIndicator),
  );
}
