// @ts-check

import Code, { css as cssCode } from "device-agnostic-ui/Code.mjs";
import Heading, { css as cssHeading } from "device-agnostic-ui/Heading.mjs";
import Scroll, { css as cssScroll } from "device-agnostic-ui/Scroll.mjs";
import { createElement as h, Fragment } from "react";

import useDescription from "../hooks/useDescription.mjs";
import useTitle from "../hooks/useTitle.mjs";
import Header, { css as cssHeader } from "./Header.mjs";
import CardComponent, { css as cssCardComponent } from "./CardComponent.mjs";
import Section, { css as cssSection } from "./Section.mjs";

export const css = new Set([
  ...cssCode,
  ...cssHeading,
  ...cssScroll,
  ...cssHeader,
  ...cssCardComponent,
  ...cssSection,
]);

/** React component for the components page. */
export default function PageComponents() {
  useTitle("Components");
  useDescription("Device Agnostic UI components.");

  return h(
    Fragment,
    null,
    h(
      Header,
      null,
      h(Heading, { size: 1 }, "Components"),
    ),
    h(
      Section,
      null,
      h(
        Scroll,
        null,
        h(CardComponent, {
          componentName: "Blockquote",
          componentDescription: "Displays content quoted from elsewhere.",
        }),
        h(CardComponent, {
          componentName: "Button",
          componentDescription:
            "A button for on-page interactions, typically in forms.",
        }),
        h(CardComponent, {
          componentName: "ButtonSubmit",
          componentDescription:
            "A form submit button that displays loading and success state.",
        }),
        h(CardComponent, {
          componentName: "Code",
          componentDescription: "Displays inline code.",
        }),
        h(CardComponent, {
          componentName: "Fieldset",
          componentDescription: "Groups and labels related form fields.",
        }),
        h(CardComponent, {
          componentName: "Heading",
          componentDescription: "A text heading.",
        }),
        h(CardComponent, {
          componentName: "Html",
          componentDescription:
            "Displays simple HTML with styles, typically derived from markdown.",
        }),
        h(CardComponent, {
          componentName: "Icon",
          componentDescription: "An inline SVG icon.",
        }),
        h(CardComponent, {
          componentName: "IconTick",
          componentDescription: "An inline SVG tick icon.",
        }),
        h(CardComponent, {
          componentName: "LinkCard",
          componentDescription: "A link to wrap a small card of content.",
        }),
        h(CardComponent, {
          componentName: "LinkNav",
          componentDescription: h(
            Fragment,
            null,
            "A navigation link within the ",
            h(Code, null, "Nav"),
            " component.",
          ),
        }),
        h(CardComponent, {
          componentName: "LinkText",
          componentDescription: "An inline text link.",
        }),
        h(CardComponent, {
          componentName: "ListOrdered",
          componentDescription: "An ordered list.",
        }),
        h(CardComponent, {
          componentName: "ListUnordered",
          componentDescription: "An unordered list.",
        }),
        h(CardComponent, {
          componentName: "Loading",
          componentDescription:
            "An inline, animated spinner to indicate data loading or processing.",
        }),
        h(CardComponent, {
          componentName: "Margin",
          componentDescription: "Surrounds content with a margin.",
        }),
        h(CardComponent, {
          componentName: "Nav",
          componentDescription:
            "Displays navigation links in a horizontal, spaced and scrollable grid.",
        }),
        h(CardComponent, {
          componentName: "Para",
          componentDescription: "A text paragraph.",
        }),
        h(CardComponent, {
          componentName: "Picture",
          componentDescription:
            "A picture with a responsive width and proportionate height, even while loading.",
        }),
        h(CardComponent, {
          componentName: "Pre",
          componentDescription:
            "Displays preformatted and typically multiline text.",
        }),
        h(CardComponent, {
          componentName: "Scroll",
          componentDescription:
            "Displays children in a horizontally spaced and scrollable grid.",
        }),
        h(CardComponent, {
          componentName: "Select",
          componentDescription:
            "An input that provides a selection of options.",
        }),
        h(CardComponent, {
          componentName: "Table",
          componentDescription: "Displays tabulated data.",
        }),
        h(CardComponent, {
          componentName: "Textbox",
          componentDescription: "An input or textarea.",
        }),
        h(CardComponent, {
          componentName: "Toggle",
          componentDescription: "A checkbox or radio input.",
        }),
        h(CardComponent, {
          componentName: "WordBreaks",
          componentDescription:
            "Renders text with aesthetically pleasing word break opportunities.",
        }),
      ),
    ),
  );
}
