// @ts-check

/** @import { ReactNode } from "react" */

import Heading, { css as cssHeading } from "device-agnostic-ui/Heading.mjs";
import LinkCard, { css as cssLinkCard } from "device-agnostic-ui/LinkCard.mjs";
import Para, { css as cssPara } from "device-agnostic-ui/Para.mjs";
import Picture, { css as cssPicture } from "device-agnostic-ui/Picture.mjs";
import { createElement as h } from "react";
import useOnClickRouteLink from "ruck/useOnClickRouteLink.mjs";

export const css = new Set([
  ...cssHeading,
  ...cssLinkCard,
  ...cssPara,
  ...cssPicture,
  "/components/CardComponent.css",
]);

/**
 * React component for a route link card for a Device Agnostic UI component.
 * @param {object} props Props.
 * @param {string} props.componentName Device Agnostic UI component name.
 * @param {ReactNode} props.componentDescription Device Agnostic UI component
 *   description.
 */
export default function CardComponent({ componentName, componentDescription }) {
  const onClick = useOnClickRouteLink();

  return h(
    LinkCard,
    { href: `/components/${componentName}`, onClick },
    h(
      "figure",
      { className: "CardComponent__figure" },
      h(
        Picture,
        { width: 1360, height: 560 },
        h("source", {
          type: "image/webp",
          srcSet: `/screenshots/${componentName}-dark.webp`,
          media: "(prefers-color-scheme: dark)",
        }),
        h("source", {
          type: "image/png",
          srcSet: `/screenshots/${componentName}-dark.png`,
          media: "(prefers-color-scheme: dark)",
        }),
        h("source", {
          type: "image/webp",
          srcSet: `/screenshots/${componentName}-light.webp`,
        }),
        h("img", {
          src: `/screenshots/${componentName}-light.png`,
          alt: `${componentName} component screenshot`,
        }),
      ),
      h(
        "figcaption",
        { className: "CardComponent__figcaption" },
        h(Heading, null, componentName),
        h(Para, null, componentDescription),
      ),
    ),
  );
}
