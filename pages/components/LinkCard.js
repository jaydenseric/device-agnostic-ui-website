import { jsx } from 'babel-plugin-syntax-highlight'
import { LinkCard, Para, Table } from 'device-agnostic-ui'
import { CodeExample } from '../../components/CodeExample'
import { ComponentPage } from '../../components/ComponentPage'
import { Inset } from '../../components/Inset'
import { LinkComponent } from '../../components/LinkComponent'
import { LinkElement } from '../../components/LinkElement'
import { LinkCard as LinkCardComponentMeta } from '../../meta/components'

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
      <Inset>
        <Para>
          Use any valid <LinkElement element="a" /> props.
        </Para>
      </Inset>
    }
    componentExamplesContent={
      <CodeExample
        caption="Containing a table card."
        code={jsx`
          import { LinkCard, Table } from 'device-agnostic-ui'

          <LinkCard href="https://en.wikipedia.org/wiki/Australia">
            <Table>
              <tbody>
                <tr>
                  <th scope="row">Country</th>
                  <td>Australia</td>
                </tr>
                <tr>
                  <th scope="row">Capital</th>
                  <td>Canberra</td>
                </tr>
              </tbody>
            </Table>
          </LinkCard>
        `}
        result={
          <LinkCard href="https://en.wikipedia.org/wiki/Australia">
            <Table>
              <tbody>
                <tr>
                  <th scope="row">Country</th>
                  <td>Australia</td>
                </tr>
                <tr>
                  <th scope="row">Capital</th>
                  <td>Canberra</td>
                </tr>
              </tbody>
            </Table>
          </LinkCard>
        }
        screenshot
      />
    }
  />
)

export default LinkCardComponentPage
