import { Code, LinkText, Para, Picture, Scroll } from 'device-agnostic-ui'
import { CodeExample } from '../../components/CodeExample'
import { ComponentPage } from '../../components/ComponentPage'
import { LinkComponent } from '../../components/LinkComponent'
import { LinkElement } from '../../components/LinkElement'
import { TypeCard } from '../../components/TypeCard'
import { Picture as PictureComponentMeta } from '../../meta/components'

const PictureComponentPage = () => (
  <ComponentPage
    componentMeta={PictureComponentMeta}
    componentIntro={
      <>
        <Para>
          It implements the <LinkElement element="picture" /> element.
        </Para>
        <Para>
          It’s displayed as a block and tends to take up 100% of the available
          space unless an inline style <Code>width</Code> is set.
        </Para>
      </>
    }
    componentPropsContent={
      <Scroll>
        <TypeCard
          identity={{ name: 'width', idPrefix: 'prop' }}
          type="Number"
          required
          description={
            <>
              The picture’s ratio width; typically it’s intrinsic pixel width.
            </>
          }
        />
        <TypeCard
          identity={{ name: 'height', idPrefix: 'prop' }}
          type="Number"
          required
          description={
            <>
              The picture’s ratio height; typically it’s intrinsic pixel height.
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
              <LinkElement element="picture" /> children; optional{' '}
              <LinkElement element="source" /> elements and a required{' '}
              <LinkElement element="img" /> element.
            </>
          }
        />
        <TypeCard
          identity={{ name: '...props', idPrefix: 'prop' }}
          type="…*"
          description={
            <>
              Additional props for the container; a{' '}
              <LinkElement element="picture" /> element.
            </>
          }
        />
      </Scroll>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption="With an SVG source."
          code={
            /* syntax-highlight jsx */ `
              import { Picture } from 'device-agnostic-ui'

              <Picture width={157} height={100} style={{ width: '157px' }}>
                <img
                  src="/static/example-picture/example.svg"
                  alt="Device Agnostic UI logo."
                />
              </Picture>
            `
          }
          result={
            <Picture width={157} height={100} style={{ width: '157px' }}>
              <img
                src="/static/example-picture/example.svg"
                alt="Device Agnostic UI logo."
              />
            </Picture>
          }
        />
        <CodeExample
          caption={
            <>
              Round, with a background color. A{' '}
              <LinkComponent component="Picture" prop="width" /> and{' '}
              <LinkComponent component="Picture" prop="height" /> of{' '}
              <Code>1</Code> results in a square ratio.
            </>
          }
          code={
            /* syntax-highlight jsx */ `
              import { Picture } from 'device-agnostic-ui'

              <Picture width={1} height={1} style={{ width: '6rem' }}>
                <img
                  src="/static/example-picture/example.svg"
                  alt="Device Agnostic UI logo."
                  style={{
                    borderRadius: '50%',
                    objectFit: 'contain',
                    backgroundColor: 'gold'
                  }}
                />
              </Picture>
            `
          }
          result={
            <Picture width={1} height={1} style={{ width: '6rem' }}>
              <img
                src="/static/example-picture/example.svg"
                alt="Device Agnostic UI logo."
                style={{
                  borderRadius: '50%',
                  objectFit: 'contain',
                  backgroundColor: 'gold'
                }}
              />
            </Picture>
          }
          screenshot
        />
        <CodeExample
          caption="With WebP and PNG sources."
          code={
            /* syntax-highlight jsx */ `
              import { Picture } from 'device-agnostic-ui'

              <Picture width={628} height={400} style={{ width: '157px' }}>
                <source
                  type="image/webp"
                  srcSet="/static/example-picture/example.webp"
                />
                <img
                  src="/static/example-picture/example.png"
                  alt="Device Agnostic UI logo."
                />
              </Picture>
            `
          }
          result={
            <Picture width={628} height={400} style={{ width: '157px' }}>
              <source
                type="image/webp"
                srcSet="/static/example-picture/example.webp"
              />
              <img
                src="/static/example-picture/example.png"
                alt="Device Agnostic UI logo."
              />
            </Picture>
          }
        />
        <CodeExample
          caption="With separate light and dark mode WebP and PNG sources."
          code={
            /* syntax-highlight jsx */ `
              import { Picture } from 'device-agnostic-ui'

              <Picture width={1360} height={560} style={{ width: '340px' }}>
                <source
                  type="image/webp"
                  srcSet="/static/screenshots/Button-dark.webp"
                  media="(prefers-color-scheme: dark)"
                />
                <source
                  type="image/png"
                  srcSet="/static/screenshots/Button-dark.png"
                  media="(prefers-color-scheme: dark)"
                />
                <source
                  type="image/webp"
                  srcSet="/static/screenshots/Button-light.webp"
                />
                <img
                  src="/static/screenshots/Button-light.png"
                  alt="Button component screenshot"
                />
              </Picture>
            `
          }
          result={
            <Picture width={1360} height={560} style={{ width: '340px' }}>
              <source
                type="image/webp"
                srcSet="/static/screenshots/Button-dark.webp"
                media="(prefers-color-scheme: dark)"
              />
              <source
                type="image/png"
                srcSet="/static/screenshots/Button-dark.png"
                media="(prefers-color-scheme: dark)"
              />
              <source
                type="image/webp"
                srcSet="/static/screenshots/Button-light.webp"
              />
              <img
                src="/static/screenshots/Button-light.png"
                alt="Button component screenshot"
              />
            </Picture>
          }
        />
      </>
    }
  />
)

export default PictureComponentPage
