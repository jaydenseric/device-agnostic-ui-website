// @ts-check

import { createElement as h } from "react";

const WIDTH = 123;
const HEIGHT = 74;
const ASPECT_RATIO = WIDTH / HEIGHT;

/**
 * React component for the Device Agnostic UI logo.
 * @param {object} props Props.
 * @param {number} props.width Width value.
 * @param {string} [props.units] Width units. Defaults to `"em"`.
 */
export default function DeviceAgnosticUILogo({ width, units = "em" }) {
  const height = width / ASPECT_RATIO;

  return h(
    "svg",
    {
      width: `${width}${units}`,
      height: `${height}${units}`,
      viewBox: `0 0 ${WIDTH} ${HEIGHT}`,
      preserveAspectRatio: "xMidYMid meet",
    },
    h("title", null, "Device Agnostic UI logo"),
    h(
      "defs",
      null,
      h("rect", {
        id: "l",
        x: "23",
        y: "-28",
        width: "76",
        height: "97",
        rx: "10",
      }),
      h(
        "mask",
        { id: "l-mask" },
        h("use", {
          xlinkHref: "#l",
          fill: "white",
          transform: "translate(8, -8)",
        }),
      ),
      h("rect", {
        id: "m",
        x: "40",
        y: "6",
        width: "83",
        height: "50",
        rx: "10",
      }),
      h(
        "mask",
        { id: "m-mask" },
        h("use", {
          xlinkHref: "#m",
          fill: "white",
          transform: "translate(8, -8)",
        }),
      ),
      h("rect", {
        id: "s",
        x: "56",
        y: "-16",
        width: "34",
        height: "57",
        rx: "10",
      }),
    ),
    h(
      "g",
      { transform: "translate(0, 50) scale(1, .5773) rotate(-45)" },
      h("use", {
        xlinkHref: "#l",
        fill: "hsla(0, 0%, 0%, 0.06)",
        transform: "translate(-8, 8)",
      }),
      h("use", { xlinkHref: "#l", fill: "#2979ff" }),
      h("use", {
        xlinkHref: "#m",
        fill: "hsla(0, 0%, 0%, 0.12)",
        transform: "translate(-8, 8)",
        mask: "url(#l-mask)",
      }),
      h("use", { xlinkHref: "#m", fill: "#ff0266" }),
      h("use", {
        xlinkHref: "#s",
        fill: "hsla(0, 0%, 0%, 0.12)",
        transform: "translate(-8, 8)",
        mask: "url(#m-mask)",
      }),
      h("use", { xlinkHref: "#s", fill: "#00e676" }),
    ),
  );
}
