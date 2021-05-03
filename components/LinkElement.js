import Code from 'device-agnostic-ui/public/components/Code.js';
import LinkText from 'device-agnostic-ui/public/components/LinkText.js';
import PropTypes from 'prop-types';

export const LinkElement = ({ type = 'HTML', element, attribute }) => (
  <LinkText
    href={`https://developer.mozilla.org/en-US/docs/Web/${type}/${
      type === 'HTML'
        ? `Element/${element}${attribute ? `#attr-${attribute}` : ''}`
        : attribute
        ? `Attribute/${attribute}`
        : `Element/${element}`
    }`}
  >
    <Code>{attribute ? attribute : `<${element}>`}</Code>
  </LinkText>
);

LinkElement.propTypes = {
  type: PropTypes.oneOf(['HTML', 'SVG']),
  element: PropTypes.string.isRequired,
  attribute: PropTypes.string,
};
