// ignore unused exports default

import Blockquote from 'device-agnostic-ui/Blockquote.mjs';
import LinkText from 'device-agnostic-ui/LinkText.mjs';
import Margin from 'device-agnostic-ui/Margin.mjs';
import Para from 'device-agnostic-ui/Para.mjs';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkElement } from '../../components/LinkElement';
import { Blockquote as BlockquoteComponentMeta } from '../../meta/components';

const BlockquoteComponentPage = () => (
  <ComponentPage
    componentMeta={BlockquoteComponentMeta}
    componentIntro={
      <Para>
        It implements the <LinkElement element="blockquote" /> element.
      </Para>
    }
    componentPropsContent={
      <Margin>
        <Para>
          Use any valid <LinkElement element="blockquote" /> props.
        </Para>
      </Margin>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption={<>Containing simple text.</>}
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import Blockquote from 'device-agnostic-ui/Blockquote.mjs';

              const result = (
                <Blockquote>
                  Great minds discuss ideas, average minds discuss events, small minds discuss
                  people.
                </Blockquote>
              );
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
            /* syntax-highlight jsx */ /* JSX */ `
              import Blockquote from 'device-agnostic-ui/Blockquote.mjs';
              import LinkText from 'device-agnostic-ui/LinkText.mjs';
              import Para from 'device-agnostic-ui/Para.mjs';

              const result = (
                <Blockquote>
                  <Para>
                    Great minds discuss ideas, average minds discuss events, small minds
                    discuss people.
                  </Para>
                  <Para>
                    —{' '}
                    <LinkText href="https://en.wikipedia.org/wiki/Henry_Thomas_Buckle">
                      Henry Thomas Buckle
                    </LinkText>
                  </Para>
                </Blockquote>
              );
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
);

export default BlockquoteComponentPage;
