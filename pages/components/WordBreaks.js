import { Heading, Para, Scroll, WordBreaks } from 'device-agnostic-ui';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkComponent } from '../../components/LinkComponent';
import { LinkElement } from '../../components/LinkElement';
import { TypeCard } from '../../components/TypeCard';
import { WordBreaks as WordBreaksComponentMeta } from '../../meta/components';

const WordBreaksComponentPage = () => (
  <ComponentPage
    componentMeta={WordBreaksComponentMeta}
    componentIntro={
      <>
        <Para>
          It inserts <LinkElement element="wbr" /> elements at word break
          opportunities, which don’t appear in the clipboard when the text is
          copied.
        </Para>
        <Para>
          Useful for narrow headings that contain long, camel cased strings.
        </Para>
      </>
    }
    componentPropsContent={
      <Scroll>
        <TypeCard
          identity={{ name: 'placeholder', idPrefix: 'prop' }}
          type="String"
          defaultValue="<wbr />"
        >
          <Para>
            Arbitrary; used in the processing of the text. Only needs to be
            customized if the text might contain the default value.
          </Para>
        </TypeCard>
        <TypeCard
          identity={{ name: 'children', idPrefix: 'prop' }}
          type="String"
          required
        >
          <Para>Text to render with word break opportunities.</Para>
        </TypeCard>
      </Scroll>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption={
            <>
              A narrow <LinkComponent component="Heading" /> with{' '}
              <LinkComponent component="WordBreaks" />.
            </>
          }
          code={
            /* syntax-highlight jsx */ `
              import { Heading, WordBreaks } from 'device-agnostic-ui'

              <Heading style={{ maxWidth: '4em' }}>
                <WordBreaks>learnHTML5WithUs</WordBreaks>
              </Heading>
            `
          }
          result={
            <Heading style={{ maxWidth: '4em' }}>
              <WordBreaks>learnHTML5WithUs</WordBreaks>
            </Heading>
          }
          screenshot
        />
        <CodeExample
          caption={
            <>
              A narrow <LinkComponent component="Heading" /> without{' '}
              <LinkComponent component="WordBreaks" />.
            </>
          }
          code={
            /* syntax-highlight jsx */ `
              import { Heading } from 'device-agnostic-ui'

              <Heading style={{ maxWidth: '4em' }}>learnHTML5WithUs</Heading>
            `
          }
          result={
            <Heading style={{ maxWidth: '4em' }}>learnHTML5WithUs</Heading>
          }
        />
      </>
    }
  />
);

export default WordBreaksComponentPage;
