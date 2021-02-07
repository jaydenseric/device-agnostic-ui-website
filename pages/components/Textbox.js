// ignore unused exports default

import { Code, LinkText, Para, Scroll, Textbox } from 'device-agnostic-ui';
import { Fragment } from 'react';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkElement } from '../../components/LinkElement';
import { TypeCard } from '../../components/TypeCard';
import { Textbox as TextboxComponentMeta } from '../../meta/components';

const TEXTBOX_INPUT_TYPES = [
  'date',
  'datetime-local',
  'email',
  'month',
  'number',
  'password',
  'search',
  'tel',
  'text',
  'textarea',
  'time',
  'url',
  'week',
];

const TextboxComponentPage = () => (
  <ComponentPage
    componentMeta={TextboxComponentMeta}
    componentIntro={
      <Para>
        It implements the <LinkElement element="input" /> or{' '}
        <LinkElement element="textarea" /> element.
      </Para>
    }
    componentPropsContent={
      <Scroll>
        <TypeCard identity={{ name: 'type', idPrefix: 'prop' }} type="String">
          <Para>
            Either <Code>textarea</Code> to create a{' '}
            <LinkElement element="textarea" />, or a text based{' '}
            <LinkElement element="input" />{' '}
            <LinkElement element="input" attribute="type" />:
            {TEXTBOX_INPUT_TYPES.map((type, index) => (
              <Fragment key={type}>
                {index === 0
                  ? ' '
                  : index !== TEXTBOX_INPUT_TYPES.length - 1
                  ? ', '
                  : ' or '}
                <LinkText
                  href={`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/${type}`}
                >
                  <Code>{type}</Code>
                </LinkText>
              </Fragment>
            ))}
            .
          </Para>
        </TypeCard>
        <TypeCard
          identity={{ name: 'validationMessage', idPrefix: 'prop' }}
          type="String"
        >
          <Para>
            Sets the <LinkElement element="input" /> or{' '}
            <LinkElement element="textarea" />{' '}
            <LinkText href="https://html.spec.whatwg.org/dev/form-control-infrastructure.html#dom-cva-validationmessage">
              <Code>validationMessage</Code>
            </LinkText>
            .
          </Para>
        </TypeCard>
        <TypeCard identity={{ name: '...props', idPrefix: 'prop' }} type="…*">
          <Para>
            Additional props for the <LinkElement element="input" /> or{' '}
            <LinkElement element="textarea" /> element.
          </Para>
        </TypeCard>
      </Scroll>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption="A text input with a placeholder."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Textbox } from 'device-agnostic-ui'

              <Textbox placeholder="Placeholder" />
            `
          }
          result={<Textbox placeholder="Placeholder" />}
        />
        <CodeExample
          caption="A text input with text."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Textbox } from 'device-agnostic-ui'

              <Textbox defaultValue="Text" />
            `
          }
          result={<Textbox defaultValue="Text" />}
          screenshot
        />
        <CodeExample
          caption="A required text input."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Textbox } from 'device-agnostic-ui'

              <Textbox required />
            `
          }
          result={<Textbox required />}
        />
        <CodeExample
          caption="A text input with a custom validation message."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Textbox } from 'device-agnostic-ui'

              <Textbox validationMessage="Custom message." />
            `
          }
          result={<Textbox validationMessage="Custom message." />}
        />
        <CodeExample
          caption="A textarea."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Textbox } from 'device-agnostic-ui'

              <Textbox type="textarea" />
            `
          }
          result={<Textbox type="textarea" />}
        />
        <CodeExample
          caption="A password input."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Textbox } from 'device-agnostic-ui'

              <Textbox type="password" />
            `
          }
          result={<Textbox type="password" />}
        />
        <CodeExample
          caption="A number input."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Textbox } from 'device-agnostic-ui'

              <Textbox type="number" defaultValue="1" />
            `
          }
          result={<Textbox type="number" defaultValue="1" />}
        />
        <CodeExample
          caption="An email input."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Textbox } from 'device-agnostic-ui'

              <Textbox type="email" defaultValue="me@jaydenseric.com" />
            `
          }
          result={<Textbox type="email" defaultValue="me@jaydenseric.com" />}
        />
        <CodeExample
          caption="A telephone number input."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Textbox } from 'device-agnostic-ui'

              <Textbox type="tel" defaultValue="0491 570 156" />
            `
          }
          result={<Textbox type="tel" defaultValue="0491 570 156" />}
        />
        <CodeExample
          caption="A date input."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Textbox } from 'device-agnostic-ui'

              <Textbox type="date" defaultValue="2001-09-11" />
            `
          }
          result={<Textbox type="date" defaultValue="2001-09-11" />}
        />
        <CodeExample
          caption="A search input."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Textbox } from 'device-agnostic-ui'

              <Textbox type="search" defaultValue="Cats" />
            `
          }
          result={<Textbox type="search" defaultValue="Cats" />}
        />
      </>
    }
  />
);

export default TextboxComponentPage;
