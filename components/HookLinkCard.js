import Heading from 'device-agnostic-ui/public/components/Heading.js';
import LinkCard from 'device-agnostic-ui/public/components/LinkCard.js';
import Para from 'device-agnostic-ui/public/components/Para.js';
import WordBreaks from 'device-agnostic-ui/public/components/WordBreaks.js';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './HookLinkCard.module.css';

export const HookLinkCard = React.forwardRef(
  ({ hookName, hookDescription, ...props }, ref) => (
    <LinkCard {...props} ref={ref}>
      <article className={styles.article}>
        <Heading>
          <WordBreaks>{hookName}</WordBreaks>
        </Heading>
        <Para>{hookDescription}</Para>
      </article>
    </LinkCard>
  )
);

HookLinkCard.displayName = 'HookLinkCard';

HookLinkCard.propTypes = {
  hookName: PropTypes.string.isRequired,
  hookDescription: PropTypes.string.isRequired,
};
