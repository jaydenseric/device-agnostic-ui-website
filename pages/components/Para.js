// ignore unused exports default

import Margin from 'device-agnostic-ui/public/components/Margin.js';
import Para from 'device-agnostic-ui/public/components/Para.js';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkElement } from '../../components/LinkElement';
import { Para as ParaComponentMeta } from '../../meta/components';

const ParaComponentPage = () => (
  <ComponentPage
    componentMeta={ParaComponentMeta}
    componentIntro={
      <Para>
        It implements the <LinkElement element="p" /> element.
      </Para>
    }
    componentPropsContent={
      <Margin>
        <Para>
          Use any valid <LinkElement element="p" /> props.
        </Para>
      </Margin>
    }
    componentExamplesContent={
      <CodeExample
        caption="Simple paragraph."
        code={
          /* syntax-highlight jsx */ /* JSX */ `
            import { Para } from 'device-agnostic-ui';

            const result = (
              <Para>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </Para>
            );
          `
        }
        result={
          <Para>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Para>
        }
        screenshot
      />
    }
  />
);

export default ParaComponentPage;
