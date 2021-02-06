import {
  Heading,
  LinkCard,
  Para,
  Picture,
  WordBreaks,
} from 'device-agnostic-ui';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './ComponentLinkCard.module.css';

export const ComponentLinkCard = React.forwardRef(
  ({ componentName, componentDescription, ...props }, ref) => (
    <LinkCard {...props} ref={ref}>
      <article className={styles.article}>
        <figure className={styles.figure}>
          <Picture width={1360} height={560}>
            <source
              type="image/webp"
              srcSet={`/static/screenshots/${componentName}-dark.webp`}
              media="(prefers-color-scheme: dark)"
            />
            <source
              type="image/png"
              srcSet={`/static/screenshots/${componentName}-dark.png`}
              media="(prefers-color-scheme: dark)"
            />
            <source
              type="image/webp"
              srcSet={`/static/screenshots/${componentName}-light.webp`}
            />
            <img
              src={`/static/screenshots/${componentName}-light.png`}
              alt={`${componentName} component screenshot`}
            />
          </Picture>
        </figure>
        <div className={styles.content}>
          <Heading>
            <WordBreaks>{componentName}</WordBreaks>
          </Heading>
          <Para>{componentDescription}</Para>
        </div>
      </article>
    </LinkCard>
  )
);

ComponentLinkCard.displayName = 'ComponentLinkCard';

ComponentLinkCard.propTypes = {
  componentName: PropTypes.string.isRequired,
  componentDescription: PropTypes.string.isRequired,
};
