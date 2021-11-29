// ignore unused exports default

import Code from "device-agnostic-ui/Code.mjs";
import LinkActive from "device-agnostic-ui/LinkActive.mjs";
import LinkNav from "device-agnostic-ui/LinkNav.mjs";
import LinkText from "device-agnostic-ui/LinkText.mjs";
import Margin from "device-agnostic-ui/Margin.mjs";
import Nav from "device-agnostic-ui/Nav.mjs";
import Para from "device-agnostic-ui/Para.mjs";
import { CodeExample } from "../../components/CodeExample";
import { ComponentPage } from "../../components/ComponentPage";
import { LinkComponent } from "../../components/LinkComponent";
import { LinkActive as LinkActiveComponentMeta } from "../../meta/components";

const LinkActiveComponentPage = () => (
  <ComponentPage
    componentMeta={LinkActiveComponentMeta}
    componentIntro={
      <Para>
        It implements the Next.js{" "}
        <LinkText href="https://nextjs.org/docs#with-link">
          <Code>{"<Link>"}</Code>
        </LinkText>{" "}
        component.
      </Para>
    }
    componentPropsContent={
      <Margin>
        <Para>
          Use any valid{" "}
          <LinkText href="https://nextjs.org/docs#with-link">
            <Code>{"<Link>"}</Code>
          </LinkText>{" "}
          props.
        </Para>
      </Margin>
    }
    componentExamplesContent={
      <CodeExample
        caption={
          <>
            With the <LinkComponent component="LinkNav" /> and{" "}
            <LinkComponent component="Nav" /> components.
          </>
        }
        code={
          /* syntax-highlight jsx */ /* JSX */ `
            import LinkActive from "device-agnostic-ui/LinkActive.mjs";
            import LinkNav from "device-agnostic-ui/LinkNav.mjs";
            import Nav from "device-agnostic-ui/Nav.mjs";

            const result = (
              <Nav>
                <LinkActive href="/components/LinkActive" passHref>
                  <LinkNav>LinkActive</LinkNav>
                </LinkActive>
                <LinkActive href="/components/LinkNav" passHref>
                  <LinkNav>LinkNav</LinkNav>
                </LinkActive>
              </Nav>
            );
          `
        }
        result={
          <Nav>
            <LinkActive href="/components/LinkActive" passHref>
              <LinkNav>LinkActive</LinkNav>
            </LinkActive>
            <LinkActive href="/components/LinkNav" passHref>
              <LinkNav>LinkNav</LinkNav>
            </LinkActive>
          </Nav>
        }
        screenshot
      />
    }
  />
);

export default LinkActiveComponentPage;
