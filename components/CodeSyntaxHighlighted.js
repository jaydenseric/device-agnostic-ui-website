import { Code } from 'device-agnostic-ui'
import PropTypes from 'prop-types'
import React from 'react'
import stripIndent from 'strip-indent'

export const CodeSyntaxHighlighted = ({ code }) => {
  const __html = React.useMemo(() => stripIndent(code).trim(), [code])
  return (
    <Code>
      <span dangerouslySetInnerHTML={{ __html }} />
      <style jsx>{`
        span :global(.token.important) {
          font-weight: bold;
        }

        span :global(.token.comment) {
          font-style: italic;
          color: hsla(
            var(--daui-foreground-hue),
            var(--daui-foreground-saturation),
            var(--daui-foreground-lightness),
            0.35
          );
        }

        span :global(.token.operator),
        span :global(.token.punctuation),
        span :global(.token.template-punctuation),
        span :global(.token.interpolation-punctuation) {
          color: hsla(
            var(--daui-foreground-hue),
            var(--daui-foreground-saturation),
            var(--daui-foreground-lightness),
            0.45
          );
        }

        span,
        span :global(.token.plain-text),
        span :global(.token.content),
        span :global(.token.attr-value),
        span :global(.token.string) {
          color: hsla(
            var(--daui-foreground-hue),
            var(--daui-foreground-saturation),
            var(--daui-foreground-lightness),
            0.8
          );
        }

        span :global(.token.url),
        span :global(.token.selector) {
          color: hsl(
            var(--daui-interact-hue),
            var(--daui-interact-saturation),
            var(--daui-interact-lightness)
          );
        }

        span :global(.token.boolean),
        span :global(.token.number) {
          color: hsl(280, 100%, 65%);
        }

        span :global(.token.attr-name),
        span :global(.token.property) {
          color: hsl(10, 100%, 60%);
        }

        span :global(.token.class-name),
        span :global(.token.function),
        span :global(.token.tag > .tag) {
          color: hsl(148, 100%, 23%);
        }

        span :global(.token.keyword) {
          color: hsl(339, 100%, 50%);
        }

        @media (prefers-color-scheme: dark) {
          span :global(.token.class-name),
          span :global(.token.function),
          span :global(.token.tag > .tag) {
            color: hsl(148, 100%, 32%);
          }
        }
      `}</style>
    </Code>
  )
}

CodeSyntaxHighlighted.propTypes = {
  code: PropTypes.string.isRequired
}
