import {
  Code,
  Html,
  LinkText,
  Para,
  stylesSyntaxHighlightingPrism
} from 'device-agnostic-ui'
import { CodeExample } from '../components/CodeExample'
import { Inset } from '../components/Inset'
import { LinkComponent } from '../components/LinkComponent'
import { LinkElement } from '../components/LinkElement'
import { PageHeader } from '../components/PageHeader'
import { PageMeta } from '../components/PageMeta'
import { PrettyWordBreaks } from '../components/PrettyWordBreaks'
import { Section } from '../components/Section'

const linkPrism = <LinkText href="https://prismjs.com">Prism</LinkText>

const CodeSyntaxHighlighted = props => (
  <>
    <Code {...props} className={stylesSyntaxHighlightingPrism.className} />
    {stylesSyntaxHighlightingPrism.styles}
  </>
)

const HtmlSyntaxHighlighted = props => (
  <>
    <Html {...props} className={stylesSyntaxHighlightingPrism.className} />
    {stylesSyntaxHighlightingPrism.styles}
  </>
)

const StylesPage = () => (
  <>
    <PageMeta
      title="Styles"
      description="How to setup and use Device Agnostic UI styles."
    />
    <PageHeader heading="Styles">
      <Para>
        Styles are handled using{' '}
        <LinkText href="https://github.com/zeit/styled-jsx">
          <Code>{`styled-jsx`}</Code>
        </LinkText>
        , which{' '}
        <LinkText href="https://nextjs.org/docs#built-in-css-support">
          Next.js supports out of the box
        </LinkText>
        .
      </Para>
    </PageHeader>
    <Section heading="Global styles" id="global-styles">
      <Inset>
        <Para>
          Global styles are avoided, except for essential{' '}
          <LinkElement element="html" /> and <LinkElement element="body" />{' '}
          styles to establish the theme and viewport.
        </Para>
        <CodeExample
          caption={
            <>
              How to setup the global styles in{' '}
              <LinkText href="https://nextjs.org/docs#custom-app">
                <Code>{`pages/_app.js`}</Code>
              </LinkText>
              .{' '}
              <LinkText href="#stylesGlobalTheme">
                <Code>stylesGlobalTheme</Code>
              </LinkText>{' '}
              must precede{' '}
              <LinkText href="#stylesGlobal">
                <Code>stylesGlobal</Code>
              </LinkText>
              .
            </>
          }
          code={
            /* syntax-highlight jsx */ `
              import { stylesGlobal, stylesGlobalTheme } from 'device-agnostic-ui'
              import App from 'next/app'
              import Head from 'next/head'

              export default class CustomApp extends App {
                render() {
                  const { Component, pageProps = {} } = this.props
                  return (
                    <>
                      <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta name="color-scheme" content="light dark" />
                      </Head>
                      <Component {...pageProps} />
                      <style jsx global>
                        {stylesGlobalTheme}
                      </style>
                      <style jsx global>
                        {stylesGlobal}
                      </style>
                    </>
                  )
                }
              }
            `
          }
        />
      </Inset>
      <Section
        headingLevel={3}
        heading={<PrettyWordBreaks>stylesGlobalTheme</PrettyWordBreaks>}
        id="stylesGlobalTheme"
      >
        <Inset>
          <Para>
            Establishes the global theme by setting <Code>--daui-</Code>{' '}
            namespaced CSS variables at the{' '}
            <LinkText href="https://developer.mozilla.org/en-US/docs/Web/CSS/:root">
              <Code>:root</Code>
            </LinkText>
            . For a custom theme, either don’t use{' '}
            <LinkText href="#stylesGlobal">
              <Code>stylesGlobal</Code>
            </LinkText>{' '}
            and manually set every variable, or override specific variables.
          </Para>
          <CodeExample
            caption={
              <>
                How to override a specific theme variable to make interactive
                elements such as links red instead of blue.
              </>
            }
            code={
              /* syntax-highlight jsx */ `
                <style jsx global>
                  {stylesGlobalTheme}
                </style>
                <style jsx global>{\`
                  :root {
                    --daui-interact-hue: 10;
                  }
                \`}</style>
              `
            }
          />
        </Inset>
      </Section>
      <Section
        headingLevel={3}
        heading={<PrettyWordBreaks>stylesGlobal</PrettyWordBreaks>}
        id="stylesGlobal"
      >
        <Inset>
          <Para>
            Sets essential <LinkElement element="html" /> and{' '}
            <LinkElement element="body" /> styles to establish the viewport. As
            it uses theme variables it must follow either{' '}
            <LinkText href="#stylesGlobalTheme">
              <Code>stylesGlobalTheme</Code>
            </LinkText>{' '}
            or a custom theme.
          </Para>
        </Inset>
      </Section>
    </Section>
    <Section
      headingLevel={2}
      heading="Syntax highlighting"
      id="syntax-highlighting"
    >
      <Inset>
        <Para>
          {linkPrism} syntax highlighting styles are provided, with accessible
          colors that match the global theme and automatically adjust for light
          and dark mode.
        </Para>
      </Inset>
      <Section
        headingLevel={3}
        heading={
          <PrettyWordBreaks>stylesSyntaxHighlightingPrism</PrettyWordBreaks>
        }
        id="stylesSyntaxHighlightingPrism"
      >
        <Inset>
          <Para>
            For styling syntax highlighting HTML produced by {linkPrism}.
          </Para>
          <CodeExample
            caption={
              <>
                A component that styles {linkPrism} HTML in{' '}
                <LinkComponent component="Code" />.
              </>
            }
            code={
              /* syntax-highlight jsx */ `
              import { Code, stylesSyntaxHighlightingPrism } from 'device-agnostic-ui'

              const CodeSyntaxHighlighted = props => (
                <>
                  <Code {...props} className={stylesSyntaxHighlightingPrism.className} />
                  {stylesSyntaxHighlightingPrism.styles}
                </>
              )

              const html = '<span class="token keyword">scalar</span> <span class="token class-name">Upload</span>'

              <CodeSyntaxHighlighted dangerouslySetInnerHTML={{ __html: html }} />
            `
            }
            result={
              <CodeSyntaxHighlighted
                dangerouslySetInnerHTML={{
                  __html:
                    '<span class="token keyword">scalar</span> <span class="token class-name">Upload</span>'
                }}
              />
            }
          />
          <CodeExample
            caption={
              <>
                A component that styles {linkPrism} HTML in{' '}
                <LinkComponent component="Html" />.
              </>
            }
            code={
              /* syntax-highlight jsx */ `
              import { Html, stylesSyntaxHighlightingPrism } from 'device-agnostic-ui'

              const HtmlSyntaxHighlighted = props => (
                <>
                  <Html {...props} className={stylesSyntaxHighlightingPrism.className} />
                  {stylesSyntaxHighlightingPrism.styles}
                </>
              )

              const html = \`
                <h3>Example</h3>
                <pre><code><span class="token keyword">scalar</span> <span class="token class-name">Upload</span></code></pre>
              \`

              <HtmlSyntaxHighlighted dangerouslySetInnerHTML={{ __html: html }} />
            `
            }
            result={
              <HtmlSyntaxHighlighted
                dangerouslySetInnerHTML={{
                  __html: `
                    <h3>Example</h3>
                    <pre><code><span class="token keyword">scalar</span> <span class="token class-name">Upload</span></code></pre>
                  `
                }}
              />
            }
          />
          <Para>
            To avoid bundling and using{' '}
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
              /* syntax-highlight jsx */ `
              const html = /* syntax-highlight graphql */ \`
                scalar Upload
              \`
            `
            }
          />
        </Inset>
      </Section>
    </Section>
  </>
)

export default StylesPage
