import { Code, Heading, Table, WordBreaks } from 'device-agnostic-ui'
import PropTypes from 'prop-types'

export const TypeCard = ({
  identity,
  type,
  required,
  defaultValue,
  children
}) => (
  <article>
    {identity && (
      <Heading
        style={{ fontSize: '110%' }}
        id={`${identity.idPrefix}-${identity.name}`}
      >
        <Code>
          <WordBreaks>{identity.name}</WordBreaks>
        </Code>
      </Heading>
    )}
    <Table>
      <tbody>
        <tr>
          <th scope="row">Type</th>
          <td>
            {type} ({required ? 'required' : 'optional'})
          </td>
        </tr>
        {typeof defaultValue !== 'undefined' && (
          <tr>
            <th scope="row">Default</th>
            <td>
              <Code>{defaultValue}</Code>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
    {children}
    <style jsx>{`
      article {
        width: 14em;
        font-size: 90%;
      }
    `}</style>
  </article>
)

TypeCard.propTypes = {
  identity: PropTypes.exact({
    name: PropTypes.string.isRequired,
    idPrefix: PropTypes.string.isRequired
  }),
  type: PropTypes.node.isRequired,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
  children: PropTypes.node.isRequired
}
