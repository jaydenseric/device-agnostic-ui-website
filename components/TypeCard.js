import { Code, Heading, Table, WordBreaks } from 'device-agnostic-ui';
import PropTypes from 'prop-types';
import styles from './TypeCard.module.css';

export const TypeCard = ({
  identity,
  type,
  required,
  defaultValue,
  children,
}) => (
  <article className={styles.article}>
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
  </article>
);

TypeCard.propTypes = {
  identity: PropTypes.exact({
    name: PropTypes.string.isRequired,
    idPrefix: PropTypes.string.isRequired,
  }),
  type: PropTypes.node.isRequired,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
  children: PropTypes.node.isRequired,
};
