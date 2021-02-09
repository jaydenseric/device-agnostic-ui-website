import { Code, Margin, Para, WordBreaks } from 'device-agnostic-ui';
import PropTypes from 'prop-types';
import { CodeExample } from './CodeExample';
import { Page } from './Page';
import { PageHeader } from './PageHeader';
import { Section } from './Section';

const codeExampleJsDeepImport = /* syntax-highlight jsx */ /* JSX */ `
  import NamePlaceholder from 'device-agnostic-ui/public/hooks/NamePlaceholder.js';
`;

const codeExampleJsDeepRequire = /* syntax-highlight jsx */ /* JSX */ `
  const NamePlaceholder = require('device-agnostic-ui/public/hooks/NamePlaceholder');
`;

const codeExampleJsIndexImport = /* syntax-highlight jsx */ /* JSX */ `
  import { NamePlaceholder } from 'device-agnostic-ui';
`;

const codeExampleJsIndexRequire = /* syntax-highlight jsx */ /* JSX */ `
  const { NamePlaceholder } = require('device-agnostic-ui');
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
          caption={
            <>
              Deep <Code>import</Code>.
            </>
          }
          code={codeExampleJsDeepImport.replace(
            /NamePlaceholder/gu,
            hookMeta.name
          )}
        />
        <CodeExample
          caption={
            <>
              Deep <Code>require</Code>.
            </>
          }
          code={codeExampleJsDeepRequire.replace(
            /NamePlaceholder/gu,
            hookMeta.name
          )}
        />
        <CodeExample
          caption={
            <>
              Index <Code>import</Code>. Convenient, but technically inferior to
              a deep <Code>import</Code>.
            </>
          }
          code={codeExampleJsIndexImport.replace(
            /NamePlaceholder/gu,
            hookMeta.name
          )}
        />
        <CodeExample
          caption={
            <>
              Index <Code>require</Code>. Convenient, but technically inferior
              to a deep <Code>require</Code>.
            </>
          }
          code={codeExampleJsIndexRequire.replace(
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
