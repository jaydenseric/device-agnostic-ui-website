import { Heading, LinkCard, Para } from 'device-agnostic-ui'
import PropTypes from 'prop-types'
import React from 'react'
import { PrettyWordBreaks } from './PrettyWordBreaks'

export const HookLinkCard = React.forwardRef(
  ({ hookName, hookDescription, ...props }, ref) => (
    <LinkCard {...props} ref={ref}>
      <article>
        <Heading>
          <PrettyWordBreaks>{hookName}</PrettyWordBreaks>
        </Heading>
        <Para style={{ fontSize: '95%' }}>{hookDescription}</Para>
      </article>
      <style jsx>{`
        article {
          padding: 1em;
          padding-bottom: 1.5em;
          width: 14em;
        }

        figure {
          margin: 0;
          background-color: white;
        }
      `}</style>
    </LinkCard>
  )
)

HookLinkCard.displayName = 'HookLinkCard'

HookLinkCard.propTypes = {
  hookName: PropTypes.string.isRequired,
  hookDescription: PropTypes.string.isRequired
}
