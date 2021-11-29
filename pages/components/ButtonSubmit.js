// ignore unused exports default

import ButtonSubmit from 'device-agnostic-ui/ButtonSubmit.mjs';
import Code from 'device-agnostic-ui/Code.mjs';
import LinkText from 'device-agnostic-ui/LinkText.mjs';
import Para from 'device-agnostic-ui/Para.mjs';
import Scroll from 'device-agnostic-ui/Scroll.mjs';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkComponent } from '../../components/LinkComponent';
import { LinkElement } from '../../components/LinkElement';
import { TypeCard } from '../../components/TypeCard';
import { ButtonSubmit as ButtonSubmitComponentMeta } from '../../meta/components';

const ButtonSubmitComponentPage = () => (
  <ComponentPage
    componentMeta={ButtonSubmitComponentMeta}
    componentIntro={
      <Para>
        It implements the <LinkComponent component="Button" /> component.
      </Para>
    }
    componentPropsContent={
      <Scroll>
        <TypeCard
          identity={{ name: 'loading', idPrefix: 'prop' }}
          type="Boolean"
          defaultValue="false"
        >
          <Para>
            When <Code>true</Code>, sets the <LinkElement element="button" />{' '}
            element’s <LinkElement element="button" attribute="disabled" />{' '}
            attribute and indicates loading using{' '}
            <LinkComponent component="Loading" />.
          </Para>
        </TypeCard>
        <TypeCard
          identity={{ name: 'success', idPrefix: 'prop' }}
          type="Boolean"
          defaultValue="false"
        >
          <Para>
            When <Code>true</Code> and the{' '}
            <LinkComponent component="Button" prop="loading" /> prop is{' '}
            <Code>false</Code>, sets the <LinkElement element="button" />{' '}
            element’s <LinkElement element="button" attribute="disabled" />{' '}
            attribute and indicates success with a tick icon.
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
            Content to the left of the loading or success icon, contained in a{' '}
            <LinkElement element="span" /> element.
          </Para>
        </TypeCard>
        <TypeCard identity={{ name: '...props', idPrefix: 'prop' }} type="…*">
          <Para>
            Additional props for the container; a{' '}
            <LinkComponent component="Button" /> component.
          </Para>
        </TypeCard>
      </Scroll>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption="Submit button."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import ButtonSubmit from 'device-agnostic-ui/ButtonSubmit.mjs';

              const result = <ButtonSubmit>Submit</ButtonSubmit>;
            `
          }
          result={<ButtonSubmit>Submit</ButtonSubmit>}
        />
        <CodeExample
          caption="If the form submission is loading."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import ButtonSubmit from 'device-agnostic-ui/ButtonSubmit.mjs';

              const result = <ButtonSubmit loading>Submit</ButtonSubmit>;
            `
          }
          result={<ButtonSubmit loading>Submit</ButtonSubmit>}
        />
        <CodeExample
          caption="If the form submission was successful."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import ButtonSubmit from 'device-agnostic-ui/ButtonSubmit.mjs';

              const result = <ButtonSubmit success>Submit</ButtonSubmit>;
            `
          }
          result={<ButtonSubmit success>Submit</ButtonSubmit>}
          screenshot
        />
      </>
    }
  />
);

export default ButtonSubmitComponentPage;
