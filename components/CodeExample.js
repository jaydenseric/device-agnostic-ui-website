import Pre from "device-agnostic-ui/Pre.mjs";
import PropTypes from "prop-types";
import styles from "./CodeExample.module.css";
import { CodeSyntaxHighlighted } from "./CodeSyntaxHighlighted";

export const CodeExample = ({ caption, code, result, screenshot }) => (
  <figure className={styles.figure}>
    {caption && (
      <figcaption className={styles.figcaption}>{caption}</figcaption>
    )}
    <Pre style={{ marginBottom: 0 }}>
      <CodeSyntaxHighlighted code={code} />
    </Pre>
    {result && (
      <div className={styles.result}>
        <div
          className={styles.preview}
          id={screenshot ? "daui-screenshot-target" : undefined}
        >
          <div>{result}</div>
        </div>
      </div>
    )}
  </figure>
);

CodeExample.propTypes = {
  caption: PropTypes.node,
  code: PropTypes.string.isRequired,
  result: PropTypes.node,
  screenshot: PropTypes.bool,
};
