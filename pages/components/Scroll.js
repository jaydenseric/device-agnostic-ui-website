// ignore unused exports default

import Code from 'device-agnostic-ui/Code.mjs';
import Heading from 'device-agnostic-ui/Heading.mjs';
import LinkText from 'device-agnostic-ui/LinkText.mjs';
import List from 'device-agnostic-ui/List.mjs';
import Para from 'device-agnostic-ui/Para.mjs';
import Scroll from 'device-agnostic-ui/Scroll.mjs';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkElement } from '../../components/LinkElement';
import { TypeCard } from '../../components/TypeCard';
import { Scroll as ScrollComponentMeta } from '../../meta/components';

const ScrollComponentPage = () => (
  <ComponentPage
    componentMeta={ScrollComponentMeta}
    componentIntro={
      <>
        <Para>It’s integral to most device agnostic layouts.</Para>
        <Para>
          It’s best used as a block that occupies the entire viewport width:
        </Para>
        <List>
          <li>More items will be visible in a narrow viewport.</li>
          <li>Users can interact with a larger area to scroll.</li>
          <li>
            Cropping items to a hole in the page doesn’t make skeuomorphic
            sense; it’s intuitive for items to scroll off the viewport.
          </li>
        </List>
      </>
    }
    componentPropsContent={
      <Scroll>
        <TypeCard
          identity={{ name: 'children', idPrefix: 'prop' }}
          type={
            <LinkText href="https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx">
              JSX children
            </LinkText>
          }
          required
        >
          <Para>
            CSS Grid items to be horizontally spaced and vertically top aligned.
          </Para>
        </TypeCard>
        <TypeCard identity={{ name: '...props', idPrefix: 'prop' }} type="…*">
          <Para>
            Additional props for the container; a <LinkElement element="div" />{' '}
            element.
          </Para>
        </TypeCard>
      </Scroll>
    }
    componentExamplesContent={
      <CodeExample
        caption={
          <>
            Several articles. The <Code>maxWidth</Code> style is only to demo
            demo scrolling; limiting the width isn’t recommended.
          </>
        }
        code={
          /* syntax-highlight jsx */ /* JSX */ `
            import Heading from 'device-agnostic-ui/Heading.mjs';
            import Scroll from 'device-agnostic-ui/Scroll.mjs';

            const result = (
              <Scroll style={{ maxWidth: '15rem' }}>
                <article>
                  <Heading>First</Heading>
                </article>
                <article>
                  <Heading>Second</Heading>
                </article>
                <article>
                  <Heading>Third</Heading>
                </article>
                <article>
                  <Heading>Fourth</Heading>
                </article>
              </Scroll>
            );
          `
        }
        result={
          <Scroll style={{ maxWidth: '15rem' }}>
            <article>
              <Heading>First</Heading>
            </article>
            <article>
              <Heading>Second</Heading>
            </article>
            <article>
              <Heading>Third</Heading>
            </article>
            <article>
              <Heading>Fourth</Heading>
            </article>
          </Scroll>
        }
        screenshot
      />
    }
  />
);

export default ScrollComponentPage;
