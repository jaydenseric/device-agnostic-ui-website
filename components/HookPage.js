import Margin from "device-agnostic-ui/Margin.mjs";
import Para from "device-agnostic-ui/Para.mjs";
import WordBreaks from "device-agnostic-ui/WordBreaks.mjs";
import PropTypes from "prop-types";
import { CodeExample } from "./CodeExample";
import { Page } from "./Page";
import { PageHeader } from "./PageHeader";
import { Section } from "./Section";

const codeExampleEsmImport = /* syntax-highlight jsx */ /* JSX */ `
  import NamePlaceholder from "device-agnostic-ui/NamePlaceholder.mjs";
`;

export const HookPage = ({
  hookMeta,
  hookIntro,
  hookParametersContent,
  hookReturnsContent,
  hookExamplesContent,
}) => (
  <Page title={`${hookMeta.name} hook`} description={hookMeta.description}>
    <PageHeader heading={<WordBreaks>{hookMeta.name}</WordBreaks>}>
      <Para>{hookMeta.description}</Para>
      {hookIntro}
    </PageHeader>
    <Section level={2} heading="Parameters" id="parameters">
      {hookParametersContent}
    </Section>
    {hookReturnsContent && (
      <Section level={2} heading="Returns" id="returns">
        {hookReturnsContent}
      </Section>
    )}
    <Section level={2} heading="Examples" id="examples">
      <Margin>
        <CodeExample
          caption="How to import."
          code={codeExampleEsmImport.replace(
            /NamePlaceholder/gu,
            hookMeta.name
          )}
        />
        {hookExamplesContent}
      </Margin>
    </Section>
  </Page>
);

HookPage.propTypes = {
  hookMeta: PropTypes.exact({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  hookIntro: PropTypes.node,
  hookParametersContent: PropTypes.node,
  hookReturnsContent: PropTypes.node,
  hookExamplesContent: PropTypes.node,
};
