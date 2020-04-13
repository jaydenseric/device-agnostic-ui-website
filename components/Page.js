import Head from 'next/head';
import PropTypes from 'prop-types';

export const Page = ({
  titlePrefix = 'Device Agnostic UI - ',
  title,
  description,
  imageUrl = `${process.env.ORIGIN}/static/thumbnail.png`,
  children,
}) => (
  <>
    <Head>
      {title && (
        <title>
          {titlePrefix}
          {title}
        </title>
      )}
      {description && <meta name="description" content={description} />}
      {title && (
        <meta
          key="og:title"
          property="og:title"
          content={`${titlePrefix}${title}`}
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
    {children}
  </>
);

Page.propTypes = {
  titlePrefix: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  children: PropTypes.node,
};
