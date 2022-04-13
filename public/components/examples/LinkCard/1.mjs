// @ts-check

import LinkCard, { css as cssLinkCard } from "device-agnostic-ui/LinkCard.mjs";
import Picture, { css as cssPicture } from "device-agnostic-ui/Picture.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssLinkCard,
  ...cssPicture,
]);

export default function Example() {
  return createElement(
    LinkCard,
    { href: "/example-picture/example.svg" },
    createElement(
      Picture,
      {
        width: 157,
        height: 100,
        style: { width: "157px" },
      },
      createElement("img", {
        src: "/example-picture/example.svg",
        alt: "Device Agnostic UI logo.",
      }),
    ),
  );
}
