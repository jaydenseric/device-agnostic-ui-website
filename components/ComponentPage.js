import Code from "device-agnostic-ui/Code.mjs";
import LinkText from "device-agnostic-ui/LinkText.mjs";
import List from "device-agnostic-ui/List.mjs";
import Margin from "device-agnostic-ui/Margin.mjs";
import Para from "device-agnostic-ui/Para.mjs";
import WordBreaks from "device-agnostic-ui/WordBreaks.mjs";
import Link from "next/link";
import PropTypes from "prop-types";
import { CodeExample } from "./CodeExample";
import { Page } from "./Page";
import { PageHeader } from "./PageHeader";
import { Section } from "./Section";

const codeExampleCssImport = /* syntax-highlight jsx */ /* JSX */ `
  import "device-agnostic-ui/NamePlaceholder.css";
`;

const codeExampleEsmImport = /* syntax-highlight jsx */ /* JSX */ `
  import NamePlaceholder from "device-agnostic-ui/NamePlaceholder.mjs";
`;

export const ComponentPage = ({
  componentMeta,
  componentIntro,
  componentStylesContent,
  componentPropsContent,
  componentExamplesContent,
}) => {
  let codeExampleDependencyCssImports = "";

  if (componentMeta.getComponentDependencies) {
    componentMeta.getComponentDependencies().forEach((dependency) => {
      if (dependency.hasStyles)
        codeExampleDependencyCssImports += codeExampleCssImport.replace(
          "NamePlaceholder",
          dependency.name
        );
    });

    codeExampleDependencyCssImports = codeExampleDependencyCssImports.replace(
      /\n\n/gmu,
      "\n"
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
                    Import the styles within a{" "}
                    <LinkText href="https://nextjs.org/docs/advanced-features/custom-app">
                      Next.js custom app
                    </LinkText>{" "}
                    in <Code>pages/_app.js</Code>.
                  </>
                }
                code={codeExampleCssImport.replace(
                  "NamePlaceholder",
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
            caption="How to import."
            code={codeExampleEsmImport.replace(
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
