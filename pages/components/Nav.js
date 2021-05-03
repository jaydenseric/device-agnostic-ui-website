// ignore unused exports default

import LinkActive from 'device-agnostic-ui/public/components/LinkActive.js';
import LinkNav from 'device-agnostic-ui/public/components/LinkNav.js';
import Margin from 'device-agnostic-ui/public/components/Margin.js';
import Nav from 'device-agnostic-ui/public/components/Nav.js';
import Para from 'device-agnostic-ui/public/components/Para.js';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkComponent } from '../../components/LinkComponent';
import { LinkElement } from '../../components/LinkElement';
import { Nav as NavComponentMeta } from '../../meta/components';

const NavComponentPage = () => (
  <ComponentPage
    componentMeta={NavComponentMeta}
    componentIntro={
      <>
        <Para>
          It implements the <LinkElement element="nav" /> element.
        </Para>
        <Para>
          The children should be <LinkComponent component="LinkNav" />{' '}
          components, via the <LinkComponent component="LinkActive" /> component
          for internal Next.js route links.
        </Para>
      </>
    }
    componentPropsContent={
      <Margin>
        <Para>
          Use any valid <LinkElement element="nav" /> props.
        </Para>
      </Margin>
    }
    componentExamplesContent={
      <CodeExample
        caption={
          <>
            With internal Next.js route link (using the{' '}
            <LinkComponent component="LinkActive" /> component), and an external
            link.
          </>
        }
        code={
          /* syntax-highlight jsx */ /* JSX */ `
            import { LinkActive, LinkNav, Nav } from 'device-agnostic-ui';

            const result = (
              <Nav>
                <LinkActive href="/" passHref>
                  <LinkNav>Home</LinkNav>
                </LinkActive>
                <LinkNav href="https://github.com/jaydenseric/device-agnostic-ui">
                  GitHub
                </LinkNav>
              </Nav>
            );
          `
        }
        result={
          <Nav>
            <LinkActive href="/" passHref>
              <LinkNav>Home</LinkNav>
            </LinkActive>
            <LinkNav href="https://github.com/jaydenseric/device-agnostic-ui">
              GitHub
            </LinkNav>
          </Nav>
        }
        screenshot
      />
    }
  />
);

export default NavComponentPage;
