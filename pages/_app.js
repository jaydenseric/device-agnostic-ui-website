// ignore unused exports default

import 'device-agnostic-ui/public/theme.css';
import 'device-agnostic-ui/public/global.css';
import 'device-agnostic-ui/public/syntax-highlighting-prism.css';
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
import { LinkActive, LinkNav, LinkText, Nav } from 'device-agnostic-ui';
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
