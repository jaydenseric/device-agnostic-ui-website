import { Code } from 'device-agnostic-ui';
import PropTypes from 'prop-types';
import React from 'react';
import stripIndent from 'strip-indent';

export const CodeSyntaxHighlighted = ({ code }) => {
  const __html = React.useMemo(() => stripIndent(code).trim(), [code]);
  return (
    <Code
      className="daui--syntax-highlighting-prism"
      dangerouslySetInnerHTML={{ __html }}
    />
  );
};

CodeSyntaxHighlighted.propTypes = {
  code: PropTypes.string.isRequired,
};
