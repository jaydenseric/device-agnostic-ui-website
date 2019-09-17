import { jsx } from 'babel-plugin-syntax-highlight'
import { LinkActive, LinkNav, Nav, Para, Scroll } from 'device-agnostic-ui'
import { CodeExample } from '../../components/CodeExample'
import { ComponentPage } from '../../components/ComponentPage'
import { LinkComponent } from '../../components/LinkComponent'
import { LinkElement } from '../../components/LinkElement'
import { TypeCard } from '../../components/TypeCard'
import { LinkNav as LinkNavComponentMeta } from '../../meta/components'

const LinkNavComponentPage = () => (
  <ComponentPage
    componentMeta={LinkNavComponentMeta}
    componentIntro={
      <>
        <Para>
          It implements the <LinkElement element="a" /> element.
        </Para>
        <Para>
          It should be wrapped in the <LinkComponent component="LinkNav" />{' '}
          component for an internal Next.js route link.
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
      <CodeExample
        caption={
          <>
            With internal Next.js route links (using the{' '}
            <LinkComponent component="LinkActive" /> component).
          </>
        }
        code={jsx`
          import { LinkActive, LinkNav, Nav } from 'device-agnostic-ui'

          <Nav>
            <LinkActive href="/components/LinkNav" passHref>
              <LinkNav>LinkNav</LinkNav>
            </LinkActive>
            <LinkActive href="/components/Nav" passHref>
              <LinkNav>Nav</LinkNav>
            </LinkActive>
          </Nav>
        `}
        result={
          <Nav>
            <LinkActive href="/components/LinkNav" passHref>
              <LinkNav>LinkNav</LinkNav>
            </LinkActive>
            <LinkActive href="/components/Nav" passHref>
              <LinkNav>Nav</LinkNav>
            </LinkActive>
          </Nav>
        }
        screenshot
      />
    }
  />
)

export default LinkNavComponentPage
