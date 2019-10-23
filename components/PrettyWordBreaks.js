import PropTypes from 'prop-types'
import { Fragment } from 'react'

export const PrettyWordBreaks = ({ children }) => {
  const parts = children.split(
    /(?<!(?:^|[A-Z0-9]))(?=[A-Z0-9])|(?<!^)(?=[A-Z][a-z])/gm
  )

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={`${index}${part}`}>
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
