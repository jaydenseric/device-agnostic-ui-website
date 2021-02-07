// ignore unused exports default

import { Code, Loading, Para, Scroll } from 'device-agnostic-ui';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkElement } from '../../components/LinkElement';
import { TypeCard } from '../../components/TypeCard';
import { Loading as LoadingComponentMeta } from '../../meta/components';

const LoadingComponentPage = () => (
  <ComponentPage
    componentMeta={LoadingComponentMeta}
    componentIntro={
      <>
        <Para>
          It implements the <LinkElement type="SVG" element="svg" /> element.
        </Para>
        <Para>The surrounding text color determines the spinner’s color.</Para>
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
          defaultValue="'Loading'"
        >
          <Para>
            Sets the <LinkElement type="SVG" element="svg" /> element’s{' '}
            <LinkElement type="SVG" element="title" /> children.
          </Para>
        </TypeCard>
        <TypeCard identity={{ name: '...props', idPrefix: 'prop' }} type="…*">
          <Para>
            Additional props for the container; an{' '}
            <LinkElement type="SVG" element="svg" /> element.{' '}
            <Code>children</Code> can’t be used.
          </Para>
        </TypeCard>
      </Scroll>
    }
    componentExamplesContent={
      <CodeExample
        caption="A loading indicator."
        code={
          /* syntax-highlight jsx */ /* JSX */ `
            import { Loading } from 'device-agnostic-ui';

            const result = <Loading size="2em" />;
          `
        }
        result={<Loading size="2em" />}
        screenshot
      />
    }
  />
);

export default LoadingComponentPage;
