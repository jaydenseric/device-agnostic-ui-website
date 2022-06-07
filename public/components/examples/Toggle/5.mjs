// @ts-check

import Button, { css as cssButton } from "device-agnostic-ui/Button.mjs";
import Toggle, { css as cssToggle } from "device-agnostic-ui/Toggle.mjs";
import { createElement, Fragment, useRef } from "react";

export const css = new Set([
  ...cssButton,
  ...cssToggle,
]);

export default function Example() {
  const ref = useRef(/** @type {HTMLInputElement | null} */ (null));

  const onClick = () => /** @type {HTMLInputElement}*/ (ref.current).focus();

  return createElement(
    Fragment,
    null,
    createElement(Toggle, { inputProps: { type: "checkbox", ref } }),
    " ",
    createElement(Button, { onClick }, "Focus"),
  );
}
