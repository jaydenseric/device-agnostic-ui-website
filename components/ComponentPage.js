import { LinkText, List, Margin, Para, WordBreaks } from 'device-agnostic-ui'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Page } from './Page'
import { PageHeader } from './PageHeader'
import { Section } from './Section'

export const ComponentPage = ({
  componentMeta,
  componentIntro,
  componentPropsContent,
  componentExamplesContent
}) => (
  <Page
    title={`${componentMeta.name} component`}
    description={componentMeta.description}
    imageUrl={`${process.env.ORIGIN}/static/screenshots/${componentMeta.name}-light.png`}
  >
    <PageHeader heading={<WordBreaks>{componentMeta.name}</WordBreaks>}>
      <Para>{componentMeta.description}</Para>
      {componentIntro}
    </PageHeader>
    <Section heading="Props" id="props">
      {componentPropsContent}
    </Section>
    <Section heading="Examples" id="examples">
      <Margin>{componentExamplesContent}</Margin>
    </Section>
    {!!componentMeta.tags.length && (
      <Section heading="Tags" id="tags">
        <Margin>
          <List>
            {componentMeta.tags.map(({ tag, label, description }) => (
              <li key={tag}>
                <Link href={`/components?tags=${tag}`} passHref>
                  <LinkText title={description}>{label}</LinkText>
                </Link>
              </li>
            ))}
          </List>
        </Margin>
      </Section>
    )}
  </Page>
)

ComponentPage.propTypes = {
  componentMeta: PropTypes.exact({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.exact({
        tag: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
      })
    ).isRequired
  }),
  componentIntro: PropTypes.node,
  componentPropsContent: PropTypes.node,
  componentExamplesContent: PropTypes.node
}
