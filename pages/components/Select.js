// ignore unused exports default

import { Code, LinkText, Para, Scroll, Select } from 'device-agnostic-ui';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkComponent } from '../../components/LinkComponent';
import { LinkElement } from '../../components/LinkElement';
import { TypeCard } from '../../components/TypeCard';
import { Select as SelectComponentMeta } from '../../meta/components';

const SelectComponentPage = () => (
  <ComponentPage
    componentMeta={SelectComponentMeta}
    componentIntro={
      <Para>
        It implements the <LinkElement element="select" /> element.
      </Para>
    }
    componentPropsContent={
      <Scroll>
        <TypeCard
          identity={{ name: 'validationMessage', idPrefix: 'prop' }}
          type="String"
        >
          <Para>
            Sets the <LinkElement element="select" />{' '}
            <LinkText href="https://html.spec.whatwg.org/dev/form-control-infrastructure.html#dom-cva-validationmessage">
              <Code>validationMessage</Code>
            </LinkText>
            .
          </Para>
        </TypeCard>
        <TypeCard
          identity={{ name: 'children', idPrefix: 'prop' }}
          type={
            <LinkText href="https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx">
              JSX children
            </LinkText>
          }
          required
        >
          <Para>
            <LinkElement element="select" /> element children;{' '}
            <LinkElement element="optgroup" /> or{' '}
            <LinkElement element="option" /> elements.
          </Para>
        </TypeCard>
        <TypeCard identity={{ name: '...props', idPrefix: 'prop' }} type="…*">
          <Para>
            Additional props for the container; a{' '}
            <LinkElement element="select" /> element.
          </Para>
        </TypeCard>
      </Scroll>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption="Simple."
          code={
            /* syntax-highlight jsx */ `
              import { Select } from 'device-agnostic-ui'

              <Select>
                <option>Option A</option>
                <option>Option B</option>
              </Select>
            `
          }
          result={
            <Select>
              <option>Option A</option>
              <option>Option B</option>
            </Select>
          }
          screenshot
        />
        <CodeExample
          caption="Required, with a placeholder option."
          code={
            /* syntax-highlight jsx */ `
              import { Select } from 'device-agnostic-ui'

              <Select required>
                <option value="" disabled selected>Options</option>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
              </Select>
            `
          }
          result={
            <Select required defaultValue="">
              <option value="" disabled>
                Options
              </option>
              <option value="A">Option A</option>
              <option value="B">Option B</option>
            </Select>
          }
        />
        <CodeExample
          caption="With a default value."
          code={
            /* syntax-highlight jsx */ `
              import { Select } from 'device-agnostic-ui'

              <Select value="B">
                <option value="A">Option A</option>
                <option value="B">Option B</option>
              </Select>
            `
          }
          result={
            <Select defaultValue="B">
              <option value="A">Option A</option>
              <option value="B">Option B</option>
            </Select>
          }
        />
        <CodeExample
          caption={
            <>
              With multiple option selection allowed. <strong>Note:</strong> Due
              to cross browser rendering and usability issues it’s recommended
              to use a <LinkComponent component="Toggle" /> group instead.
            </>
          }
          code={
            /* syntax-highlight jsx */ `
              import { Select } from 'device-agnostic-ui'

              <Select multiple size="2">
                <option>Option A</option>
                <option>Option B</option>
              </Select>
            `
          }
          result={
            <Select multiple size="2">
              <option>Option A</option>
              <option>Option B</option>
            </Select>
          }
        />
        <CodeExample
          caption="With a size matching the count of options + groups."
          code={
            /* syntax-highlight jsx */ `
              import { Select } from 'device-agnostic-ui'

              <Select size="6">
                <optgroup label="Group 1">
                  <option>Option A</option>
                  <option>Option B</option>
                </optgroup>
                <optgroup label="Group 2">
                  <option>Option C</option>
                  <option>Option D</option>
                </optgroup>
              </Select>
            `
          }
          result={
            <Select size="6">
              <optgroup label="Group 1">
                <option>Option A</option>
                <option>Option B</option>
              </optgroup>
              <optgroup label="Group 2">
                <option>Option C</option>
                <option>Option D</option>
              </optgroup>
            </Select>
          }
        />
      </>
    }
  />
);

export default SelectComponentPage;
