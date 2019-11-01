import { Heading, Para } from 'device-agnostic-ui'
import PropTypes from 'prop-types'

export const EmojiCard = ({ emoji, heading, children }) => (
  <article>
    <div>{emoji}</div>
    <Heading style={{ marginTop: '0.25em' }}>{heading}</Heading>
    <Para>{children}</Para>
    <style jsx>{`
      article {
        width: 14em;
        margin-bottom: 1em;
      }

      div {
        font-size: 300%;
      }
    `}</style>
  </article>
)

EmojiCard.propTypes = {
  emoji: PropTypes.string.isRequired,
  heading: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
}
