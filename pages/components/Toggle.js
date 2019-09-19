import {
  Button,
  Code,
  LinkText,
  Para,
  Scroll,
  Toggle
} from 'device-agnostic-ui'
import React from 'react'
import { CodeExample } from '../../components/CodeExample'
import { ComponentPage } from '../../components/ComponentPage'
import { LinkElement } from '../../components/LinkElement'
import { TypeCard } from '../../components/TypeCard'
import { Toggle as ToggleComponentMeta } from '../../meta/components'

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

const ToggleComponentPage = () => (
  <ComponentPage
    componentMeta={ToggleComponentMeta}
    componentIntro={
      <Para>
        It implements the <LinkElement element="input" /> element with a{' '}
        <LinkText href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox">
          <Code>{`type="checkbox"`}</Code>
        </LinkText>{' '}
        or{' '}
        <LinkText href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio">
          <Code>{`type="radio"`}</Code>
        </LinkText>{' '}
        attribute.
      </Para>
    }
    componentPropsContent={
      <Scroll>
        <TypeCard
          identity={{ name: 'validationMessage', idPrefix: 'prop' }}
          type="String"
          description={
            <>
              Sets the <LinkElement element="input" />{' '}
              <LinkText href="https://html.spec.whatwg.org/dev/form-control-infrastructure.html#dom-cva-validationmessage">
                <Code>validationMessage</Code>
              </LinkText>
              .
            </>
          }
        />
        <TypeCard
          identity={{ name: 'inputProps', idPrefix: 'prop' }}
          type="Object"
          description={
            <>
              Props for the <LinkElement element="input" /> element. Must
              contain either <Code>{`type: 'checkbox'`}</Code> or{' '}
              <Code>{`type: 'radio'`}</Code>.
            </>
          }
          required
        />
        <TypeCard
          identity={{ name: 'children', idPrefix: 'prop' }}
          type={
            <LinkText href="https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx">
              JSX children
            </LinkText>
          }
          description={
            <>
              Label children. Due to the ancestor{' '}
              <LinkElement element="label" /> element, it may only render{' '}
              <LinkText href="https://html.spec.whatwg.org/dev/dom.html#phrasing-content">
                phrasing content
              </LinkText>{' '}
              without <LinkElement element="label" /> elements.
            </>
          }
        />
        <TypeCard
          identity={{ name: '...props', idPrefix: 'prop' }}
          type="…*"
          description={
            <>
              Additional props for the container; a{' '}
              <LinkElement element="label" /> element.
            </>
          }
        />
      </Scroll>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption="Simple checkbox."
          code={
            /* syntax-highlight jsx */ `
              import { Toggle } from 'device-agnostic-ui'

              <Toggle inputProps={{ type: 'checkbox' }}>Label</Toggle>
            `
          }
          result={<Toggle inputProps={{ type: 'checkbox' }}>Label</Toggle>}
        />
        <CodeExample
          caption="Required checkbox."
          code={
            /* syntax-highlight jsx */ `
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
            /* syntax-highlight jsx */ `
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
            /* syntax-highlight jsx */ `
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
            </>
          }
          screenshot
        />
        <CodeExample
          caption="Using an input element ref."
          code={
            /* syntax-highlight jsx */ `
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
)

export default ToggleComponentPage
