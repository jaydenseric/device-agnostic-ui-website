import { LinkText, List, Para } from 'device-agnostic-ui'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Inset } from './Inset'
import { PageHeader } from './PageHeader'
import { PageMeta } from './PageMeta'
import { PrettyWordBreaks } from './PrettyWordBreaks'
import { Section } from './Section'

export const ComponentPage = ({
  componentMeta,
  componentIntro,
  componentPropsContent,
  componentExamplesContent
}) => (
  <>
    <PageMeta
      title={`${componentMeta.name} component`}
      description={componentMeta.description}
      imageUrl={`${process.env.ORIGIN}/static/screenshots/${componentMeta.name}-light.png`}
    />
    <PageHeader
      heading={<PrettyWordBreaks>{componentMeta.name}</PrettyWordBreaks>}
    >
      <Para>{componentMeta.description}</Para>
      {componentIntro}
    </PageHeader>
    <Section heading="Props" id="props">
      {componentPropsContent}
    </Section>
    <Section heading="Examples" id="examples">
      <Inset>{componentExamplesContent}</Inset>
    </Section>
    {!!componentMeta.tags.length && (
      <Section heading="Tags" id="tags">
        <Inset>
          <List>
            {componentMeta.tags.map(({ tag, label, description }) => (
              <li key={tag}>
                <Link href={`/components?tags=${tag}`} passHref>
                  <LinkText title={description}>{label}</LinkText>
                </Link>
              </li>
            ))}
          </List>
        </Inset>
      </Section>
    )}
  </>
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
