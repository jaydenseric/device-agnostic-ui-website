// ignore unused exports default

import {
  Button,
  Code,
  LinkText,
  Para,
  Scroll,
  Toggle,
} from 'device-agnostic-ui';
import React from 'react';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkElement } from '../../components/LinkElement';
import { TypeCard } from '../../components/TypeCard';
import { Toggle as ToggleComponentMeta } from '../../meta/components';

const InputRefExample = () => {
  const ref = React.useRef();
  const onClick = () => ref.current.focus();

  return (
    <>
      <Toggle inputProps={{ type: 'checkbox', ref }} />{' '}
      <Button onClick={onClick}>Focus</Button>
    </>
  );
};

const ToggleComponentPage = () => (
  <ComponentPage
    componentMeta={ToggleComponentMeta}
    componentIntro={
      <Para>
        It implements the <LinkElement element="input" /> element with a{' '}
        <LinkText href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox">
          <Code>type=&quot;checkbox&quot;</Code>
        </LinkText>{' '}
        or{' '}
        <LinkText href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio">
          <Code>type=&quot;radio&quot;</Code>
        </LinkText>{' '}
        attribute.
      </Para>
    }
    componentPropsContent={
      <Scroll>
        <TypeCard
          identity={{ name: 'validationMessage', idPrefix: 'prop' }}
          type="String"
        >
          <Para>
            Sets the <LinkElement element="input" />{' '}
            <LinkText href="https://html.spec.whatwg.org/dev/form-control-infrastructure.html#dom-cva-validationmessage">
              <Code>validationMessage</Code>
            </LinkText>
            .
          </Para>
        </TypeCard>
        <TypeCard
          identity={{ name: 'inputProps', idPrefix: 'prop' }}
          type="Object"
          required
        >
          <Para>
            Props for the <LinkElement element="input" /> element. Must contain
            either <Code>type: &apos;checkbox&apos;</Code> or{' '}
            <Code>type: &apos;radio&apos;</Code>.
          </Para>
        </TypeCard>
        <TypeCard
          identity={{ name: 'children', idPrefix: 'prop' }}
          type={
            <LinkText href="https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx">
              JSX children
            </LinkText>
          }
        >
          <Para>
            Label children. Due to the ancestor <LinkElement element="label" />{' '}
            element, it may only render{' '}
            <LinkText href="https://html.spec.whatwg.org/dev/dom.html#phrasing-content">
              phrasing content
            </LinkText>{' '}
            without <LinkElement element="label" /> elements.
          </Para>
        </TypeCard>
        <TypeCard identity={{ name: '...props', idPrefix: 'prop' }} type="…*">
          <Para>
            Additional props for the container; a{' '}
            <LinkElement element="label" /> element.
          </Para>
        </TypeCard>
      </Scroll>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption="Simple checkbox."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Toggle } from 'device-agnostic-ui'

              <Toggle inputProps={{ type: 'checkbox' }}>Label</Toggle>
            `
          }
          result={<Toggle inputProps={{ type: 'checkbox' }}>Label</Toggle>}
        />
        <CodeExample
          caption="Required checkbox."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Toggle } from 'device-agnostic-ui'

              <Toggle inputProps={{ type: 'checkbox', required: true }}>
                Label
              </Toggle>
            `
          }
          result={
            <Toggle inputProps={{ type: 'checkbox', required: true }}>
              Label
            </Toggle>
          }
        />
        <CodeExample
          caption="Checkbox with a custom validation message."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Toggle } from 'device-agnostic-ui'

              <Toggle
                validationMessage="Custom message."
                inputProps={{ type: 'checkbox' }}
              >
                Label
              </Toggle>
            `
          }
          result={
            <Toggle
              validationMessage="Custom message."
              inputProps={{ type: 'checkbox' }}
            >
              Label
            </Toggle>
          }
        />
        <CodeExample
          caption="Radio group."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Button } from 'device-agnostic-ui'

              <Toggle
                inputProps={{
                  type: 'radio',
                  name: 'options',
                  value: 'a',
                  defaultChecked: true
                }}
              >
                Label A
              </Toggle>
              <Toggle
                inputProps={{
                  type: 'radio',
                  name: 'options',
                  value: 'b'
                }}
              >
                Label B
              </Toggle>
            `
          }
          result={
            <>
              <Toggle
                inputProps={{
                  type: 'radio',
                  name: 'options',
                  value: 'a',
                  defaultChecked: true,
                }}
              >
                Label A
              </Toggle>
              <Toggle
                inputProps={{
                  type: 'radio',
                  name: 'options',
                  value: 'b',
                }}
              >
                Label B
              </Toggle>
            </>
          }
          screenshot
        />
        <CodeExample
          caption="Using an input element ref."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Button, Toggle } from 'device-agnostic-ui'
              import React from 'react'

              const InputRefExample = () => {
                const ref = React.useRef()
                const onClick = () => ref.current.focus()

                return (
                  <>
                    <Toggle inputProps={{ type: 'checkbox', ref }} />{' '}
                    <Button onClick={onClick}>Focus</Button>
                  </>
                )
              }

              <InputRefExample />
            `
          }
          result={<InputRefExample />}
        />
      </>
    }
  />
);

export default ToggleComponentPage;
