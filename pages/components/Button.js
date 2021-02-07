// ignore unused exports default

import { Button, Margin, Para } from 'device-agnostic-ui';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkElement } from '../../components/LinkElement';
import { Button as ButtonComponentMeta } from '../../meta/components';

const ButtonComponentPage = () => (
  <ComponentPage
    componentMeta={ButtonComponentMeta}
    componentIntro={
      <>
        <Para>
          It implements the <LinkElement element="button" /> element.
        </Para>
        <Para>
          It automatically has the{' '}
          <LinkElement element="button" attribute="disabled" /> attribute until
          mounted, to prevent a default action from happening if the user clicks
          quickly after SSR.
        </Para>
        <Para>
          <strong>Note:</strong> Links are semantically different and have
          separate, distinctly styled components.
        </Para>
      </>
    }
    componentPropsContent={
      <Margin>
        <Para>
          Use any valid <LinkElement element="button" /> props.
        </Para>
      </Margin>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption="Simple button."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Button } from 'device-agnostic-ui';

              const result = <Button>Label</Button>;
            `
          }
          result={<Button>Label</Button>}
          screenshot
        />
        <CodeExample
          caption="Disabled button."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Button } from 'device-agnostic-ui';

              const result = <Button disabled>Label</Button>;
            `
          }
          result={<Button disabled>Label</Button>}
        />
      </>
    }
  />
);

export default ButtonComponentPage;
