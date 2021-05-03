import Code from 'device-agnostic-ui/public/components/Code.js';
import LinkText from 'device-agnostic-ui/public/components/LinkText.js';
import List from 'device-agnostic-ui/public/components/List.js';
import Margin from 'device-agnostic-ui/public/components/Margin.js';
import Para from 'device-agnostic-ui/public/components/Para.js';
import WordBreaks from 'device-agnostic-ui/public/components/WordBreaks.js';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { CodeExample } from './CodeExample';
import { Page } from './Page';
import { PageHeader } from './PageHeader';
import { Section } from './Section';

const codeExampleCssImport = /* syntax-highlight jsx */ /* JSX */ `
  import 'device-agnostic-ui/public/components/NamePlaceholder.css';
`;

const codeExampleJsDeepImport = /* syntax-highlight jsx */ /* JSX */ `
  import NamePlaceholder from 'device-agnostic-ui/public/components/NamePlaceholder.js';
`;

const codeExampleJsDeepRequire = /* syntax-highlight jsx */ /* JSX */ `
  const NamePlaceholder = require('device-agnostic-ui/public/components/NamePlaceholder');
`;

const codeExampleJsIndexImport = /* syntax-highlight jsx */ /* JSX */ `
  import { NamePlaceholder } from 'device-agnostic-ui';
`;

const codeExampleJsIndexRequire = /* syntax-highlight jsx */ /* JSX */ `
  const { NamePlaceholder } = require('device-agnostic-ui');
`;

export const ComponentPage = ({
  componentMeta,
  componentIntro,
  componentStylesContent,
  componentPropsContent,
  componentExamplesContent,
}) => {
  let codeExampleDependencyCssImports = '';

  if (componentMeta.getComponentDependencies) {
    componentMeta.getComponentDependencies().forEach((dependency) => {
      if (dependency.hasStyles)
        codeExampleDependencyCssImports += codeExampleCssImport.replace(
          'NamePlaceholder',
          dependency.name
        );
    });

    codeExampleDependencyCssImports = codeExampleDependencyCssImports.replace(
      /\n\n/gmu,
      '\n'
    );
  }

  return (
    <Page
      title={`${componentMeta.name} component`}
      description={componentMeta.description}
      imageUrl={`${process.env.ORIGIN}/static/screenshots/${componentMeta.name}-light.png`}
    >
      <PageHeader heading={<WordBreaks>{componentMeta.name}</WordBreaks>}>
        <Para>{componentMeta.description}</Para>
        {componentIntro}
      </PageHeader>
      {(!!componentStylesContent ||
        componentMeta.hasStyles ||
        !!codeExampleDependencyCssImports) && (
        <Section level={2} heading="Styles" id="styles">
          <Margin>
            {componentMeta.hasStyles && (
              <CodeExample
                caption={
                  <>
                    Import the styles within a{' '}
                    <LinkText href="https://nextjs.org/docs/advanced-features/custom-app">
                      Next.js custom app
                    </LinkText>{' '}
                    in <Code>pages/_app.js</Code>.
                  </>
                }
                code={codeExampleCssImport.replace(
                  'NamePlaceholder',
                  componentMeta.name
                )}
              />
            )}
            {!!codeExampleDependencyCssImports && (
              <CodeExample
                caption={
                  <>
                    Also import the styles for the components this component
                    implements.
                  </>
                }
                code={codeExampleDependencyCssImports}
              />
            )}
            {componentStylesContent}
          </Margin>
        </Section>
      )}
      <Section level={2} heading="Props" id="props">
        {componentPropsContent}
      </Section>
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
              componentMeta.name
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
              componentMeta.name
            )}
          />
          <CodeExample
            caption={
              <>
                Index <Code>import</Code>. Convenient, but technically inferior
                to a deep <Code>import</Code>.
              </>
            }
            code={codeExampleJsIndexImport.replace(
              /NamePlaceholder/gu,
              componentMeta.name
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
              componentMeta.name
            )}
          />
          {componentExamplesContent}
        </Margin>
      </Section>
      {!!componentMeta.tags.length && (
        <Section level={2} heading="Tags" id="tags">
          <Margin>
            <List>
              {componentMeta.tags.map(({ tag, label, description }) => (
                <li key={tag}>
                  <Link href={`/components?tags=${tag}`} passHref>
                    <LinkText title={description}>{label}</LinkText>
                  </Link>
                </li>
              ))}
            </List>
          </Margin>
        </Section>
      )}
    </Page>
  );
};

ComponentPage.propTypes = {
  componentMeta: PropTypes.exact({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.exact({
        tag: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
    hasStyles: PropTypes.bool.isRequired,
    getComponentDependencies: PropTypes.func,
  }).isRequired,
  componentIntro: PropTypes.node,
  componentStylesContent: PropTypes.node,
  componentPropsContent: PropTypes.node,
  componentExamplesContent: PropTypes.node,
};
