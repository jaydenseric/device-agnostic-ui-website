import { ButtonSubmit, Code, LinkText, Para, Scroll } from 'device-agnostic-ui'
import { CodeExample } from '../../components/CodeExample'
import { ComponentPage } from '../../components/ComponentPage'
import { LinkComponent } from '../../components/LinkComponent'
import { LinkElement } from '../../components/LinkElement'
import { TypeCard } from '../../components/TypeCard'
import { ButtonSubmit as ButtonSubmitComponentMeta } from '../../meta/components'

const ButtonSubmitComponentPage = () => (
  <ComponentPage
    componentMeta={ButtonSubmitComponentMeta}
    componentIntro={
      <>
        <Para>
          It implements the <LinkComponent component="Button" /> component.
        </Para>
      </>
    }
    componentPropsContent={
      <Scroll>
        <TypeCard
          identity={{ name: 'loading', idPrefix: 'prop' }}
          type="Boolean"
          defaultValue="false"
          description={
            <>
              When <Code>true</Code>, sets the <LinkElement element="button" />{' '}
              element’s <LinkElement element="button" attribute="disabled" />{' '}
              attribute and indicates loading using{' '}
              <LinkComponent component="Loading" />.
            </>
          }
        />
        <TypeCard
          identity={{ name: 'success', idPrefix: 'prop' }}
          type="Boolean"
          defaultValue="false"
          description={
            <>
              When <Code>true</Code> and the{' '}
              <LinkComponent component="Button" prop="loading" /> prop is{' '}
              <Code>false</Code>, sets the <LinkElement element="button" />{' '}
              element’s <LinkElement element="button" attribute="disabled" />{' '}
              attribute and indicates success with a tick icon.
            </>
          }
        />
        <TypeCard
          identity={{ name: 'children', idPrefix: 'prop' }}
          type={
            <LinkText href="https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx">
              JSX children
            </LinkText>
          }
          required
          description={
            <>
              Content to the left of the loading or success icon, contained in a{' '}
              <LinkElement element="span" /> element.
            </>
          }
        />
        <TypeCard
          identity={{ name: '...props', idPrefix: 'prop' }}
          type="…*"
          description={
            <>
              Additional props for the container; a{' '}
              <LinkComponent component="Button" /> component.
            </>
          }
        />
      </Scroll>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption="Submit button."
          code={
            /* syntax-highlight jsx */ `
              import { ButtonSubmit } from 'device-agnostic-ui'

              <ButtonSubmit>Submit</ButtonSubmit>
            `
          }
          result={<ButtonSubmit>Submit</ButtonSubmit>}
        />
        <CodeExample
          caption="If the form submission is loading."
          code={
            /* syntax-highlight jsx */ `
              import { ButtonSubmit } from 'device-agnostic-ui'

              <ButtonSubmit loading>Submit</ButtonSubmit>
            `
          }
          result={<ButtonSubmit loading>Submit</ButtonSubmit>}
        />
        <CodeExample
          caption="If the form submission was successful."
          code={
            /* syntax-highlight jsx */ `
              import { ButtonSubmit } from 'device-agnostic-ui'

              <ButtonSubmit success>Submit</ButtonSubmit>
            `
          }
          result={<ButtonSubmit success>Submit</ButtonSubmit>}
          screenshot
        />
      </>
    }
  />
)

export default ButtonSubmitComponentPage
