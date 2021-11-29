// ignore unused exports default

import Code from "device-agnostic-ui/Code.mjs";
import LinkText from "device-agnostic-ui/LinkText.mjs";
import List from "device-agnostic-ui/List.mjs";
import Margin from "device-agnostic-ui/Margin.mjs";
import Para from "device-agnostic-ui/Para.mjs";
import Pre from "device-agnostic-ui/Pre.mjs";
import Scroll from "device-agnostic-ui/Scroll.mjs";
import Link from "next/link";
import { CodeSyntaxHighlighted } from "../components/CodeSyntaxHighlighted";
import { EmojiCard } from "../components/EmojiCard";
import { LinkComponent } from "../components/LinkComponent";
import { Page } from "../components/Page";
import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";

const IndexPage = () => (
  <Page
    title="Overview"
    description="A library of device agnostic styles, components and hooks for React and Next.js apps."
  >
    <PageHeader heading="Device Agnostic&nbsp;UI">
      <Para>
        <strong>Device agnostic</strong>{" "}
        <Link href="/styles" passHref>
          <LinkText>styles</LinkText>
        </Link>
        ,{" "}
        <Link href="/components" passHref>
          <LinkText>components</LinkText>
        </Link>{" "}
        and{" "}
        <Link href="/hooks" passHref>
          <LinkText>hooks</LinkText>
        </Link>{" "}
        for <LinkText href="https://reactjs.org">React</LinkText> and{" "}
        <LinkText href="https://nextjs.org">Next.js</LinkText> apps. One design
        for any viewport (size, orientation, resolution), input method (touch,
        mouse) or network speed. Simple to build, test and use.
      </Para>
    </PageHeader>
    <Section level={2} heading="Features" id="features">
      <Scroll>
        <EmojiCard emoji="📦" heading="Tiny bundle size">
          The minified and gzipped bundle size of individual modules are tested.
        </EmojiCard>
        <EmojiCard emoji="📱" heading="Mobile first">
          Intuitive layouts suitable for any screen size,{" "}
          <em>without media queries</em>.
        </EmojiCard>
        <EmojiCard emoji="⌨️" heading="Keyboard ok">
          Interactive components have clearly discernable{" "}
          <LinkText href="https://developer.mozilla.org/en-US/docs/Web/CSS/:focus">
            <Code>:focus</Code>
          </LinkText>{" "}
          styles.
        </EmojiCard>
        <EmojiCard emoji="🚨" heading="Native UI">
          Lightweight, pretty and accessible{" "}
          <LinkText href="https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation">
            form field validation
          </LinkText>{" "}
          messages.
        </EmojiCard>
        <EmojiCard emoji="🌗" heading="Dark mode">
          The color scheme{" "}
          <LinkText href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme">
            adapts
          </LinkText>{" "}
          to the operating system’s light or dark mode.
        </EmojiCard>
        <EmojiCard emoji="🎨" heading="CSS variables">
          Easily tweak the theme globally or in your components.
        </EmojiCard>
        <EmojiCard emoji="🌏" heading="Few global styles">
          No intrusive normalization or resets; just the{" "}
          <LinkText href="https://developer.mozilla.org/en-US/docs/Web/CSS/:root">
            <Code>:root</Code>
          </LinkText>{" "}
          essentials.
        </EmojiCard>
        <EmojiCard emoji="🖌" heading="Style raw HTML">
          Special <LinkComponent component="Html" /> component to style rendered
          markdown.
        </EmojiCard>
        <EmojiCard emoji="🧠" heading="Semantic markup">
          Lean use of semantically appropriate HTML elements.
        </EmojiCard>
        <EmojiCard emoji="⚛️" heading="Modern React">
          Elegant use of <LinkText href="https://reactjs.org">React</LinkText>{" "}
          <LinkText href="https://reactjs.org/docs/react-api.html#hooks">
            hooks
          </LinkText>
          ,{" "}
          <LinkText href="https://reactjs.org/docs/react-api.html#refs">
            refs
          </LinkText>{" "}
          and{" "}
          <LinkText href="https://reactjs.org/docs/react-api.html#fragments">
            fragments
          </LinkText>{" "}
          makes for a great DX.
        </EmojiCard>
      </Scroll>
    </Section>
    <Section level={2} heading="Installation" id="installation">
      <Margin>
        <List ordered>
          <li>
            <Para>
              To install with{" "}
              <LinkText href="https://npmjs.com/get-npm">npm</LinkText>:
            </Para>
            <Pre>
              <CodeSyntaxHighlighted
                code={
                  /* syntax-highlight shell */ `
                    npm install device-agnostic-ui
                  `
                }
              />
            </Pre>
          </li>
          <li>
            Load the{" "}
            <Link href="/styles" passHref>
              <LinkText>styles</LinkText>
            </Link>
            .
          </li>
          <li>
            Use some{" "}
            <Link href="/components" passHref>
              <LinkText>components</LinkText>
            </Link>
            !
          </li>
        </List>
      </Margin>
    </Section>
  </Page>
);

export default IndexPage;
