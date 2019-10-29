import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

/**
 * Splits a string at aesthetically pleasing word break opportunity locations.
 * Ideally this whole process could be done in one step with split and a regexp
 * using lookbehind, but that has poor cross browser support.
 * @param {string} string String to split.
 * @param {string} [placeholder='<wbr />'] A temporary placeholder that hopefully doesn’t occur in the input string.
 * @returns {Array<string>} The split string.
 */
const wordBreakSplit = (string, placeholder = '<wbr />') =>
  string
    // Mark aesthetically pleasing word break opportunity locations, e.g.
    // `learnHTML5WithUs` → `learn<wbr />HTML<wbr />5<wbr />With<wbr />Us`.
    .replace(/(\d+|[A-Z]+(?![a-z])|[A-Z][a-z])/g, `${placeholder}$1`)

    // Remove word break opportunities at redundant locations: At the start
    // of a line, or after whitespace.
    .replace(new RegExp(`(^|\\s)(${placeholder})`, 'gm'), '$1')

    // Split the string at the final word break opportunity locations.
    .split(placeholder)

export const PrettyWordBreaks = ({ children }) => {
  const parts = React.useMemo(() => wordBreakSplit(children), [children])

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>
          {!!index && <wbr />}
          {part}
        </Fragment>
      ))}
      <style jsx>{`
        wbr {
          user-select: none;
        }
      `}</style>
    </>
  )
}

PrettyWordBreaks.propTypes = {
  children: PropTypes.string.isRequired
}
