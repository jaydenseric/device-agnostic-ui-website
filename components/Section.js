import { Heading } from 'device-agnostic-ui'
import PropTypes from 'prop-types'

export const Section = ({ headingLevel = 2, heading, id, children }) => (
  <section>
    <header>
      <Heading
        style={headingLevel === 2 ? { fontSize: 'calc(1.5rem + 1.5vw)' } : null}
        id={id}
      >
        {heading}
      </Heading>
    </header>
    {children}
    <style jsx>{`
      section {
        margin: 3rem 0;
      }

      section header {
        margin: 1.5rem;
      }
    `}</style>
  </section>
)

Section.propTypes = {
  headingLevel: PropTypes.number,
  heading: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node
}
