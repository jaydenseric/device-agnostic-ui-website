import { Code, Icon, LinkText, Para, Scroll } from 'device-agnostic-ui';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkElement } from '../../components/LinkElement';
import { TypeCard } from '../../components/TypeCard';
import { Icon as IconComponentMeta } from '../../meta/components';

const IconCircleFilled = (props) => (
  <Icon title="Circle filled" {...props}>
    <circle cx="50%" cy="50%" r="50%" stroke="none" />
  </Icon>
);

const IconCircleOutline = (props) => (
  <Icon title="Circle outline" {...props}>
    <circle cx="50%" cy="50%" r="14" strokeWidth="4" fill="none" />
  </Icon>
);

const IconComponentPage = () => (
  <ComponentPage
    componentMeta={IconComponentMeta}
    componentIntro={
      <>
        <Para>
          It implements the <LinkElement type="SVG" element="svg" /> element.
        </Para>
        <Para>
          By default the <LinkElement type="SVG" element="svg" /> element’s{' '}
          <LinkElement type="SVG" element="svg" attribute="stroke" /> and{' '}
          <LinkElement type="SVG" element="svg" attribute="fill" /> is{' '}
          <LinkText href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentColor_keyword">
            <Code>currentColor</Code>
          </LinkText>
          , so the icon matches the color of the surrounding text.
        </Para>
        <Para>
          Such icons form part of the HTML document, so they load and render the
          instant the page does.
        </Para>
      </>
    }
    componentPropsContent={
      <Scroll>
        <TypeCard
          identity={{ name: 'size', idPrefix: 'prop' }}
          type="String"
          defaultValue="'1em'"
        >
          <Para>
            Sets the <LinkElement type="SVG" element="svg" /> element’s{' '}
            <LinkElement type="SVG" element="svg" attribute="width" /> and{' '}
            <LinkElement type="SVG" element="svg" attribute="height" />{' '}
            attributes. Some browser versions don’t support <Code>rem</Code>{' '}
            units.
          </Para>
        </TypeCard>
        <TypeCard
          identity={{ name: 'title', idPrefix: 'prop' }}
          type="String"
          required
        >
          <Para>
            Gets suffixed with <Code>&apos; icon&apos;</Code> to form the{' '}
            <LinkElement type="SVG" element="svg" /> element’s{' '}
            <LinkElement type="SVG" element="title" /> children.
          </Para>
        </TypeCard>
        <TypeCard
          identity={{ name: 'children', idPrefix: 'prop' }}
          type={
            <LinkText href="https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx">
              JSX children
            </LinkText>
          }
          required
        >
          <Para>
            SVG content for the icon, such as paths. The{' '}
            <LinkElement type="SVG" element="svg" /> element has a fixed 32px
            square <LinkElement type="SVG" element="svg" attribute="viewBox" />.
          </Para>
        </TypeCard>
        <TypeCard identity={{ name: '...props', idPrefix: 'prop' }} type="…*">
          <Para>
            Additional props for the container; an{' '}
            <LinkElement type="SVG" element="svg" /> element.
          </Para>
        </TypeCard>
      </Scroll>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption={
            <>
              An icon using a <LinkElement type="SVG" element="circle" />{' '}
              element with a fill.
            </>
          }
          code={
            /* syntax-highlight jsx */ `
              import { Icon } from 'device-agnostic-ui'

              const IconCircleFilled = props => (
                <Icon title="Circle filled" {...props}>
                  <circle cx="50%" cy="50%" r="50%" stroke="none" />
                </Icon>
              )

              <IconCircleFilled size="2em" />
            `
          }
          result={<IconCircleFilled size="2em" />}
        />
        <CodeExample
          caption={
            <>
              An icon using a <LinkElement type="SVG" element="circle" />{' '}
              element with a stroke.
            </>
          }
          code={
            /* syntax-highlight jsx */ `
              import { Icon } from 'device-agnostic-ui'

              const IconCircleOutline = props => (
                <Icon title="Circle outline" {...props}>
                  <circle cx="50%" cy="50%" r="14" strokeWidth="4" fill="none" />
                </Icon>
              )

              <IconCircleOutline size="2em" />
            `
          }
          result={<IconCircleOutline size="2em" />}
          screenshot
        />
      </>
    }
  />
);

export default IconComponentPage;
