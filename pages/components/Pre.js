// ignore unused exports default

import { Code, Margin, Para, Pre } from 'device-agnostic-ui';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkElement } from '../../components/LinkElement';
import { Pre as PreComponentMeta } from '../../meta/components';

const PreComponentPage = () => (
  <ComponentPage
    componentMeta={PreComponentMeta}
    componentIntro={
      <>
        <Para>
          It implements the <LinkElement element="pre" /> element.
        </Para>
        <Para>
          Typically used with a <LinkElement element="code" /> element child.
        </Para>
      </>
    }
    componentPropsContent={
      <Margin>
        <Para>
          Use any valid <LinkElement element="pre" /> props.
        </Para>
      </Margin>
    }
    componentExamplesContent={
      <CodeExample
        caption="Multiline HTML code block."
        code={
          /* syntax-highlight jsx */ /* JSX */ `
            import { Code, Pre } from 'device-agnostic-ui';

            const result = (
              <Pre>
                <Code>{\`<section>
              <h1>Header</h1>
            </section>\`}</Code>
              </Pre>
            );
          `
        }
        result={
          <Pre>
            <Code>{`<section>
  <h1>Header</h1>
</section>`}</Code>
          </Pre>
        }
        screenshot
      />
    }
  />
);

export default PreComponentPage;
