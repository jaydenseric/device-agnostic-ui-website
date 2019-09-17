import { jsx } from 'babel-plugin-syntax-highlight'
import { Heading, List, Para, Scroll } from 'device-agnostic-ui'
import { CodeExample } from '../../components/CodeExample'
import { ComponentPage } from '../../components/ComponentPage'
import { Inset } from '../../components/Inset'
import { LinkElement } from '../../components/LinkElement'
import { Scroll as ScrollComponentMeta } from '../../meta/components'

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
      <Inset>
        <Para>
          Use any valid <LinkElement element="div" /> props.
        </Para>
      </Inset>
    }
    componentExamplesContent={
      <CodeExample
        caption="Several articles."
        code={jsx`
          import { Heading, Scroll } from 'device-agnostic-ui'

          <Scroll>
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
        `}
        result={
          <Scroll>
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
)

export default ScrollComponentPage
