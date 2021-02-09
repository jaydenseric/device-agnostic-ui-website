// ignore unused exports default

import { Code, Html, LinkText, Margin, Para } from 'device-agnostic-ui';
import Link from 'next/link';
import { CodeExample } from '../components/CodeExample';
import { LinkComponent } from '../components/LinkComponent';
import { LinkElement } from '../components/LinkElement';
import { Page } from '../components/Page';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';

const linkPrism = <LinkText href="https://prismjs.com">Prism</LinkText>;

const StylesPage = () => (
  <Page
    title="Styles"
    description="How to setup and use Device Agnostic UI styles."
  >
    <PageHeader heading="Styles">
      <Para>
        <LinkText href="#theme-styles">Theme</LinkText>,{' '}
        <LinkText href="#global-styles">global</LinkText>,{' '}
        <LinkText href="#component-styles">component</LinkText>, and{' '}
        <LinkText href="#syntax-highlighting-styles">
          syntax highlighting
        </LinkText>{' '}
        styles are published in vanilla CSS files that must be manually loaded
        in your app, as necessary.
      </Para>
      <Para>
        Out of the box,{' '}
        <LinkText href="https://nextjs.org/docs/basic-features/built-in-css-support">
          Next.js supports importing CSS files
        </LinkText>{' '}
        within React component modules.
      </Para>
    </PageHeader>
    <Section level={2} heading="Theme styles" id="theme-styles">
      <Margin>
        <Para>
          The first styles to load in your app should establish the global theme
          by setting the <Code>--daui-</Code> namespaced CSS variables at the{' '}
          <LinkText href="https://developer.mozilla.org/en-US/docs/Web/CSS/:root">
            <Code>:root</Code>
          </LinkText>
          .
        </Para>
      </Margin>
      <Section level={3} heading="Default theme" id="default-theme">
        <Margin>
          <CodeExample
            caption={
              <>
                Import the default theme styles within a{' '}
                <LinkText href="https://nextjs.org/docs/advanced-features/custom-app">
                  Next.js custom app
                </LinkText>{' '}
                in <Code>pages/_app.js</Code>.
              </>
            }
            code={
              /* syntax-highlight jsx */ /* JSX */ `
                import 'device-agnostic-ui/public/theme.css';
              `
            }
          />
        </Margin>
      </Section>
      <Section level={3} heading="Custom theme" id="custom-theme">
        <Margin>
          <Para>
            For a custom theme, either load the{' '}
            <LinkText href="#default-theme">default theme</LinkText> and then
            override specific theme CSS variables, or manually set all of the
            theme CSS variables from scratch.
          </Para>
          <CodeExample
            caption={
              <>
                CSS that overrides a specific default theme variable to make
                interactive elements such as links red instead of blue.
              </>
            }
            code={
              /* syntax-highlight jsx */ /* CSS */ `
                :root {
                  --daui-interact-hue: 10;
                }
              `
            }
          />
        </Margin>
      </Section>
    </Section>
    <Section level={2} heading="Global styles" id="global-styles">
      <Margin>
        <Para>
          After the <LinkText href="#theme-styles">theme styles</LinkText>, load
          the essential <LinkElement element="html" /> and{' '}
          <LinkElement element="body" /> global styles to establish the app
          viewport and typography.
        </Para>
        <CodeExample
          caption={
            <>
              Import the global styles within a{' '}
              <LinkText href="https://nextjs.org/docs/advanced-features/custom-app">
                Next.js custom app
              </LinkText>{' '}
              in <Code>pages/_app.js</Code>.
            </>
          }
          code={
            /* syntax-highlight jsx */ /* JSX */ `
                import 'device-agnostic-ui/public/global.css';
              `
          }
        />
      </Margin>
    </Section>
    <Section level={2} heading="Component styles" id="component-styles">
      <Margin>
        <Para>
          After the <LinkText href="#theme-styles">theme</LinkText> and{' '}
          <LinkText href="#global-styles">global</LinkText> styles, load the
          styles for the{' '}
          <Link href="/components" passHref>
            <LinkText>components</LinkText>
          </Link>{' '}
          used in your app.
        </Para>
        <CodeExample
          caption={
            <>
              Import necessary component styles within a{' '}
              <LinkText href="https://nextjs.org/docs/advanced-features/custom-app">
                Next.js custom app
              </LinkText>{' '}
              in <Code>pages/_app.js</Code>.
            </>
          }
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import 'device-agnostic-ui/public/components/Blockquote.css';
              import 'device-agnostic-ui/public/components/Button.css';
              import 'device-agnostic-ui/public/components/ButtonSubmit.css';
              import 'device-agnostic-ui/public/components/Code.css';
              import 'device-agnostic-ui/public/components/Fieldset.css';
              import 'device-agnostic-ui/public/components/Heading.css';
              import 'device-agnostic-ui/public/components/Html.css';
              import 'device-agnostic-ui/public/components/Icon.css';
              import 'device-agnostic-ui/public/components/LinkCard.css';
              import 'device-agnostic-ui/public/components/LinkNav.css';
              import 'device-agnostic-ui/public/components/LinkText.css';
              import 'device-agnostic-ui/public/components/List.css';
              import 'device-agnostic-ui/public/components/Loading.css';
              import 'device-agnostic-ui/public/components/Margin.css';
              import 'device-agnostic-ui/public/components/Nav.css';
              import 'device-agnostic-ui/public/components/Para.css';
              import 'device-agnostic-ui/public/components/Picture.css';
              import 'device-agnostic-ui/public/components/Pre.css';
              import 'device-agnostic-ui/public/components/Scroll.css';
              import 'device-agnostic-ui/public/components/Select.css';
              import 'device-agnostic-ui/public/components/Table.css';
              import 'device-agnostic-ui/public/components/Textbox.css';
              import 'device-agnostic-ui/public/components/Toggle.css';
            `
          }
        />
        <Para>
          HTML element class names within{' '}
          <Link href="/components" passHref>
            <LinkText>components</LinkText>
          </Link>{' '}
          are <Code>daui-</Code> namespaced and follow the{' '}
          <LinkText href="https://en.bem.info/methodology/naming-convention">
            BEM naming convention
          </LinkText>
          . These are private implementation details that may change in{' '}
          <LinkText href="https://semver.org">semver</LinkText> non major
          releases and shouldn’t be used by app code.
        </Para>
        <Para>
          Most of the{' '}
          <Link href="/components" passHref>
            <LinkText>components</LinkText>
          </Link>{' '}
          can be customized via <Code>id</Code>, <Code>className</Code>, and{' '}
          <Code>style</Code> props.
        </Para>
      </Margin>
    </Section>
    <Section
      level={2}
      heading="Syntax highlighting styles"
      id="syntax-highlighting-styles"
    >
      <Margin>
        <Para>
          HTML produced by a syntax highlighter that has processed code can be
          styled with colors that are accessible, match the global theme, and
          adapt for light and dark mode.
        </Para>
      </Margin>
      <Section
        level={3}
        heading="Prism syntax highlighting"
        id="prism-syntax-highlighting"
      >
        <Margin>
          <Para>
            After the <LinkText href="#theme-styles">theme</LinkText> styles,
            load the {linkPrism} syntax highlighting styles.
          </Para>
          <CodeExample
            caption={
              <>
                Import the {linkPrism} syntax highlighting styles within a{' '}
                <LinkText href="https://nextjs.org/docs/advanced-features/custom-app">
                  Next.js custom app
                </LinkText>{' '}
                in <Code>pages/_app.js</Code>.
              </>
            }
            code={
              /* syntax-highlight jsx */ /* JSX */ `
                import 'device-agnostic-ui/public/syntax-highlighting-prism.css';
              `
            }
          />
          <Para>
            Use the <Code>daui--syntax-highlighting-prism</Code> class name on a{' '}
            <LinkElement element="code" /> element, or any of its ancestors.
          </Para>
          <CodeExample
            caption={
              <>
                Styling {linkPrism} HTML in <LinkComponent component="Code" />.
              </>
            }
            code={
              /* syntax-highlight jsx */ /* JSX */ `
                import { Code } from 'device-agnostic-ui';

                const result = (
                  <Code
                    className="daui--syntax-highlighting-prism"
                    dangerouslySetInnerHTML={{
                      __html:
                        '<span class="token keyword">scalar</span> <span class="token class-name">Upload</span>',
                    }}
                  />
                );
              `
            }
            result={
              <Code
                className="daui--syntax-highlighting-prism"
                dangerouslySetInnerHTML={{
                  __html:
                    '<span class="token keyword">scalar</span> <span class="token class-name">Upload</span>',
                }}
              />
            }
          />
          <CodeExample
            caption={
              <>
                Styling {linkPrism} HTML in <LinkComponent component="Html" />.
              </>
            }
            code={
              /* syntax-highlight jsx */ /* JSX */ `
                import { Html } from 'device-agnostic-ui';

                const result = (
                  <Html
                    className="daui--syntax-highlighting-prism"
                    dangerouslySetInnerHTML={{
                      __html:
                        '<h3>Example</h3><pre><code><span class="token keyword">scalar</span> <span class="token class-name">Upload</span></code></pre>'
                    }}
                  />
                );
              `
            }
            result={
              <Html
                className="daui--syntax-highlighting-prism"
                dangerouslySetInnerHTML={{
                  __html:
                    '<h3>Example</h3><pre><code><span class="token keyword">scalar</span> <span class="token class-name">Upload</span></code></pre>',
                }}
              />
            }
          />
          <Para>
            To avoid using and bundling{' '}
            <LinkText href="https://npm.im/prismjs">
              <Code>prismjs</Code>
            </LinkText>
            ,{' '}
            <LinkText href="https://github.com/jaydenseric/babel-plugin-syntax-highlight">
              <Code>babel-plugin-syntax-highlight</Code>
            </LinkText>{' '}
            can be used to transform the code contents of template literals lead
            by comments specifying a {linkPrism} language into syntax
            highlighting HTML. This is how code examples at this site are done.
          </Para>
          <CodeExample
            caption={
              <>
                How to create a {linkPrism} HTML string via{' '}
                <LinkText href="https://github.com/jaydenseric/babel-plugin-syntax-highlight">
                  <Code>babel-plugin-syntax-highlight</Code>
                </LinkText>
                .
              </>
            }
            code={
              /* syntax-highlight jsx */ /* JSX */ `
                const html = /* syntax-highlight graphql */ \`
                  scalar Upload
                \`;
              `
            }
          />
        </Margin>
      </Section>
    </Section>
  </Page>
);

export default StylesPage;
