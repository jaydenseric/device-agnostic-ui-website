// @ts-check

import Code, { css as cssCode } from "device-agnostic-ui/Code.mjs";
import Heading, { css as cssHeading } from "device-agnostic-ui/Heading.mjs";
import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import ListUnordered, {
  css as cssListUnordered,
} from "device-agnostic-ui/ListUnordered.mjs";
import Para, { css as cssPara } from "device-agnostic-ui/Para.mjs";
import Scroll, { css as cssScroll } from "device-agnostic-ui/Scroll.mjs";
import { createElement as h, Fragment } from "react";

import useDescription from "../hooks/useDescription.mjs";
import useTitle from "../hooks/useTitle.mjs";
import CardEmoji, { css as cssCardEmoji } from "./CardEmoji.mjs";
import Header, { css as cssHeader } from "./Header.mjs";
import IconGitHub, { css as cssIconGitHub } from "./IconGitHub.mjs";
import LinkTextRoute, { css as cssLinkTextRoute } from "./LinkTextRoute.mjs";
import Section, { css as cssSection } from "./Section.mjs";
import TextIcon from "./TextIcon.mjs";

export const css = new Set([
  ...cssCode,
  ...cssHeading,
  ...cssLinkText,
  ...cssListUnordered,
  ...cssPara,
  ...cssScroll,
  ...cssCardEmoji,
  ...cssHeader,
  ...cssIconGitHub,
  ...cssLinkTextRoute,
  ...cssSection,
]);

/** React component for the home page. */
export default function PageHome() {
  useTitle("Home");
  useDescription(
    "Device agnostic styles, components & hooks for Deno/Node.js React & Ruck/Next.js apps.",
  );

  return h(
    Fragment,
    null,
    h(
      Header,
      null,
      h(Heading, { size: 1 }, "Device Agnostic\xA0UI"),
      h(
        Para,
        { style: { fontSize: "1.5rem" } },
        h("strong", null, "Device agnostic"),
        " styles, ",
        h(LinkTextRoute, { href: "/components" }, "components"),
        " & hooks for ",
        h(LinkText, { href: "https://deno.land" }, "Deno"),
        "\xA0/\xA0",
        h(LinkText, { href: "https://nodejs.org" }, "Node.js"),
        " ",
        h(LinkText, { href: "https://reactjs.org" }, "React"),
        " & ",
        h(LinkText, { href: "https://ruck.tech" }, "Ruck"),
        "\xA0/\xA0",
        h(LinkText, { href: "https://nextjs.org" }, "Next.js"),
        " apps. Simple to build, test, & use with 1\xA0design for any:",
      ),
      h(
        ListUnordered,
        { style: { fontSize: "1.25rem" } },
        h(
          "li",
          null,
          h("strong", null, "Viewport"),
          " (size, orientation, resolution)",
        ),
        h(
          "li",
          null,
          h("strong", null, "Color scheme"),
          " (light, dark)",
        ),
        h(
          "li",
          null,
          h("strong", null, "Input method"),
          " (touch, mouse, keyboard)",
        ),
        h(
          "li",
          null,
          h("strong", null, "Network speed"),
          " (3G, 4G, 5G, Wi-Fi)",
        ),
      ),
      h(
        Para,
        null,
        h(
          "strong",
          null,
          h(
            LinkText,
            {
              href:
                "https://github.com/jaydenseric/device-agnostic-ui#installation",
            },
            h(TextIcon, { icon: IconGitHub }, "Installation"),
          ),
        ),
      ),
    ),
    h(
      Section,
      null,
      h(
        Scroll,
        null,
        h(
          CardEmoji,
          {
            emoji: "📦",
            heading: "Tiny bundle size",
          },
          "The minified and gzipped bundle size of individual modules are tested.",
        ),
        h(
          CardEmoji,
          {
            emoji: "📱",
            heading: "Mobile first",
          },
          "Intuitive layouts suitable for any screen size, ",
          h("em", null, "without media queries"),
          ".",
        ),
        h(
          CardEmoji,
          {
            emoji: "⌨️",
            heading: "Keyboard navigable",
          },
          "Interactive components have clearly discernable",
          " ",
          h(LinkText, {
            href: "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus",
          }, h(Code, null, ":focus")),
          " styles.",
        ),
        h(
          CardEmoji,
          {
            emoji: "🚨",
            heading: "Native UI",
          },
          "Lightweight, pretty and accessible ",
          h(LinkText, {
            href:
              "https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation",
          }, "form field validation"),
          " messages.",
        ),
        h(
          CardEmoji,
          {
            emoji: "🌗",
            heading: "Light\xA0/\xA0dark mode",
          },
          "The color scheme ",
          h(LinkText, {
            href:
              "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",
          }, "adapts"),
          " to the operating system’s light or dark mode.",
        ),
        h(CardEmoji, {
          emoji: "🎨",
          heading: "Themes",
        }, "Customize theme CSS variables globally or in components."),
        h(
          CardEmoji,
          {
            emoji: "🌏",
            heading: "Few global styles",
          },
          "No intrusive normalization or resets; just the ",
          h(LinkText, {
            href: "https://developer.mozilla.org/en-US/docs/Web/CSS/:root",
          }, h(Code, null, ":root")),
          " essentials.",
        ),
        h(
          CardEmoji,
          {
            emoji: "🖌",
            heading: "Style raw HTML",
          },
          "Special ",
          // h(LinkComponent, {
          //   component: "Html",
          // }),
          " component to style rendered markdown, e.g. from user comments.",
        ),
        h(CardEmoji, {
          emoji: "🧠",
          heading: "Semantic markup",
        }, "Lean use of semantically appropriate HTML elements."),
        h(
          CardEmoji,
          {
            emoji: "⚛️",
            heading: "Modern React",
          },
          "Elegant use of ",
          h(LinkText, {
            href: "https://reactjs.org",
          }, "React"),
          " ",
          h(LinkText, {
            href: "https://reactjs.org/docs/react-api.html#hooks",
          }, "hooks"),
          ", ",
          h(LinkText, {
            href: "https://reactjs.org/docs/react-api.html#refs",
          }, "refs"),
          " and ",
          h(LinkText, {
            href: "https://reactjs.org/docs/react-api.html#fragments",
          }, "fragments"),
          " makes for a great DX.",
        ),
      ),
    ),
  );
}
