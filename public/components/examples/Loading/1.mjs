// @ts-check

import Loading, { css as cssLoading } from "device-agnostic-ui/Loading.mjs";
import { createElement } from "react";

export const css = new Set([
  ...cssLoading,
]);

export default function Example() {
  return createElement(Loading, { size: "2em" });
}
