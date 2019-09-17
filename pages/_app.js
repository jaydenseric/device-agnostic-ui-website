import {
  LinkActive,
  LinkNav,
  LinkText,
  Nav,
  stylesGlobal,
  stylesGlobalTheme
} from 'device-agnostic-ui'
import App from 'next/app'
import Head from 'next/head'
import { DeviceAgnosticUILogo } from '../components/DeviceAgnosticUILogo'
import { Footer } from '../components/Footer'

export default class CustomApp extends App {
  render() {
    const { Component, pageProps = {} } = this.props
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="color-scheme" content="light dark" />
          <meta name="theme-color" content="white" />
          <meta name="twitter:card" content="summary" />
          <link rel="manifest" href="/manifest.webmanifest" />
        </Head>
        <Nav>
          <LinkActive href="/" passHref>
            <LinkNav>
              <DeviceAgnosticUILogo width={3.5} />
            </LinkNav>
          </LinkActive>
          <LinkActive href="/styles" passHref>
            <LinkNav>Styles</LinkNav>
          </LinkActive>
          <LinkActive href="/components" passHref>
            <LinkNav>Components</LinkNav>
          </LinkActive>
          <LinkActive href="/hooks" passHref>
            <LinkNav>Hooks</LinkNav>
          </LinkActive>
          <LinkNav href="https://github.com/jaydenseric/device-agnostic-ui">
            GitHub
          </LinkNav>
          <LinkNav href="https://npm.im/device-agnostic-ui">npm</LinkNav>
        </Nav>
        <Component {...pageProps} />
        <Footer>
          <small>
            &copy;{' '}
            <LinkText href="https://jaydenseric.com">Jayden Seric</LinkText>
          </small>
        </Footer>
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
