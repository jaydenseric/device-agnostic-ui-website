import { Heading, LinkCard, Para, WordBreaks } from 'device-agnostic-ui';
import PropTypes from 'prop-types';
import React from 'react';

export const HookLinkCard = React.forwardRef(
  ({ hookName, hookDescription, ...props }, ref) => (
    <LinkCard {...props} ref={ref}>
      <article>
        <Heading>
          <WordBreaks>{hookName}</WordBreaks>
        </Heading>
        <Para>{hookDescription}</Para>
      </article>
      <style jsx>{`
        article {
          margin: 1em;
          margin-bottom: 1.5em;
          width: 14em;
          font-size: 90%;
        }

        figure {
          margin: 0;
          background-color: white;
        }
      `}</style>
    </LinkCard>
  )
);

HookLinkCard.displayName = 'HookLinkCard';

HookLinkCard.propTypes = {
  hookName: PropTypes.string.isRequired,
  hookDescription: PropTypes.string.isRequired,
};
