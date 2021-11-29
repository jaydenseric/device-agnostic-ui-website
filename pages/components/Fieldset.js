// ignore unused exports default

import Fieldset from "device-agnostic-ui/Fieldset.mjs";
import LinkText from "device-agnostic-ui/LinkText.mjs";
import Para from "device-agnostic-ui/Para.mjs";
import Scroll from "device-agnostic-ui/Scroll.mjs";
import Toggle from "device-agnostic-ui/Toggle.mjs";
import { CodeExample } from "../../components/CodeExample";
import { ComponentPage } from "../../components/ComponentPage";
import { LinkElement } from "../../components/LinkElement";
import { TypeCard } from "../../components/TypeCard";
import { Fieldset as FieldsetComponentMeta } from "../../meta/components";

const FieldsetComponentPage = () => (
  <ComponentPage
    componentMeta={FieldsetComponentMeta}
    componentIntro={
      <Para>
        It implements the <LinkElement element="fieldset" /> element.
      </Para>
    }
    componentPropsContent={
      <Scroll>
        <TypeCard
          identity={{ name: "legend", idPrefix: "prop" }}
          type={
            <LinkText href="https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx">
              JSX children
            </LinkText>
          }
        >
          <Para>
            Children for the <LinkElement element="legend" /> element. It may
            only render{" "}
            <LinkText href="https://html.spec.whatwg.org/dev/dom.html#phrasing-content">
              phrasing content
            </LinkText>
            .
          </Para>
        </TypeCard>
        <TypeCard
          identity={{ name: "children", idPrefix: "prop" }}
          type={
            <LinkText href="https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx">
              JSX children
            </LinkText>
          }
          required
        >
          <Para>
            Main content, contained in a <LinkElement element="div" /> element.
          </Para>
        </TypeCard>
        <TypeCard identity={{ name: "...props", idPrefix: "prop" }} type="…*">
          <Para>
            Additional props for the container; a{" "}
            <LinkElement element="fieldset" /> element.
          </Para>
        </TypeCard>
      </Scroll>
    }
    componentExamplesContent={
      <CodeExample
        caption={<>Grouped checkboxes.</>}
        code={
          /* syntax-highlight jsx */ /* JSX */ `
            import Fieldset from "device-agnostic-ui/Fieldset.mjs";
            import Textbox from "device-agnostic-ui/Textbox.mjs";

            const result = (
              <Fieldset legend="Options">
                <Toggle
                  inputProps={{
                    type: "radio",
                    name: "options",
                    value: "a",
                    defaultChecked: true,
                  }}
                >
                  Label A
                </Toggle>
                <Toggle
                  inputProps={{
                    type: "radio",
                    name: "options",
                    value: "b",
                  }}
                >
                  Label B
                </Toggle>
              </Fieldset>
            );
          `
        }
        result={
          <Fieldset legend="Options">
            <Toggle
              inputProps={{
                type: "radio",
                name: "options",
                value: "a",
                defaultChecked: true,
              }}
            >
              Label A
            </Toggle>
            <Toggle
              inputProps={{
                type: "radio",
                name: "options",
                value: "b",
              }}
            >
              Label B
            </Toggle>
          </Fieldset>
        }
        screenshot
      />
    }
  />
);

export default FieldsetComponentPage;
