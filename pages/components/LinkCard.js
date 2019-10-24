import { LinkCard, Para, Picture, Scroll } from 'device-agnostic-ui'
import { CodeExample } from '../../components/CodeExample'
import { ComponentPage } from '../../components/ComponentPage'
import { LinkComponent } from '../../components/LinkComponent'
import { LinkElement } from '../../components/LinkElement'
import { TypeCard } from '../../components/TypeCard'
import { LinkCard as LinkCardComponentMeta } from '../../meta/components'

const LinkCardComponentPage = () => (
  <ComponentPage
    componentMeta={LinkCardComponentMeta}
    componentIntro={
      <>
        <Para>
          It implements the <LinkElement element="a" /> element.
        </Para>
        <Para>
          Typically displayed in a <LinkComponent component="Scroll" />{' '}
          component.
        </Para>
      </>
    }
    componentPropsContent={
      <Scroll>
        <TypeCard
          identity={{ name: 'active', idPrefix: 'prop' }}
          type="Boolean"
          defaultValue="false"
          description="Does the link refer to the current page."
        />
        <TypeCard
          identity={{ name: '...props', idPrefix: 'prop' }}
          type="…*"
          description={
            <>
              Additional props for the container; an <LinkElement element="a" />{' '}
              element.
            </>
          }
        />
      </Scroll>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption="A picture link card."
          code={
            /* syntax-highlight jsx */ `
            import { LinkCard, Table } from 'device-agnostic-ui'

            <LinkCard href="/static/example-picture/example.svg">
              <Picture
                width={157}
                height={100}
                alt="Alternate text."
                src="/static/example-picture/example.svg"
              />
            </LinkCard>
          `
          }
          result={
            <LinkCard href="/static/example-picture/example.svg">
              <Picture
                width={157}
                height={100}
                alt="Alternate text."
                src="/static/example-picture/example.svg"
              />
            </LinkCard>
          }
          screenshot
        />
        <CodeExample
          caption="An active picture link card."
          code={
            /* syntax-highlight jsx */ `
            import { LinkCard, Table } from 'device-agnostic-ui'

            <LinkCard active href="/static/example-picture/example.svg">
              <Picture
                width={157}
                height={100}
                alt="Alternate text."
                src="/static/example-picture/example.svg"
              />
            </LinkCard>
          `
          }
          result={
            <LinkCard active href="/static/example-picture/example.svg">
              <Picture
                width={157}
                height={100}
                alt="Alternate text."
                src="/static/example-picture/example.svg"
              />
            </LinkCard>
          }
        />
      </>
    }
  />
)

export default LinkCardComponentPage
