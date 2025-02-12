// @ts-check

/** @import { ReactNode } from "react" */

import ButtonSubmit, {
  css as cssButtonSubmit,
} from "device-agnostic-ui/ButtonSubmit.mjs";
import Code, { css as cssCode } from "device-agnostic-ui/Code.mjs";
import Heading, { css as cssHeading } from "device-agnostic-ui/Heading.mjs";
import Para, { css as cssPara } from "device-agnostic-ui/Para.mjs";
import Pre, { css as cssPre } from "device-agnostic-ui/Pre.mjs";
import Prism from "prismjs";
import { createElement as h, Fragment, useCallback, useState } from "react";

// Prevent Prism from automatically syntax highlighting DOM elements.
Prism.manual = true;

export const css = new Set([
  "https://unpkg.com/device-agnostic-ui@11.0.0/syntax-highlighting-prism.css",
  ...cssButtonSubmit,
  ...cssCode,
  ...cssHeading,
  ...cssPara,
  ...cssPre,
  "/components/CodeExample.css",
]);

/**
 * React component for a code example.
 * @param {object} props Props.
 * @param {ReactNode} props.caption Caption.
 * @param {string} props.url Example module URL.
 * @param {() => ReactNode} props.Example Example functional component.
 * @param {boolean} [props.screenshot] Is this example the screenshot target.
 */
export default function CodeExample({ caption, url, Example, screenshot }) {
  const [loading, setLoading] = useState(false);
  const [codeHtml, setCodeHtml] = useState(
    /** @type {string | null} */ (null),
  );
  const onClick = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(url);

      if (!response.ok) throw new Error("Loading error.");

      setCodeHtml(Prism.highlight(
        await response.text(),
        Prism.languages.javascript,
        "javascript",
      ));
    } catch (error) {
      alert(
        `Unable to view example source: ${
          error instanceof Error ? error.message : "Error."
        }`,
      );
    } finally {
      setLoading(false);
    }
  }, [url]);

  return h(
    "figure",
    { className: "CodeExample__figure" },
    h(
      "figcaption",
      { className: "CodeExample__figcaption" },
      h(Para, null, caption),
    ),
    h(
      "div",
      { id: screenshot ? "daui-screenshot-target" : undefined },
      h(
        // @ts-ignore React types are wrong.
        Example,
      ),
    ),
    h(
      Fragment,
      null,
      h(Heading, { size: 5 }, "Code"),
      !codeHtml
        ? h(
          ButtonSubmit,
          {
            loading,
            onClick,
            style: {
              fontSize: "85%",
              padding: "0.5em 1em",
            },
          },
          "View source",
        )
        : h(
          Pre,
          null,
          h(Code, {
            className: "daui--syntax-highlighting-prism",
            dangerouslySetInnerHTML: { __html: codeHtml },
          }),
        ),
    ),
  );
}
