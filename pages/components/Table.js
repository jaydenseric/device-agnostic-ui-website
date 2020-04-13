import { Margin, Para, Table } from 'device-agnostic-ui';
import { CodeExample } from '../../components/CodeExample';
import { ComponentPage } from '../../components/ComponentPage';
import { LinkElement } from '../../components/LinkElement';
import { Table as TableComponentMeta } from '../../meta/components';

const TableComponentPage = () => (
  <ComponentPage
    componentMeta={TableComponentMeta}
    componentIntro={
      <Para>
        It implements the <LinkElement element="table" /> element.
      </Para>
    }
    componentPropsContent={
      <Margin>
        <Para>
          Use any valid <LinkElement element="table" /> props.
        </Para>
      </Margin>
    }
    componentExamplesContent={
      <>
        <CodeExample
          caption="With row headers."
          code={
            /* syntax-highlight jsx */ `
              import { Table } from 'device-agnostic-ui'

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
            `
          }
          result={
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
          }
        />
        <CodeExample
          caption="With column headers."
          code={
            /* syntax-highlight jsx */ `
              import { Table } from 'device-agnostic-ui'

              <Table>
                <thead>
                  <tr>
                    <th scope="col">Country</th>
                    <th scope="col">Capital</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Australia</td>
                    <td>Canberra</td>
                  </tr>
                  <tr>
                    <td>New Zealand</td>
                    <td>Wellington</td>
                  </tr>
                </tbody>
              </Table>
            `
          }
          result={
            <Table>
              <thead>
                <tr>
                  <th scope="col">Country</th>
                  <th scope="col">Capital</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Australia</td>
                  <td>Canberra</td>
                </tr>
                <tr>
                  <td>New Zealand</td>
                  <td>Wellington</td>
                </tr>
              </tbody>
            </Table>
          }
          screenshot
        />
      </>
    }
  />
);

export default TableComponentPage;
