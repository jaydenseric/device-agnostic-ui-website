import { Blockquote, LinkText, Para } from 'device-agnostic-ui'
import { CodeExample } from '../../components/CodeExample'
import { ComponentPage } from '../../components/ComponentPage'
import { Inset } from '../../components/Inset'
import { LinkElement } from '../../components/LinkElement'
import { Blockquote as BlockquoteComponentMeta } from '../../meta/components'

const BlockquoteComponentPage = () => (
  <ComponentPage
    componentMeta={BlockquoteComponentMeta}
    componentIntro={
      <Para>
        It implements the <LinkElement element="blockquote" /> element.
      </Para>
    }
    componentPropsContent={
      <Inset>
        <Para>
          Use any valid <LinkElement element="blockquote" /> props.
        </Para>
      </Inset>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption={<>Containing simple text.</>}
          code={
            /* syntax-highlight jsx */ `
              import { Blockquote } from 'device-agnostic-ui'

              <Blockquote>
                Great minds discuss ideas, average minds discuss events, small
                minds discuss people.
              </Blockquote>
            `
          }
          result={
            <Blockquote>
              Great minds discuss ideas, average minds discuss events, small
              minds discuss people.
            </Blockquote>
          }
        />
        <CodeExample
          caption={
            <>
              Containing basic HTML, achievable via{' '}
              <LinkText href="https://github.github.com/gfm">
                GitHub Flavored Markdown (GFM)
              </LinkText>
              .
            </>
          }
          code={
            /* syntax-highlight jsx */ `
              import { Blockquote, LinkText, Para } from 'device-agnostic-ui'

              <Blockquote>
                <Para>
                  Great minds discuss ideas, average minds discuss events, small
                  minds discuss people.
                </Para>
                <Para>
                  —{' '}
                  <LinkText href="https://en.wikipedia.org/wiki/Henry_Thomas_Buckle">
                    Henry Thomas Buckle
                  </LinkText>
                </Para>
              </Blockquote>
            `
          }
          result={
            <Blockquote>
              <Para>
                Great minds discuss ideas, average minds discuss events, small
                minds discuss people.
              </Para>
              <Para>
                —{' '}
                <LinkText href="https://en.wikipedia.org/wiki/Henry_Thomas_Buckle">
                  Henry Thomas Buckle
                </LinkText>
              </Para>
            </Blockquote>
          }
          screenshot
        />
      </>
    }
  />
)

export default BlockquoteComponentPage
