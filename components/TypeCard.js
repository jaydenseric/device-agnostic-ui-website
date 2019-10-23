import { Code, Heading, Para, Table } from 'device-agnostic-ui'
import PropTypes from 'prop-types'
import { PrettyWordBreaks } from './PrettyWordBreaks'

export const TypeCard = ({
  identity,
  type,
  required,
  defaultValue,
  description
}) => (
  <article>
    {identity && (
      <Heading
        style={{ fontSize: '110%' }}
        id={`${identity.idPrefix}-${identity.name}`}
      >
        <Code>
          <PrettyWordBreaks>{identity.name}</PrettyWordBreaks>
        </Code>
      </Heading>
    )}
    <Table style={{ fontSize: '95%' }}>
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
    <Para style={{ fontSize: '95%' }}>{description}</Para>
    <style jsx>{`
      article {
        width: 14em;
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
  description: PropTypes.node.isRequired
}
