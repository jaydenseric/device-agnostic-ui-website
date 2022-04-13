// @ts-check

import Icon, { css as cssIcon } from "device-agnostic-ui/Icon.mjs";
import { createElement as h } from "react";

export const css = new Set([
  ...cssIcon,
]);

/**
 * React component for a Unpkg icon.
 * @param {Omit<React.ComponentPropsWithoutRef<typeof Icon>, "title">} props
 *   Props.
 */
export default function IconUnpkg(props) {
  return h(
    Icon,
    { ...props, title: "Unpkg" },
    h("path", {
      stroke: "none",
      d: "M21.397 0h8.035v17.946c0 7.66-2.317 14.054-13.466 14.054C4.816 32 2.5 25.482 2.5 17.946V0h8.035v19.521c0 2.838 1.747 5.367 5.431 5.367s5.43-2.528 5.43-5.367z",
    }),
  );
}
