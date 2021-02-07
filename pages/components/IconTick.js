// ignore unused exports default

import { IconTick, Margin, Para } from 'device-agnostic-ui';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkComponent } from '../../components/LinkComponent';
import { IconTick as IconTickComponentMeta } from '../../meta/components';

const IconComponentPage = () => (
  <ComponentPage
    componentMeta={IconTickComponentMeta}
    componentIntro={
      <Para>
        It implements the <LinkComponent component="Icon" /> component.
      </Para>
    }
    componentPropsContent={
      <Margin>
        <Para>
          Use any valid <LinkComponent component="Icon" /> props, except{' '}
          <LinkComponent component="Icon" prop="children" />.
        </Para>
      </Margin>
    }
    componentExamplesContent={
      <CodeExample
        caption={<>How to use the icon.</>}
        code={
          /* syntax-highlight jsx */ /* JSX */ `
            import { IconTick } from 'device-agnostic-ui'

            <IconTick size="2em" />
          `
        }
        result={<IconTick size="2em" />}
        screenshot
      />
    }
  />
);

export default IconComponentPage;
