import { Heading, LinkCard, Para, Picture } from 'device-agnostic-ui'
import PropTypes from 'prop-types'
import React from 'react'

export const ComponentLinkCard = React.forwardRef(
  ({ componentName, componentDescription, ...props }, ref) => (
    <LinkCard {...props} ref={ref}>
      <article>
        <figure>
          <Picture
            src={`/static/screenshots/${componentName}.png`}
            width={1360}
            height={560}
            alt={`${componentName} component screenshot`}
          >
            <source
              type="image/webp"
              srcSet={`/static/screenshots/${componentName}.webp`}
            />
          </Picture>
        </figure>
        <div>
          <Heading style={{ marginBottom: 0, fontSize: '110%' }}>
            {componentName}
          </Heading>
          <Para style={{ marginTop: '0.5em', fontSize: '95%' }}>
            {componentDescription}
          </Para>
        </div>
      </article>
      <style jsx>{`
        article {
          width: 14em;
        }

        figure {
          margin: 0;
          background-color: white;
        }

        div {
          margin: 1em;
          margin-bottom: 1.5em;
        }
      `}</style>
    </LinkCard>
  )
)

ComponentLinkCard.displayName = 'ComponentLinkCard'

ComponentLinkCard.propTypes = {
  componentName: PropTypes.string.isRequired,
  componentDescription: PropTypes.string.isRequired
}
