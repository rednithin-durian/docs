import PropTypes from 'prop-types';
import React from 'react';
import {Helmet} from 'react-helmet';
import favicon from '../../images/favicon.png'

export default function SEO({
  title,
  description,
  siteName,
  twitterCard = 'summary',
  children,
}) {

  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="icon" type='image/png' href= {favicon} />
      {children}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
  twitterCard: PropTypes.string,
  children: PropTypes.node,
  favicon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
};