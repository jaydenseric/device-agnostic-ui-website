// @ts-check

/** @import { ReactNode } from "react" */

import Code, { css as cssCode } from "device-agnostic-ui/Code.mjs";
import Heading, { css as cssHeading } from "device-agnostic-ui/Heading.mjs";
import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import Margin, { css as cssMargin } from "device-agnostic-ui/Margin.mjs";
import Para, { css as cssPara } from "device-agnostic-ui/Para.mjs";
import { createElement as h, Fragment } from "react";

import useDescription from "../hooks/useDescription.mjs";
import useOpenGraphImage from "../hooks/useOpenGraphImage.mjs";
import useTitle from "../hooks/useTitle.mjs";
import Header, { css as cssHeader } from "./Header.mjs";
import IconGitHub, { css as cssIconGitHub } from "./IconGitHub.mjs";
import IconUnpkg, { css as cssIconUnpkg } from "./IconUnpkg.mjs";
import Section, { css as cssSection } from "./Section.mjs";
import TextIcon from "./TextIcon.mjs";

export const css = new Set([
  ...cssCode,
  ...cssHeading,
  ...cssLinkText,
  ...cssMargin,
  ...cssPara,
  ...cssHeader,
  ...cssIconGitHub,
  ...cssIconUnpkg,
  ...cssSection,
]);

/**
 * React component for a component page.
 * @param {object} props Props.
 * @param {string} props.componentName Component name.
 * @param {ReactNode} props.componentDescription Component description.
 * @param {boolean} [props.hasCss] Does the component module have a `css`
 *   export. Defaults to `true`.
 * @param {ReactNode} [props.examples] Examples.
 */
export default function PageComponent({
  componentName,
  componentDescription,
  hasCss = true,
  examples,
}) {
  useTitle(`${componentName} component`);
  useDescription(`The ${componentName} Device Agnostic UI component.`);
  useOpenGraphImage(`/screenshots/${componentName}-light.png`, 1);

  const moduleSourceUrl =
    `https://github.com/jaydenseric/device-agnostic-ui/blob/master/${componentName}.mjs`;

  return h(
    Fragment,
    null,
    h(
      Header,
      null,
      h(Heading, { size: 1 }, componentName),
      h(Para, { style: { fontSize: "1.5rem" } }, componentDescription),
      h(
        Para,
        null,
        h(
          "strong",
          null,
          h(
            LinkText,
            { href: moduleSourceUrl },
            h(TextIcon, { icon: IconGitHub }, "Module source"),
          ),
        ),
      ),
      h(
        Para,
        null,
        h(
          "strong",
          null,
          h(
            LinkText,
            {
              href: `https://unpkg.com/device-agnostic-ui/${componentName}.mjs`,
            },
            h(TextIcon, { icon: IconUnpkg }, "Unpkg CDN"),
          ),
        ),
      ),
    ),
    hasCss && h(
      Section,
      null,
      h(
        Header,
        null,
        h(Heading, { level: 2, size: 2, id: "css" }, "CSS"),
        h(
          Para,
          null,
          "This component module has a ",
          h(Code, null, "css"),
          " export that’s a ",
          h(Code, null, "Set"),
          " instance containing the URL strings of the CSS files that must be loaded for this component to display correctly (excluding theme and global CSS).",
        ),
      ),
    ),
    h(
      Section,
      null,
      h(
        Header,
        null,
        h(Heading, { level: 2, size: 2, id: "props" }, "Props"),
        h(
          Para,
          null,
          "The React component props are documented via ",
          h(LinkText, { href: "https://typescriptlang.org" }, "TypeScript"),
          " JSDoc comments in the ",
          h(
            LinkText,
            { href: moduleSourceUrl },
            "module source",
          ),
          ".",
        ),
      ),
    ),
    !!examples && h(
      Section,
      null,
      h(
        Header,
        null,
        h(Heading, { level: 2, size: 2, id: "examples" }, "Examples"),
      ),
      h(Margin, null, examples),
    ),
  );
}
