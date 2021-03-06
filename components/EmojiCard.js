import Heading from 'device-agnostic-ui/public/components/Heading.js';
import Para from 'device-agnostic-ui/public/components/Para.js';
import PropTypes from 'prop-types';
import styles from './EmojiCard.module.css';

export const EmojiCard = ({ emoji, heading, children }) => (
  <article className={styles.article}>
    <div className={styles.emoji}>{emoji}</div>
    <Heading style={{ marginTop: '0.25em' }}>{heading}</Heading>
    <Para>{children}</Para>
  </article>
);

EmojiCard.propTypes = {
  emoji: PropTypes.string.isRequired,
  heading: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
