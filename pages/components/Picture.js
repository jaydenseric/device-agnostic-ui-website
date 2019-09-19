import { LinkText, Para, Picture, Scroll } from 'device-agnostic-ui'
import { CodeExample } from '../../components/CodeExample'
import { ComponentPage } from '../../components/ComponentPage'
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
      </>
    }
    componentPropsContent={
      <Scroll>
        <TypeCard
          identity={{ name: 'width', idPrefix: 'prop' }}
          type="Number"
          required
          description={<>The picture’s intrinsic width in pixels.</>}
        />
        <TypeCard
          identity={{ name: 'height', idPrefix: 'prop' }}
          type="Number"
          required
          description={<>The picture’s intrinsic height in pixels.</>}
        />
        <TypeCard
          identity={{ name: 'alt', idPrefix: 'prop' }}
          type="String"
          required
          description={
            <>
              The picture’s description, for the <LinkElement element="img" />{' '}
              <LinkElement element="img" attribute="alt" /> attribute.
            </>
          }
        />
        <TypeCard
          identity={{ name: 'src', idPrefix: 'prop' }}
          type="String"
          required
          description={
            <>
              <LinkElement element="img" />{' '}
              <LinkElement element="img" attribute="src" /> attribute.
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
          description={
            <>
              <LinkElement element="picture" /> children,{' '}
              <LinkElement element="source" /> elements.
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

              <Picture
                width={157}
                height={100}
                alt="Alternate text."
                src="/static/example-picture/example.svg"
              />
            `
          }
          result={
            <Picture
              width={157}
              height={100}
              alt="Alternate text."
              src="/static/example-picture/example.svg"
            />
          }
          screenshot
        />
        <CodeExample
          caption="With WebP and PNG sources."
          code={
            /* syntax-highlight jsx */ `
              import { Picture } from 'device-agnostic-ui'

              <Picture
                width={628}
                height={400}
                alt="Alternate text."
                src="/static/example-picture/example.png"
                style={{ width: '157px' }}
              >
                <source
                  type="image/webp"
                  srcSet="/static/example-picture/example.webp"
                />
              </Picture>
            `
          }
          result={
            <Picture
              width={628}
              height={400}
              alt="Alternate text."
              src="/static/example-picture/example.png"
              style={{ width: '157px' }}
            >
              <source
                type="image/webp"
                srcSet="/static/example-picture/example.webp"
              />
            </Picture>
          }
          screenshot
        />
      </>
    }
  />
)

export default PictureComponentPage
