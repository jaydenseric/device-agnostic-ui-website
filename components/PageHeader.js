import { Heading } from 'device-agnostic-ui';
import PropTypes from 'prop-types';

export const PageHeader = ({ heading, children }) => (
  <header>
    <Heading size={1}>{heading}</Heading>
    {children}
    <style jsx>{`
      header {
        margin: 2.5rem var(--daui-spacing);
      }
    `}</style>
  </header>
);

PageHeader.propTypes = {
  heading: PropTypes.node.isRequired,
  children: PropTypes.node,
};
