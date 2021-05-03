import Heading from 'device-agnostic-ui/public/components/Heading.js';
import PropTypes from 'prop-types';
import styles from './PageHeader.module.css';

export const PageHeader = ({ heading, children }) => (
  <header className={styles.header}>
    <Heading size={1}>{heading}</Heading>
    {children}
  </header>
);

PageHeader.propTypes = {
  heading: PropTypes.node.isRequired,
  children: PropTypes.node,
};
