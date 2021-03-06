import PropTypes from 'prop-types';
import React from 'react';
import {SEO} from 'gatsby-theme-apollo-core';

export default function CustomSEO({image, twitterHandle, ...props}) {
  return (
    <SEO {...props} twitterCard={image ? 'summary_large_image' : 'summary'}>
    </SEO>
  );
}

CustomSEO.propTypes = {
  image: PropTypes.string,
  twitterHandle: PropTypes.string
};
