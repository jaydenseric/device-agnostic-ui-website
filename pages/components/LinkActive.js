// ignore unused exports default

import Code from 'device-agnostic-ui/public/components/Code.js';
import LinkActive from 'device-agnostic-ui/public/components/LinkActive.js';
import LinkNav from 'device-agnostic-ui/public/components/LinkNav.js';
import LinkText from 'device-agnostic-ui/public/components/LinkText.js';
import Margin from 'device-agnostic-ui/public/components/Margin.js';
import Nav from 'device-agnostic-ui/public/components/Nav.js';
import Para from 'device-agnostic-ui/public/components/Para.js';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkComponent } from '../../components/LinkComponent';
import { LinkActive as LinkActiveComponentMeta } from '../../meta/components';

const LinkActiveComponentPage = () => (
  <ComponentPage
    componentMeta={LinkActiveComponentMeta}
    componentIntro={
      <Para>
        It implements the Next.js{' '}
        <LinkText href="https://nextjs.org/docs#with-link">
          <Code>{'<Link>'}</Code>
        </LinkText>{' '}
        component.
      </Para>
    }
    componentPropsContent={
      <Margin>
        <Para>
          Use any valid{' '}
          <LinkText href="https://nextjs.org/docs#with-link">
            <Code>{'<Link>'}</Code>
          </LinkText>{' '}
          props.
        </Para>
      </Margin>
    }
    componentExamplesContent={
      <CodeExample
        caption={
          <>
            With the <LinkComponent component="LinkNav" /> and{' '}
            <LinkComponent component="Nav" /> components.
          </>
        }
        code={
          /* syntax-highlight jsx */ /* JSX */ `
            import { LinkActive, LinkNav, Nav } from 'device-agnostic-ui';

            const result = (
              <Nav>
                <LinkActive href="/components/LinkActive" passHref>
                  <LinkNav>LinkActive</LinkNav>
                </LinkActive>
                <LinkActive href="/components/LinkNav" passHref>
                  <LinkNav>LinkNav</LinkNav>
                </LinkActive>
              </Nav>
            );
          `
        }
        result={
          <Nav>
            <LinkActive href="/components/LinkActive" passHref>
              <LinkNav>LinkActive</LinkNav>
            </LinkActive>
            <LinkActive href="/components/LinkNav" passHref>
              <LinkNav>LinkNav</LinkNav>
            </LinkActive>
          </Nav>
        }
        screenshot
      />
    }
  />
);

export default LinkActiveComponentPage;
