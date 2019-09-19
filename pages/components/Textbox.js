import { Code, LinkText, Para, Scroll, Textbox } from 'device-agnostic-ui'
import { CodeExample } from '../../components/CodeExample'
import { ComponentPage } from '../../components/ComponentPage'
import { LinkElement } from '../../components/LinkElement'
import { TypeCard } from '../../components/TypeCard'
import { Textbox as TextboxComponentMeta } from '../../meta/components'

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
        <TypeCard
          identity={{ name: 'type', idPrefix: 'prop' }}
          type="String"
          description={
            <>
              Either <Code>textarea</Code> to create a{' '}
              <LinkElement element="textarea" />, or a suitable{' '}
              <LinkElement element="input" attribute="type" /> for a text or
              number <LinkElement element="input" />.
            </>
          }
        />
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
          identity={{ name: '...props', idPrefix: 'prop' }}
          type="…*"
          description={
            <>
              Additional props for the <LinkElement element="input" /> element.
            </>
          }
        />
      </Scroll>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption="A text input with a placeholder."
          code={
            /* syntax-highlight jsx */ `
              import { Textbox } from 'device-agnostic-ui'

              <Textbox placeholder="Placeholder" />
            `
          }
          result={<Textbox placeholder="Placeholder" />}
        />
        <CodeExample
          caption="A text input with text."
          code={
            /* syntax-highlight jsx */ `
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
            /* syntax-highlight jsx */ `
              import { Textbox } from 'device-agnostic-ui'

              <Textbox required />
            `
          }
          result={<Textbox required />}
        />
        <CodeExample
          caption="A text input with a custom validation message."
          code={
            /* syntax-highlight jsx */ `
              import { Textbox } from 'device-agnostic-ui'

              <Textbox validationMessage="Custom message." />
            `
          }
          result={<Textbox validationMessage="Custom message." />}
        />
        <CodeExample
          caption="A number input."
          code={
            /* syntax-highlight jsx */ `
              import { Textbox } from 'device-agnostic-ui'

              <Textbox type="number" />
            `
          }
          result={<Textbox type="number" />}
        />
        <CodeExample
          caption="A textarea."
          code={
            /* syntax-highlight jsx */ `
              import { Textbox } from 'device-agnostic-ui'

              <Textbox type="textarea" />
            `
          }
          result={<Textbox type="textarea" />}
        />
      </>
    }
  />
)

export default TextboxComponentPage
