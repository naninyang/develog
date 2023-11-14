import * as React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

const PreviewCompatibleImage = ({ imageInfo }) => {
  const { alt = '', title = '', childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <figure>
        <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={alt} />
        <figcaption>{title}</figcaption>
      </figure>
    );
  } else if (!!childImageSharp) {
    return (
      <figure>
        <GatsbyImage image={childImageSharp.gatsbyImageData} alt={alt} />
        <figcaption>{title}</figcaption>
      </figure>
    );
  } else if (image) {
    return (
      <figure>
        <img src={image} alt={alt} />
        <figcaption>{title}</figcaption>
      </figure>
    );
  } else {
    return null;
  }
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    title: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  }).isRequired,
};

export default PreviewCompatibleImage;
