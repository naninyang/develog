import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const domainRegex = /http[s]*:\/\/[www.]*domain\.com[/]?/;

const LinkButton = ({ href, ...rest }) => {
  const sameDomain = domainRegex.test(href);

  if (sameDomain) {
    href = href.replace(domainRegex, '/');
  }

  if (!href || typeof href !== 'string') {
    return false;
  } else {
    if (href.startsWith('/')) {
      return <Link to={href} {...rest} />;
    }

    if (!href.startsWith('http')) {
      return <a href={href} {...rest} />;
    }
  }

  return <a href={href} target="_blank" rel="noopener noreferrer nofollow" {...rest} />;
};

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
};

export default LinkButton;
