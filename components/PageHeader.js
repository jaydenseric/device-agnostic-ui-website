import { Heading } from 'device-agnostic-ui'
import PropTypes from 'prop-types'

export const PageHeader = ({ heading, children }) => (
  <header>
    <Heading style={{ fontSize: 'var(--daui-h1-font-size)' }}>
      {heading}
    </Heading>
    {children}
    <style jsx>{`
      header {
        margin: 2.5rem 1.5rem;
      }
    `}</style>
  </header>
)

PageHeader.propTypes = {
  heading: PropTypes.node.isRequired,
  children: PropTypes.node
}
