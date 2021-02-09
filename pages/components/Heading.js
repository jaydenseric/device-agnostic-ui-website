// ignore unused exports default

import { Code, Heading, LinkText, Para, Scroll } from 'device-agnostic-ui';
import Link from 'next/link';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkComponent } from '../../components/LinkComponent';
import { LinkElement } from '../../components/LinkElement';
import { TypeCard } from '../../components/TypeCard';
import { Heading as HeadingComponentMeta } from '../../meta/components';

const HEADING_ELEMENT_URL =
  'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements';

const HeadingComponentPage = () => (
  <ComponentPage
    componentMeta={HeadingComponentMeta}
    componentIntro={
      <>
        <Para>
          It implements the <LinkElement element="h1" />,{' '}
          <LinkElement element="h2" />, <LinkElement element="h3" />,{' '}
          <LinkElement element="h4" />, <LinkElement element="h5" />, or{' '}
          <LinkElement element="h6" /> element.
        </Para>
        <Para>
          It should be nested under a sectioning element such as{' '}
          <LinkElement element="section" /> or <LinkElement element="article" />{' '}
          for a semantic{' '}
          <LinkText href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines">
            HTML document outline
          </LinkText>
          .
        </Para>
      </>
    }
    componentPropsContent={
      <Scroll>
        <TypeCard
          identity={{ name: 'level', idPrefix: 'prop' }}
          type={
            <>
              <Code>1</Code> | <Code>2</Code> | <Code>3</Code> | <Code>4</Code>{' '}
              | <Code>5</Code> | <Code>6</Code>
            </>
          }
          defaultValue="1"
        >
          <Para>
            Sets the{' '}
            <LinkText href={HEADING_ELEMENT_URL}>heading element</LinkText>{' '}
            used, e.g. <LinkElement element="h1" />.
          </Para>
        </TypeCard>
        <TypeCard
          identity={{ name: 'size', idPrefix: 'prop' }}
          type={
            <>
              <Code>1</Code> | <Code>2</Code> | <Code>3</Code> | <Code>4</Code>{' '}
              | <Code>5</Code> | <Code>6</Code>
            </>
          }
        >
          <Para>
            Sets the CSS <Code>font-size</Code> via a{' '}
            <Link href="/styles#theme-styles" passHref>
              <LinkText>global theme</LinkText>
            </Link>{' '}
            CSS variable, e.g. <Code>--daui-h1-font-size</Code>. Omit if setting
            a custom <Code>font-size</Code>.
          </Para>
        </TypeCard>
        <TypeCard identity={{ name: 'id', idPrefix: 'prop' }} type="String">
          <Para>
            Sets an{' '}
            <LinkText href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id">
              <Code>id</Code>
            </LinkText>{' '}
            attribute on the{' '}
            <LinkText href={HEADING_ELEMENT_URL}>heading element</LinkText> and
            nests children in a <LinkComponent component="LinkText" /> component
            that links to it.
          </Para>
        </TypeCard>
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
            Content contained in the{' '}
            <LinkText href={HEADING_ELEMENT_URL}>heading element</LinkText>,
            nested in a <LinkComponent component="LinkText" /> if the{' '}
            <LinkComponent component="Heading" prop="id" /> prop is specified.
          </Para>
        </TypeCard>
        <TypeCard identity={{ name: '...props', idPrefix: 'prop' }} type="…*">
          <Para>
            Additional props for the container; a{' '}
            <LinkText href={HEADING_ELEMENT_URL}>heading element</LinkText>.
          </Para>
        </TypeCard>
      </Scroll>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption="Suitable for a primary page heading."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Heading } from 'device-agnostic-ui';

              const result = <Heading size={1}>Heading</Heading>;
            `
          }
          result={<Heading size={1}>Heading</Heading>}
          screenshot
        />
        <CodeExample
          caption="Suitable for a secondary page heading, with an ID."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Heading } from 'device-agnostic-ui';

              const result = (
                <Heading level={2} size={2} id="heading">
                  Heading
                </Heading>
              );
            `
          }
          result={
            <Heading level={2} size={2} id="heading">
              Heading
            </Heading>
          }
        />
      </>
    }
  />
);

export default HeadingComponentPage;
