// @ts-check

import Picture, { css as cssPicture } from "device-agnostic-ui/Picture.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssPicture,
]);

export default function Example() {
  return createElement(
    Picture,
    {
      width: 1360,
      height: 560,
      style: { width: "340px" },
    },
    createElement("source", {
      type: "image/webp",
      srcSet: "/screenshots/Blockquote-dark.webp",
      media: "(prefers-color-scheme: dark)",
    }),
    createElement("source", {
      type: "image/png",
      srcSet: "/screenshots/Blockquote-dark.png",
      media: "(prefers-color-scheme: dark)",
    }),
    createElement("source", {
      type: "image/webp",
      srcSet: "/screenshots/Blockquote-light.webp",
    }),
    createElement("img", {
      src: "/screenshots/Blockquote-light.png",
      alt: "Blockquote component screenshot",
    }),
  );
}
