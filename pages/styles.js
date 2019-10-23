import { Code, LinkText, Para } from 'device-agnostic-ui'
import { CodeExample } from '../components/CodeExample'
import { Inset } from '../components/Inset'
import { LinkElement } from '../components/LinkElement'
import { PageHeader } from '../components/PageHeader'
import { PageMeta } from '../components/PageMeta'
import { PrettyWordBreaks } from '../components/PrettyWordBreaks'
import { Section } from '../components/Section'

const StylesPage = () => (
  <>
    <PageMeta
      title="Styles"
      description="How to setup Device Agnostic UI styles."
    />
    <PageHeader heading="Styles" />
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
  </>
)

export default StylesPage
