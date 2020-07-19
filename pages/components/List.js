// ignore unused exports default

import { Code, List, Para, Scroll } from 'device-agnostic-ui';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkElement } from '../../components/LinkElement';
import { TypeCard } from '../../components/TypeCard';
import { List as ListComponentMeta } from '../../meta/components';

const ListComponentPage = () => (
  <ComponentPage
    componentMeta={ListComponentMeta}
    componentIntro={
      <Para>
        It implements the <LinkElement element="ul" /> or{' '}
        <LinkElement element="ol" /> element.
      </Para>
    }
    componentPropsContent={
      <Scroll>
        <TypeCard
          identity={{ name: 'ordered', idPrefix: 'prop' }}
          type="Boolean"
          defaultValue="false"
        >
          <Para>
            If <Code>false</Code>, a <LinkElement element="ul" /> element is
            used to display a bulleted list. Otherwise, a{' '}
            <LinkElement element="ol" /> element is used to display a numbered
            list
          </Para>
        </TypeCard>
        <TypeCard identity={{ name: '...props', idPrefix: 'prop' }} type="…*">
          <Para>
            Additional props for the container; either a{' '}
            <LinkElement element="ul" /> or <LinkElement element="ol" />{' '}
            element.
          </Para>
        </TypeCard>
      </Scroll>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption={<>Bulleted list.</>}
          code={
            /* syntax-highlight jsx */ `
              import { List } from 'device-agnostic-ui'

              <List>
                <li>Eat healthy</li>
                <li>Sleep well</li>
                <li>Exercise regularly</li>
              </List>
            `
          }
          result={
            <List>
              <li>Eat healthy</li>
              <li>Sleep well</li>
              <li>Exercise regularly</li>
            </List>
          }
          screenshot
        />
        <CodeExample
          caption={<>Nested paragraphs and bulleted lists.</>}
          code={
            /* syntax-highlight jsx */ `
              import { List, Para } from 'device-agnostic-ui'

              <List>
                <li>Lorum ipsum.</li>
                <li>
                  <Para>Lorum ipsum.</Para>
                  <List>
                    <li>Lorum ipsum.</li>
                    <li>
                      <Para>Lorum ipsum.</Para>
                      <List>
                        <li>Lorum ipsum.</li>
                        <li>Lorum ipsum.</li>
                      </List>
                    </li>
                  </List>
                </li>
              </List>
            `
          }
          result={
            <List>
              <li>Lorum ipsum.</li>
              <li>
                <Para>Lorum ipsum.</Para>
                <List>
                  <li>Lorum ipsum.</li>
                  <li>
                    <Para>Lorum ipsum.</Para>
                    <List>
                      <li>Lorum ipsum.</li>
                      <li>Lorum ipsum.</li>
                    </List>
                  </li>
                </List>
              </li>
            </List>
          }
        />
        <CodeExample
          caption={<>Numbered list.</>}
          code={
            /* syntax-highlight jsx */ `
              import { List } from 'device-agnostic-ui'

              <List ordered>
                <li>Pichu</li>
                <li>Pikachu</li>
                <li>Raichu</li>
              </List>
            `
          }
          result={
            <List ordered>
              <li>Pichu</li>
              <li>Pikachu</li>
              <li>Raichu</li>
            </List>
          }
        />
        <CodeExample
          caption={<>Nested paragraphs and ordered lists.</>}
          code={
            /* syntax-highlight jsx */ `
              import { List, Para } from 'device-agnostic-ui'

              <List ordered>
                <li>Lorum ipsum.</li>
                <li>
                  <Para>Lorum ipsum.</Para>
                  <List ordered>
                    <li>Lorum ipsum.</li>
                    <li>
                      <Para>Lorum ipsum.</Para>
                      <List ordered>
                        <li>Lorum ipsum.</li>
                        <li>Lorum ipsum.</li>
                      </List>
                    </li>
                  </List>
                </li>
              </List>
            `
          }
          result={
            <List ordered>
              <li>Lorum ipsum.</li>
              <li>
                <Para>Lorum ipsum.</Para>
                <List ordered>
                  <li>Lorum ipsum.</li>
                  <li>
                    <Para>Lorum ipsum.</Para>
                    <List ordered>
                      <li>Lorum ipsum.</li>
                      <li>Lorum ipsum.</li>
                    </List>
                  </li>
                </List>
              </li>
            </List>
          }
        />
      </>
    }
  />
);

export default ListComponentPage;
