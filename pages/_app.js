// ignore unused exports default

import 'device-agnostic-ui/theme.css';
import 'device-agnostic-ui/global.css';
import 'device-agnostic-ui/syntax-highlighting-prism.css';
import 'device-agnostic-ui/Blockquote.css';
import 'device-agnostic-ui/Button.css';
import 'device-agnostic-ui/ButtonSubmit.css';
import 'device-agnostic-ui/Code.css';
import 'device-agnostic-ui/Fieldset.css';
import 'device-agnostic-ui/Heading.css';
import 'device-agnostic-ui/Html.css';
import 'device-agnostic-ui/Icon.css';
import 'device-agnostic-ui/LinkCard.css';
import 'device-agnostic-ui/LinkNav.css';
import 'device-agnostic-ui/LinkText.css';
import 'device-agnostic-ui/List.css';
import 'device-agnostic-ui/Loading.css';
import 'device-agnostic-ui/Margin.css';
import 'device-agnostic-ui/Nav.css';
import 'device-agnostic-ui/Para.css';
import 'device-agnostic-ui/Picture.css';
import 'device-agnostic-ui/Pre.css';
import 'device-agnostic-ui/Scroll.css';
import 'device-agnostic-ui/Select.css';
import 'device-agnostic-ui/Table.css';
import 'device-agnostic-ui/Textbox.css';
import 'device-agnostic-ui/Toggle.css';
import LinkActive from 'device-agnostic-ui/LinkActive.mjs';
import LinkNav from 'device-agnostic-ui/LinkNav.mjs';
import LinkText from 'device-agnostic-ui/LinkText.mjs';
import Nav from 'device-agnostic-ui/Nav.mjs';
import Head from 'next/head';
import { DeviceAgnosticUILogo } from '../components/DeviceAgnosticUILogo';
import { Footer } from '../components/Footer';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => (
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
        &copy; <LinkText href="https://jaydenseric.com">Jayden Seric</LinkText>
      </small>
    </Footer>
  </>
);

export default App;
