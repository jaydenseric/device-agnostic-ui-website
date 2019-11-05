import { Heading } from 'device-agnostic-ui'
import PropTypes from 'prop-types'

export const Section = ({ level, heading, id, children }) => (
  <section>
    <header>
      <Heading style={{ fontSize: `var(--daui-h${level}-font-size)` }} id={id}>
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
  level: PropTypes.number.isRequired,
  heading: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node
}
