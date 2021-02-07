// ignore unused exports default

import { LinkText, Margin, Para } from 'device-agnostic-ui';
import Link from 'next/link';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkElement } from '../../components/LinkElement';
import { LinkText as LinkTextComponentMeta } from '../../meta/components';

const LinkTextComponentPage = () => (
  <ComponentPage
    componentMeta={LinkTextComponentMeta}
    componentIntro={
      <Para>
        It implements the <LinkElement element="a" /> element.
      </Para>
    }
    componentPropsContent={
      <Margin>
        <Para>
          Use any valid <LinkElement element="a" /> props.
        </Para>
      </Margin>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption="External link."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { LinkText } from 'device-agnostic-ui'

              <LinkText href="https://reactjs.org">React</LinkText>
            `
          }
          result={<LinkText href="https://reactjs.org">React</LinkText>}
          screenshot
        />
        <CodeExample
          caption="Internal Next.js route link."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { LinkText } from 'device-agnostic-ui'
              import Link from 'next/link'

              <Link href="/" passHref>
                <LinkText>Home</LinkText>
              </Link>
            `
          }
          result={
            <Link href="/" passHref>
              <LinkText>Home</LinkText>
            </Link>
          }
        />
      </>
    }
  />
);

export default LinkTextComponentPage;
