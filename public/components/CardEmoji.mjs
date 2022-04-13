// @ts-check

import Heading, { css as cssHeading } from "device-agnostic-ui/Heading.mjs";
import Para, { css as cssPara } from "device-agnostic-ui/Para.mjs";
import { createElement as h } from "react";

export const css = new Set([
  ...cssHeading,
  ...cssPara,
  "/components/CardEmoji.css",
]);

/**
 * React component for an emoji card.
 * @param {object} props Props.
 * @param {string} props.emoji Emoji.
 * @param {import("react").ReactNode} props.heading Heading.
 * @param {import("react").ReactNode} [props.children] Children.
 */
export default function CardEmoji({ emoji, heading, children }) {
  return h(
    "article",
    { className: "CardEmoji__article" },
    h("div", { className: "CardEmoji__emoji" }, emoji),
    h(Heading, { style: { marginTop: "0.25em" } }, heading),
    h(Para, null, children),
  );
}
