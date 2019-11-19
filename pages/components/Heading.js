import { Code, Heading, LinkText, List, Para, Scroll } from 'device-agnostic-ui'
import Link from 'next/link'
import { CodeExample } from '../../components/CodeExample'
import { ComponentPage } from '../../components/ComponentPage'
import { LinkComponent } from '../../components/LinkComponent'
import { LinkElement } from '../../components/LinkElement'
import { TypeCard } from '../../components/TypeCard'
import { Heading as HeadingComponentMeta } from '../../meta/components'

const HeadingComponentPage = () => (
  <ComponentPage
    componentMeta={HeadingComponentMeta}
    componentIntro={
      <>
        <Para>
          It implements the <LinkElement element="h1" /> element.
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
        <Para>
          The{' '}
          <Link href="/styles#stylesGlobalTheme" passHref>
            <LinkText>global theme</LinkText>
          </Link>{' '}
          provides a range of responsive heading font size CSS variables that
          can be manually applied:
        </Para>
        <List ordered>
          <li>
            <Code>--daui-h1-font-size</Code>
          </li>
          <li>
            <Code>--daui-h2-font-size</Code>
          </li>
          <li>
            <Code>--daui-h3-font-size</Code>
          </li>
          <li>
            <Code>--daui-h4-font-size</Code>
          </li>
          <li>
            <Code>--daui-h5-font-size</Code>
          </li>
          <li>
            <Code>--daui-h6-font-size</Code>
          </li>
        </List>
      </>
    }
    componentPropsContent={
      <Scroll>
        <TypeCard identity={{ name: 'id', idPrefix: 'prop' }} type="String">
          <Para>
            Sets the <LinkElement element="h1" /> element’s{' '}
            <LinkElement element="h1" attribute="id" /> attribute and wraps
            children with a <LinkComponent component="LinkText" /> component
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
            Content contained in the <LinkElement element="h1" /> element, or in
            a <LinkComponent component="LinkText" /> if the{' '}
            <LinkComponent component="Heading" prop="id" /> prop is specified.
          </Para>
        </TypeCard>
        <TypeCard identity={{ name: '...props', idPrefix: 'prop' }} type="…*">
          <Para>
            Additional props for the container; a <LinkElement element="h1" />{' '}
            element.
          </Para>
        </TypeCard>
      </Scroll>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption="Suitable for a primary page heading."
          code={
            /* syntax-highlight jsx */ `
              import { Heading } from 'device-agnostic-ui'

              <Heading style={{ fontSize: 'var(--daui-h1-font-size)' }}>Heading</Heading>
            `
          }
          result={
            <Heading style={{ fontSize: 'var(--daui-h1-font-size)' }}>
              Heading
            </Heading>
          }
          screenshot
        />
        <CodeExample
          caption="Suitable for a secondary page heading, with an ID."
          code={
            /* syntax-highlight jsx */ `
              import { Heading } from 'device-agnostic-ui'

              <Heading
                id="heading"
                style={{ fontSize: 'var(--daui-h2-font-size)' }}
              >
                Heading
              </Heading>
            `
          }
          result={
            <Heading
              id="heading"
              style={{ fontSize: 'var(--daui-h2-font-size)' }}
            >
              Heading
            </Heading>
          }
        />
      </>
    }
  />
)

export default HeadingComponentPage
