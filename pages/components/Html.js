// ignore unused exports default

import { Code, Html, LinkText, List, Margin, Para } from 'device-agnostic-ui';
import Link from 'next/link';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkElement } from '../../components/LinkElement';
import { Html as HtmlComponentMeta } from '../../meta/components';

const HtmlComponentPage = () => (
  <ComponentPage
    componentMeta={HtmlComponentMeta}
    componentIntro={
      <>
        <Para>Supported HTML:</Para>
        <List>
          <li>
            <LinkElement element="h1" />, <LinkElement element="h2" />,{' '}
            <LinkElement element="h3" />, <LinkElement element="h4" />,{' '}
            <LinkElement element="h5" />, <LinkElement element="h6" />
          </li>
          <li>
            <LinkElement element="p" />
          </li>
          <li>
            <LinkElement element="blockquote" />
          </li>
          <li>
            <LinkElement element="ul" />, <LinkElement element="ol" />,{' '}
            <LinkElement element="li" />
          </li>
          <li>
            <LinkElement element="code" />, <LinkElement element="pre" /> with a{' '}
            <LinkElement element="code" /> child
          </li>
          <li>
            <LinkElement element="a" /> with{' '}
            <LinkElement element="a" attribute="href" /> attribute
          </li>
          <li>
            <LinkElement element="table" />, <LinkElement element="thead" />,{' '}
            <LinkElement element="tbody" />, <LinkElement element="tr" />,{' '}
            <LinkElement element="th" />, <LinkElement element="td" />
          </li>
          <li>
            <LinkElement element="img" />
          </li>
        </List>
        <Para>
          It implements the <LinkElement element="div" /> element.
        </Para>
        <Para>
          The{' '}
          <Link href="/styles#stylesGlobalTheme" passHref>
            <LinkText>global theme</LinkText>
          </Link>{' '}
          provides a range of responsive heading font size CSS variables that
          can be locally overridden:
        </Para>
        <List ordered>
          <li>
            <Code>--daui-h1-font-size</Code>
          </li>
          <li>
            <Code>--daui-h2-font-size</Code>
          </li>
          <li>
            <Code>--daui-h3-font-size</Code>
          </li>
          <li>
            <Code>--daui-h4-font-size</Code>
          </li>
          <li>
            <Code>--daui-h5-font-size</Code>
          </li>
          <li>
            <Code>--daui-h6-font-size</Code>
          </li>
        </List>
      </>
    }
    componentPropsContent={
      <Margin>
        <Para>
          Use any valid <LinkElement element="div" /> props.
        </Para>
      </Margin>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption="Using JSX HTML."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Html } from 'device-agnostic-ui'

              <Html>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
                <p>Paragraph containing <code>code</code> and a <a href="/">link</a>.</p>
                <blockquote>Blockquote containing text.</blockquote>
                <blockquote>
                  <p>Blockquote containing paragraphs.</p>
                  <p>Blockquote containing paragraphs.</p>
                </blockquote>
                <ul>
                  <li>Unordered list item</li>
                  <li>Unordered list item</li>
                </ul>
                <ol>
                  <li>Ordered list item</li>
                  <li>Ordered list item</li>
                </ol>
                <pre><code>Preformatted code</code></pre>
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Table header</th>
                      <th scope="col">Table header</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  </tbody>
                </table>
                <p>
                  <img
                    src="/static/example-picture/example.png"
                    width="180"
                    alt="Alternate text."
                  />
                </p>
              </Html>
            `
          }
          result={
            <Html>
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>
              <h5>Heading 5</h5>
              <h6>Heading 6</h6>
              <p>
                Paragraph containing <code>code</code> and a{' '}
                <a href="/">link</a>.
              </p>
              <blockquote>Blockquote containing text.</blockquote>
              <blockquote>
                <p>Blockquote containing paragraphs.</p>
                <p>Blockquote containing paragraphs.</p>
              </blockquote>
              <ul>
                <li>Unordered list item</li>
                <li>Unordered list item</li>
              </ul>
              <ol>
                <li>Ordered list item</li>
                <li>Ordered list item</li>
              </ol>
              <pre>
                <code>Preformatted code</code>
              </pre>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Table header</th>
                    <th scope="col">Table header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                </tbody>
              </table>
              <p>
                <img
                  src="/static/example-picture/example.png"
                  width="180"
                  alt="Alternate text."
                />
              </p>
            </Html>
          }
          screenshot
        />
        <CodeExample
          caption="Using a HTML string."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Html } from 'device-agnostic-ui'

              <Html dangerouslySetInnerHTML={{ __html: '<h1>Heading 1</h1>' }} />
            `
          }
          result={
            <Html dangerouslySetInnerHTML={{ __html: '<h1>Heading 1</h1>' }} />
          }
        />
        <CodeExample
          caption="How to locally override heading font sizes."
          code={
            /* syntax-highlight jsx */ /* JSX */ `
              import { Html } from 'device-agnostic-ui'

              <Html style={{ '--daui-h1-font-size': '150%' }}>
                <h1>Heading 1</h1>
              </Html>
            `
          }
          result={
            <Html style={{ '--daui-h1-font-size': '150%' }}>
              <h1>Heading 1</h1>
            </Html>
          }
        />
      </>
    }
  />
);

export default HtmlComponentPage;
