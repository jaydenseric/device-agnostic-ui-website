import Head from 'next/head'
import PropTypes from 'prop-types'

const PAGE_TITLE_PREFIX = `Device Agnostic UI - `

// Note that is valid to provide multiple og:image meta tags, so users can
// choose between them.

export const PageMeta = ({
  title,
  description,
  imageUrl = `${process.env.ORIGIN}/static/thumbnail.png`,
  robots = true
}) => (
  <Head>
    {title && (
      <title>
        {PAGE_TITLE_PREFIX}
        {title}
      </title>
    )}
    {!robots && <meta name="robots" content="noindex" />}
    {description && <meta name="description" content={description} />}
    {title && (
      <meta
        key="og:title"
        property="og:title"
        content={`${PAGE_TITLE_PREFIX}${title}`}
      />
    )}
    {description && (
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
    )}
    <meta key="og-image" property="og:image" content={imageUrl} />
  </Head>
)

PageMeta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  robots: PropTypes.bool
}
