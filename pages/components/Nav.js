import { LinkActive, LinkNav, Nav, Para } from 'device-agnostic-ui'
import { CodeExample } from '../../components/CodeExample'
import { ComponentPage } from '../../components/ComponentPage'
import { Inset } from '../../components/Inset'
import { LinkComponent } from '../../components/LinkComponent'
import { LinkElement } from '../../components/LinkElement'
import { Nav as NavComponentMeta } from '../../meta/components'

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
      <Inset>
        <Para>
          Use any valid <LinkElement element="nav" /> props.
        </Para>
      </Inset>
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
          /* syntax-highlight jsx */ `
            import { LinkActive, LinkNav, Nav } from 'device-agnostic-ui'

            <Nav>
              <LinkActive href="/" passHref>
                <LinkNav>Home</LinkNav>
              </LinkActive>
              <LinkNav href="https://github.com/jaydenseric/device-agnostic-ui">
                GitHub
              </LinkNav>
            </Nav>
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
)

export default NavComponentPage
