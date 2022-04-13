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
      width: 1,
      height: 1,
      style: { width: "6rem" },
    },
    createElement("img", {
      src: "/example-picture/example.svg",
      alt: "Device Agnostic UI logo.",
      style: {
        borderRadius: "50%",
        objectFit: "contain",
        backgroundColor: "gold",
      },
    }),
  );
}
