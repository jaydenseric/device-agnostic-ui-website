import { Margin, Para, WordBreaks } from 'device-agnostic-ui'
import PropTypes from 'prop-types'
import { Page } from './Page'
import { PageHeader } from './PageHeader'
import { Section } from './Section'

export const HookPage = ({
  hookMeta,
  hookIntro,
  hookParametersContent,
  hookReturnsContent,
  hookExamplesContent
}) => (
  <Page title={`${hookMeta.name} hook`} description={hookMeta.description}>
    <PageHeader heading={<WordBreaks>{hookMeta.name}</WordBreaks>}>
      <Para>{hookMeta.description}</Para>
      {hookIntro}
    </PageHeader>
    <Section level={2} heading="Parameters" id="parameters">
      {hookParametersContent}
    </Section>
    {hookReturnsContent && (
      <Section level={2} heading="Returns" id="returns">
        {hookReturnsContent}
      </Section>
    )}
    <Section level={2} heading="Examples" id="examples">
      <Margin>{hookExamplesContent}</Margin>
    </Section>
  </Page>
)

HookPage.propTypes = {
  hookMeta: PropTypes.exact({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }),
  hookIntro: PropTypes.node,
  hookParametersContent: PropTypes.node,
  hookReturnsContent: PropTypes.node,
  hookExamplesContent: PropTypes.node
}
