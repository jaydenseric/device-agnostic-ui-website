import { Code, stylesSyntaxHighlightingPrism } from 'device-agnostic-ui'
import PropTypes from 'prop-types'
import React from 'react'
import stripIndent from 'strip-indent'

export const CodeSyntaxHighlighted = ({ code }) => {
  const __html = React.useMemo(() => stripIndent(code).trim(), [code])
  return (
    <>
      <Code
        className={stylesSyntaxHighlightingPrism.className}
        dangerouslySetInnerHTML={{ __html }}
      />
      {stylesSyntaxHighlightingPrism.styles}
    </>
  )
}

CodeSyntaxHighlighted.propTypes = {
  code: PropTypes.string.isRequired
}
