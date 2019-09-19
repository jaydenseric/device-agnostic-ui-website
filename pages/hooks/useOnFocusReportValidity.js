import { Code, LinkText, Para, Scroll } from 'device-agnostic-ui'
import Link from 'next/link'
import { CodeExample } from '../../components/CodeExample'
import { HookPage } from '../../components/HookPage'
import { LinkComponent } from '../../components/LinkComponent'
import { TypeCard } from '../../components/TypeCard'
import { useOnFocusReportValidity as useOnFocusReportValidityMeta } from '../../meta/hooks'

const UseOnFocusReportValidityHookPage = () => (
  <HookPage
    hookMeta={useOnFocusReportValidityMeta}
    hookIntro={
      <>
        <Para>
          When the HTML form control element is focused it’s{' '}
          <LinkText href="https://html.spec.whatwg.org/dev/form-control-infrastructure.html#dom-cva-reportvalidity">
            <Code>reportValidity</Code>
          </LinkText>{' '}
          method is used to show it’s{' '}
          <LinkText href="https://html.spec.whatwg.org/dev/form-control-infrastructure.html#dom-cva-validationmessage">
            <Code>validationMessage</Code>
          </LinkText>{' '}
          in a native tooltip, if the control is invalid.
        </Para>
        <Para>
          This allows users to see why form fields are invalid without having to
          submit the form.
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
      </Scroll>
    }
    hookExamplesContent={
      <CodeExample
        caption={
          <>
            A contrived usage example; normally you would use{' '}
            <LinkComponent component="Textbox" /> which has this built-in.
          </>
        }
        code={
          /* syntax-highlight jsx */ `
            import { useOnFocusReportValidity } from 'device-agnostic-ui'
            import React from 'react'

            const Input = ({ validationMessage, ...props }) => {
              const ref = React.useRef()

              useOnFocusReportValidity(ref)

              return <input {...props} ref={ref} />
            }

            <Input type="email" />
          `
        }
      />
    }
  />
)

export default UseOnFocusReportValidityHookPage
