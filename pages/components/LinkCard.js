// ignore unused exports default

import { LinkCard, Para, Picture, Scroll } from 'device-agnostic-ui';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkComponent } from '../../components/LinkComponent';
import { LinkElement } from '../../components/LinkElement';
import { TypeCard } from '../../components/TypeCard';
import { LinkCard as LinkCardComponentMeta } from '../../meta/components';

const LinkCardComponentPage = () => (
  <ComponentPage
    componentMeta={LinkCardComponentMeta}
    componentIntro={
      <>
        <Para>
          It implements the <LinkElement element="a" /> element.
        </Para>
        <Para>
          Typically displayed in a <LinkComponent component="Scroll" />{' '}
          component.
        </Para>
      </>
    }
    componentPropsContent={
      <Scroll>
        <TypeCard
          identity={{ name: 'active', idPrefix: 'prop' }}
          type="Boolean"
          defaultValue="false"
        >
          <Para>Does the link refer to the current page.</Para>
        </TypeCard>
        <TypeCard identity={{ name: '...props', idPrefix: 'prop' }} type="…*">
          <Para>
            Additional props for the container; an <LinkElement element="a" />{' '}
            element.
          </Para>
        </TypeCard>
      </Scroll>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption="A picture link card."
          code={
            /* syntax-highlight jsx */ `
            import { LinkCard, Table } from 'device-agnostic-ui'

            <LinkCard href="/static/example-picture/example.svg">
              <Picture width={157} height={100} style={{ width: '157px' }}>
                <img
                  src="/static/example-picture/example.svg"
                  alt="Device Agnostic UI logo."
                />
              </Picture>
            </LinkCard>
          `
          }
          result={
            <LinkCard href="/static/example-picture/example.svg">
              <Picture width={157} height={100} style={{ width: '157px' }}>
                <img
                  src="/static/example-picture/example.svg"
                  alt="Device Agnostic UI logo."
                />
              </Picture>
            </LinkCard>
          }
          screenshot
        />
        <CodeExample
          caption="An active picture link card."
          code={
            /* syntax-highlight jsx */ `
            import { LinkCard, Table } from 'device-agnostic-ui'

            <LinkCard active href="/static/example-picture/example.svg">
              <Picture width={157} height={100} style={{ width: '157px' }}>
                <img
                  src="/static/example-picture/example.svg"
                  alt="Device Agnostic UI logo."
                />
              </Picture>
            </LinkCard>
          `
          }
          result={
            <LinkCard active href="/static/example-picture/example.svg">
              <Picture width={157} height={100} style={{ width: '157px' }}>
                <img
                  src="/static/example-picture/example.svg"
                  alt="Device Agnostic UI logo."
                />
              </Picture>
            </LinkCard>
          }
        />
      </>
    }
  />
);

export default LinkCardComponentPage;
