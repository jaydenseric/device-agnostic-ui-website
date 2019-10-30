import {
  Code,
  LinkActive,
  LinkNav,
  LinkText,
  Margin,
  Nav,
  Para
} from 'device-agnostic-ui'
import { CodeExample } from '../../components/CodeExample'
import { ComponentPage } from '../../components/ComponentPage'
import { LinkComponent } from '../../components/LinkComponent'
import { LinkActive as LinkActiveComponentMeta } from '../../meta/components'

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
          /* syntax-highlight jsx */ `
            import { LinkActive, LinkNav, Nav } from 'device-agnostic-ui'

            <Nav>
              <LinkActive href="/components/LinkActive" passHref>
                <LinkNav>LinkActive</LinkNav>
              </LinkActive>
              <LinkActive href="/components/LinkNav" passHref>
                <LinkNav>LinkNav</LinkNav>
              </LinkActive>
            </Nav>
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
)

export default LinkActiveComponentPage
