// ignore unused exports default

import Code from "device-agnostic-ui/Code.mjs";
import LinkText from "device-agnostic-ui/LinkText.mjs";
import Margin from "device-agnostic-ui/Margin.mjs";
import Para from "device-agnostic-ui/Para.mjs";
import { CodeExample } from "../../components/CodeExample";
import { ComponentPage } from "../../components/ComponentPage";
import { LinkElement } from "../../components/LinkElement";
import { Code as CodeComponentMeta } from "../../meta/components";

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
            /* syntax-highlight jsx */ /* JSX */ `
              import Code from "device-agnostic-ui/Code.mjs";

              const result = <Code>window</Code>;
            `
          }
          result={<Code>window</Code>}
        />
        <CodeExample
          caption="Code in a link."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import Code from "device-agnostic-ui/Code.mjs";
              import LinkText from "device-agnostic-ui/LinkText.mjs";

              const result = (
                <LinkText href="https://developer.mozilla.org/en-US/docs/Web/API/Window">
                  <Code>window</Code>
                </LinkText>
              );
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
            /* syntax-highlight jsx */ /* JSX */ `
              import Code from "device-agnostic-ui/Code.mjs";

              const result = <Code>{"<strong>"}</Code>;
            `
          }
          result={<Code>{"<strong>"}</Code>}
          screenshot
        />
      </>
    }
  />
);

export default CodeComponentPage;
