import { Heading } from 'device-agnostic-ui';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

export const Section = ({ level, heading, id, children }) => (
  <section className={styles.section}>
    <header className={styles.header}>
      <Heading level={level} size={level} id={id}>
        {heading}
      </Heading>
    </header>
    {children}
  </section>
);

Section.propTypes = {
  level: PropTypes.number.isRequired,
  heading: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};
