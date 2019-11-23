import { Heading } from 'device-agnostic-ui'
import PropTypes from 'prop-types'

export const Section = ({ level, heading, id, children }) => (
  <section>
    <header>
      <Heading level={level} size={level} id={id}>
        {heading}
      </Heading>
    </header>
    {children}
    <style jsx>{`
      section {
        margin: 3rem 0;
      }

      section header {
        margin: var(--daui-spacing);
      }
    `}</style>
  </section>
)

Section.propTypes = {
  level: PropTypes.number.isRequired,
  heading: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node
}
