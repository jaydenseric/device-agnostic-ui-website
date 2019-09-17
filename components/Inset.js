import PropTypes from 'prop-types'

export const Inset = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        margin: 1.5rem;
      }
    `}</style>
  </div>
)

Inset.propTypes = {
  children: PropTypes.node.isRequired
}
