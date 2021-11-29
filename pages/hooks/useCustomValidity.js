// ignore unused exports default

import Code from 'device-agnostic-ui/Code.mjs';
import LinkText from 'device-agnostic-ui/LinkText.mjs';
import Para from 'device-agnostic-ui/Para.mjs';
import Scroll from 'device-agnostic-ui/Scroll.mjs';
import Link from 'next/link';
import { CodeExample } from '../../components/CodeExample';
import { HookPage } from '../../components/HookPage';
import { LinkComponent } from '../../components/LinkComponent';
import { TypeCard } from '../../components/TypeCard';
import { useCustomValidity as useCustomValidityMeta } from '../../meta/hooks';

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
        >
          <Para>React ref for the HTML form control element.</Para>
        </TypeCard>
        <TypeCard
          identity={{ name: 'validationMessage', idPrefix: 'parameter' }}
          type="String"
          defaultValue="''"
        >
          <Para>
            Validation message for the HTML form control element. An empty
            string means valid.
          </Para>
        </TypeCard>
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
        code={
          /* syntax-highlight jsx */ /* JSX */ `
            import useCustomValidity from 'device-agnostic-ui/useCustomValidity.mjs';
            import React from 'react';

            const Input = ({ validationMessage, ...props }) => {
              const ref = React.useRef();

              useCustomValidity(ref, validationMessage);

              return <input {...props} ref={ref} />;
            };

            const result = (
              <Input type="email" validationMessage="Email address already registered." />
            );
          `
        }
      />
    }
  />
);

export default UseCustomValidityHookPage;
