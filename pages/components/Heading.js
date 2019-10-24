import { Heading, LinkText, Para, Scroll } from 'device-agnostic-ui'
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
      </>
    }
    componentPropsContent={
      <Scroll>
        <TypeCard
          identity={{ name: 'id', idPrefix: 'prop' }}
          type="String"
          description={
            <>
              Sets the <LinkElement element="h1" /> element’s{' '}
              <LinkElement element="h1" attribute="id" /> attribute and wraps
              children with a <LinkComponent component="LinkText" /> component
              that links to it.
            </>
          }
        />
        <TypeCard
          identity={{ name: 'children', idPrefix: 'prop' }}
          type={
            <LinkText href="https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx">
              JSX children
            </LinkText>
          }
          required
          description={
            <>
              Content contained in the <LinkElement element="h1" /> element, or
              in a <LinkComponent component="LinkText" /> if the{' '}
              <LinkComponent component="Heading" prop="id" /> prop is specified.
            </>
          }
        />
        <TypeCard
          identity={{ name: '...props', idPrefix: 'prop' }}
          type="…*"
          description={
            <>
              Additional props for the container; a <LinkElement element="h1" />{' '}
              element.
            </>
          }
        />
      </Scroll>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption="Simple heading."
          code={
            /* syntax-highlight jsx */ `
              import { Heading } from 'device-agnostic-ui'

              <Heading>Heading</Heading>
            `
          }
          result={<Heading>Heading</Heading>}
          screenshot
        />
        <CodeExample
          caption="With an ID."
          code={
            /* syntax-highlight jsx */ `
              import { Heading } from 'device-agnostic-ui'

              <Heading id="heading">Heading</Heading>
            `
          }
          result={<Heading id="heading">Heading</Heading>}
        />
        <CodeExample
          caption="Large, responsive font size suitable for a primary page heading."
          code={
            /* syntax-highlight jsx */ `
              import { Heading } from 'device-agnostic-ui'

              <Heading style={{ fontSize: 'calc(2rem + 3vw)' }}>Heading</Heading>
            `
          }
          result={
            <Heading style={{ fontSize: 'calc(2rem + 3vw)' }}>Heading</Heading>
          }
        />
      </>
    }
  />
)

export default HeadingComponentPage
