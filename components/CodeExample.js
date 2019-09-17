import { Pre } from 'device-agnostic-ui'
import PropTypes from 'prop-types'
import { CodeSyntaxHighlighted } from './CodeSyntaxHighlighted'

const BORDER_WIDTH = '2px'
const SPACING = '0.5em'

export const CodeExample = ({ caption, code, result, screenshot }) => (
  <figure>
    {caption && <figcaption>{caption}</figcaption>}
    <Pre style={{ marginBottom: 0 }}>
      <CodeSyntaxHighlighted code={code} />
    </Pre>
    {result && (
      <div className="result">
        <div
          className="preview"
          id={screenshot ? 'daui-screenshot-target' : undefined}
        >
          <div>{result}</div>
        </div>
      </div>
    )}
    <style jsx>{`
      figure {
        margin: 2.5rem 0;
      }

      figcaption {
        margin: 0 1em;
        max-width: 30em;
        line-height: var(--daui-line-height);
        font-style: italic;
      }

      .result {
        position: relative;
        box-sizing: border-box;
        margin-top: ${SPACING};
        border: ${BORDER_WIDTH} solid
          hsla(
            var(--daui-shade-hue),
            var(--daui-shade-saturation),
            var(--daui-shade-lightness),
            var(--daui-shade-opacity)
          );
        border-radius: 0.75em;
        width: fit-content;
        max-width: 100%;
      }

      .result::before {
        content: '';
        position: absolute;
        left: 1.5em;
        bottom: 100%;
        margin-bottom: ${BORDER_WIDTH};
        height: ${SPACING};
        border-left: inherit;
      }

      .preview {
        padding: 0.75em;
      }

      .preview > div {
        max-width: 100%;
      }
    `}</style>
  </figure>
)

CodeExample.propTypes = {
  caption: PropTypes.node,
  code: PropTypes.string.isRequired,
  result: PropTypes.node,
  screenshot: PropTypes.bool
}
