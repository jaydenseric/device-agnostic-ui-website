import { jsx } from 'babel-plugin-syntax-highlight'
import { Html, LinkText, List, Para, Scroll } from 'device-agnostic-ui'
import { CodeExample } from '../../components/CodeExample'
import { ComponentPage } from '../../components/ComponentPage'
import { LinkElement } from '../../components/LinkElement'
import { TypeCard } from '../../components/TypeCard'
import { Html as HtmlComponentMeta } from '../../meta/components'

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
        </List>
      </>
    }
    componentPropsContent={
      <Scroll>
        <TypeCard
          identity={{ name: 'children', idPrefix: 'prop' }}
          type={
            <LinkText href="https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx">
              JSX children
            </LinkText>
          }
          required
          description="HTML to render, either a string or JSX."
        />
        <TypeCard
          identity={{ name: '...props', idPrefix: 'prop' }}
          type="…*"
          description={
            <>
              Additional props for the container; a{' '}
              <LinkElement element="div" /> element.
            </>
          }
        />
      </Scroll>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption="Using JSX HTML."
          code={jsx`
            import { Html } from 'device-agnostic-ui'

            <Html>
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
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
            </Html>
          `}
          result={
            <Html>
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
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
            </Html>
          }
          screenshot
        />
        <CodeExample
          caption="Using a HTML string."
          code={jsx`
            import { Html } from 'device-agnostic-ui'

            <Html>{'<h1>Heading 1</h1>'}</Html>
          `}
          result={<Html>{'<h1>Heading 1</h1>'}</Html>}
        />
      </>
    }
  />
)

export default HtmlComponentPage
