import { jsx } from 'babel-plugin-syntax-highlight'
import { Code, LinkText, Para, Scroll } from 'device-agnostic-ui'
import Link from 'next/link'
import { CodeExample } from '../../components/CodeExample'
import { HookPage } from '../../components/HookPage'
import { Inset } from '../../components/Inset'
import { TypeCard } from '../../components/TypeCard'
import { useMergedRef as useMergedRefMeta } from '../../meta/hooks'

const UseMergedRefHookPage = () => (
  <HookPage
    hookMeta={useMergedRefMeta}
    hookIntro={
      <>
        <Para>
          Useful when a component allows a consumer to sometimes provide a ref
          for an element via{' '}
          <LinkText href="https://reactjs.org/docs/react-api.html#reactforwardref">
            <Code>React.forwardRef</Code>
          </LinkText>
          , but internally the component needs to define it’s own ref for the
          same element. It’s used by many of the{' '}
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
          identity={{ name: 'refs', idPrefix: 'parameter' }}
          type={
            <>
              Array&lt;
              <LinkText href="https://reactjs.org/docs/refs-and-the-dom.html">
                React ref
              </LinkText>
              &gt;
            </>
          }
          required
          description="Array of React refs to merge into one."
        />
      </Scroll>
    }
    hookReturnsContent={
      <Inset>
        <TypeCard
          type={
            <LinkText href="https://reactjs.org/docs/refs-and-the-dom.html">
              React ref
            </LinkText>
          }
          required
          description="Merged React ref."
        />
      </Inset>
    }
    hookExamplesContent={
      <CodeExample
        caption={
          <>
            How to create a custom input component that allows consumers to
            provide their own <Code>ref</Code>, while using the{' '}
            <Link href="/hooks/useCustomValidity" passHref>
              <LinkText>useCustomValidity</LinkText>
            </Link>{' '}
            hook.
          </>
        }
        code={jsx`
          import { useCustomValidity, useMergedRef } from 'device-agnostic-ui'
          import React from 'react'

          const Input = React.forwardRef(({ validationMessage, ...props }, ref) => {
            const mergedRef = useMergedRef([ref])
            useCustomValidity(mergedRef, validationMessage)
            return <input {...props} ref={mergedRef} />
          })
        `}
      />
    }
  />
)

export default UseMergedRefHookPage
