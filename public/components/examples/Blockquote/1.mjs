// @ts-check

import Blockquote, {
  css as cssBlockquote,
} from "device-agnostic-ui/Blockquote.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssBlockquote,
]);

export default function Example() {
  return createElement(
    Blockquote,
    null,
    "Great minds discuss ideas, average minds discuss events, small minds discuss people.",
  );
}
