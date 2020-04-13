import { Code, LinkText, Margin, Para } from 'device-agnostic-ui';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkElement } from '../../components/LinkElement';
import { Code as CodeComponentMeta } from '../../meta/components';

const CodeComponentPage = () => (
  <ComponentPage
    componentMeta={CodeComponentMeta}
    componentIntro={
      <Para>
        It implements the <LinkElement element="code" /> element.
      </Para>
    }
    componentPropsContent={
      <Margin>
        <Para>
          Use any valid <LinkElement element="code" /> props.
        </Para>
      </Margin>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption="Non-HTML code."
          code={
            /* syntax-highlight jsx */ `
              import { Code } from 'device-agnostic-ui'

              <Code>window</Code>
            `
          }
          result={<Code>window</Code>}
        />
        <CodeExample
          caption="Code in a link."
          code={
            /* syntax-highlight jsx */ `
              import { Code, LinkText } from 'device-agnostic-ui'

              <LinkText href="https://developer.mozilla.org/en-US/docs/Web/API/Window">
                <Code>window</Code>
              </LinkText>
            `
          }
          result={
            <LinkText href="https://developer.mozilla.org/en-US/docs/Web/API/Window">
              <Code>window</Code>
            </LinkText>
          }
        />
        <CodeExample
          caption="HTML code."
          code={
            /* syntax-highlight jsx */ `
              import { Code } from 'device-agnostic-ui'

              <Code>{'<strong>'}</Code>
            `
          }
          result={<Code>{'<strong>'}</Code>}
          screenshot
        />
      </>
    }
  />
);

export default CodeComponentPage;
