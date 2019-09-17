import { jsx } from 'babel-plugin-syntax-highlight'
import { IconTick, Para } from 'device-agnostic-ui'
import { CodeExample } from '../../components/CodeExample'
import { ComponentPage } from '../../components/ComponentPage'
import { Inset } from '../../components/Inset'
import { LinkComponent } from '../../components/LinkComponent'
import { IconTick as IconTickComponentMeta } from '../../meta/components'

const IconComponentPage = () => (
  <ComponentPage
    componentMeta={IconTickComponentMeta}
    componentIntro={
      <>
        <Para>
          It implements the <LinkComponent component="Icon" /> component.
        </Para>
      </>
    }
    componentPropsContent={
      <Inset>
        <Para>
          Use any valid <LinkComponent component="Icon" /> props, except{' '}
          <LinkComponent component="Icon" prop="children" />.
        </Para>
      </Inset>
    }
    componentExamplesContent={
      <CodeExample
        caption={<>How to use the icon.</>}
        code={jsx`
            import { IconTick } from 'device-agnostic-ui'

            <IconTick size="2em" />
          `}
        result={<IconTick size="2em" />}
        screenshot
      />
    }
  />
)

export default IconComponentPage
