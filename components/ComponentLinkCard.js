import {
  Heading,
  LinkCard,
  Para,
  Picture,
  WordBreaks
} from 'device-agnostic-ui'
import PropTypes from 'prop-types'
import React from 'react'

export const ComponentLinkCard = React.forwardRef(
  ({ componentName, componentDescription, ...props }, ref) => (
    <LinkCard {...props} ref={ref}>
      <article>
        <figure>
          <Picture
            src={`/static/screenshots/${componentName}-light.png`}
            width={1360}
            height={560}
            alt={`${componentName} component screenshot`}
          >
            <source
              type="image/webp"
              srcSet={`/static/screenshots/${componentName}-dark.webp`}
              media="(prefers-color-scheme: dark)"
            />
            <source
              type="image/png"
              srcSet={`/static/screenshots/${componentName}-dark.png`}
              media="(prefers-color-scheme: dark)"
            />
            <source
              type="image/webp"
              srcSet={`/static/screenshots/${componentName}-light.webp`}
            />
          </Picture>
        </figure>
        <div>
          <Heading>
            <WordBreaks>{componentName}</WordBreaks>
          </Heading>
          <Para>{componentDescription}</Para>
        </div>
      </article>
      <style jsx>{`
        article {
          width: 14em;
          font-size: 90%;
        }

        figure {
          margin: 0;
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
