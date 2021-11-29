import Code from "device-agnostic-ui/Code.mjs";
import LinkText from "device-agnostic-ui/LinkText.mjs";
import Link from "next/link";
import PropTypes from "prop-types";

export const LinkComponent = ({ component, prop }) => (
  <Link
    href={`/components/${component}${prop ? `#prop-${prop}` : ""}`}
    passHref
  >
    <LinkText>
      <Code>{prop ? prop : `<${component}>`}</Code>
    </LinkText>
  </Link>
);

LinkComponent.propTypes = {
  component: PropTypes.string.isRequired,
  prop: PropTypes.string,
};
