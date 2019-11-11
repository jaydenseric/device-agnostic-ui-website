import PropTypes from 'prop-types'

export const Footer = ({ children }) => (
  <footer>
    {children}
    <style jsx>{`
      footer {
        margin: 3rem var(--daui-spacing) 4.5rem;
      }
    `}</style>
  </footer>
)

Footer.propTypes = {
  children: PropTypes.node.isRequired
}
