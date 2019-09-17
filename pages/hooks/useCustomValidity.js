import { jsx } from 'babel-plugin-syntax-highlight'
import { Code, LinkText, Para, Scroll } from 'device-agnostic-ui'
import Link from 'next/link'
import { CodeExample } from '../../components/CodeExample'
import { HookPage } from '../../components/HookPage'
import { LinkComponent } from '../../components/LinkComponent'
import { TypeCard } from '../../components/TypeCard'
import { useCustomValidity as useCustomValidityMeta } from '../../meta/hooks'

const UseCustomValidityHookPage = () => (
  <HookPage
    hookMeta={useCustomValidityMeta}
    hookIntro={
      <>
        <Para>
          It uses the HTML form control element’s{' '}
          <LinkText href="https://html.spec.whatwg.org/dev/form-control-infrastructure.html#dom-cva-setcustomvalidity">
            <Code>setCustomValidity</Code>
          </LinkText>{' '}
          method to set a custom{' '}
          <LinkText href="https://html.spec.whatwg.org/dev/form-control-infrastructure.html#dom-cva-validationmessage">
            <Code>validationMessage</Code>
          </LinkText>{' '}
          that displays a native tooltip and activates the CSS{' '}
          <LinkText href="https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid">
            <Code>:invalid</Code>
          </LinkText>{' '}
          pseudo-class.
        </Para>
        <Para>
          Useful when making form control components from scratch; it’s used by
          many of the{' '}
          <Link href="/components?tags=forms" passHref>
            <LinkText>form components</LinkText>
          </Link>
          .
        </Para>
      </>
    }
    hookParametersContent={
      <Scroll>
        <TypeCard
          identity={{ name: 'ref', idPrefix: 'parameter' }}
          type={
            <LinkText href="https://reactjs.org/docs/refs-and-the-dom.html">
              React ref
            </LinkText>
          }
          required
          description="React ref for the HTML form control element."
        />
        <TypeCard
          identity={{ name: 'validationMessage', idPrefix: 'parameter' }}
          type="String"
          defaultValue="''"
          description="Validation message for the HTML form control element. An empty string means valid."
        />
      </Scroll>
    }
    hookExamplesContent={
      <CodeExample
        caption={
          <>
            A contrived usage example; normally you would use{' '}
            <LinkComponent component="Textbox" /> which has a{' '}
            <LinkComponent component="Textbox" prop="validationMessage" /> prop.
          </>
        }
        code={jsx`
          import { useCustomValidity } from 'device-agnostic-ui'
          import React from 'react'

          const Input = ({ validationMessage, ...props }) => {
            const ref = React.useRef()

            useCustomValidity(ref, validationMessage)

            return <input {...props} ref={ref} />
          }

          <Input
            type="email"
            validationMessage="Email address already registered."
          />
        `}
      />
    }
  />
)

export default UseCustomValidityHookPage
