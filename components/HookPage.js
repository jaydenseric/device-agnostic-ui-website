import { Margin, Para, WordBreaks } from 'device-agnostic-ui'
import PropTypes from 'prop-types'
import { PageHeader } from './PageHeader'
import { PageMeta } from './PageMeta'
import { Section } from './Section'

export const HookPage = ({
  hookMeta,
  hookIntro,
  hookParametersContent,
  hookReturnsContent,
  hookExamplesContent
}) => (
  <>
    <PageMeta
      title={`${hookMeta.name} hook`}
      description={hookMeta.description}
    />
    <PageHeader heading={<WordBreaks>{hookMeta.name}</WordBreaks>}>
      <Para>{hookMeta.description}</Para>
      {hookIntro}
    </PageHeader>
    <Section heading="Parameters" id="parameters">
      {hookParametersContent}
    </Section>
    {hookReturnsContent && (
      <Section heading="Returns" id="returns">
        {hookReturnsContent}
      </Section>
    )}
    <Section heading="Examples" id="examples">
      <Margin>{hookExamplesContent}</Margin>
    </Section>
  </>
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
