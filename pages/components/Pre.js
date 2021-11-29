// ignore unused exports default

import Code from "device-agnostic-ui/Code.mjs";
import Margin from "device-agnostic-ui/Margin.mjs";
import Para from "device-agnostic-ui/Para.mjs";
import Pre from "device-agnostic-ui/Pre.mjs";
import { CodeExample } from "../../components/CodeExample";
import { ComponentPage } from "../../components/ComponentPage";
import { LinkElement } from "../../components/LinkElement";
import { Pre as PreComponentMeta } from "../../meta/components";

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
            import Code from "device-agnostic-ui/Code.mjs";
            import Pre from "device-agnostic-ui/Pre.mjs";

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
