import PropTypes from 'prop-types'

export const Footer = ({ children }) => (
  <footer>
    {children}
    <style jsx>{`
      footer {
        margin: 3rem 1.5rem 4.5rem;
      }
    `}</style>
  </footer>
)

Footer.propTypes = {
  children: PropTypes.node.isRequired
}
