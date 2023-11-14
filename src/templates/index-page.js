import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Profile from '../components/Profile';
import Route from '../components/Route';
import BlogRoll from '../components/BlogRoll';
import * as styles from '../styles/home.module.sass';

// eslint-disable-next-line
export const IndexPageTemplate = ({ image, title, heading, subheading, mainpitch, description, intro }) => {
  const heroImage = getImage(image) || image;

  return (
    <main className={styles['mainPage']}>
      <Profile />
      <Route route={'home'} />
      <BlogRoll />
    </main>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const siteAddress = `https://develog.dev1stud.io/`;
  const timestamp = Date.now();
  return (
    <Layout>
      <Helmet titleTemplate="DEV1L.studio develog">
        <meta property="og:url" content={`${siteAddress}`} />
        <meta property="og:image" content={`${siteAddress}img/open-graph-home.png?ts=${timestamp}`} />
        <link rel="canonical" href={`${siteAddress}`} />
        <link rel="alternate" href={`${siteAddress}`} hrefLang="ko-KR" />
        <meta property="og:type" content="site" />
      </Helmet>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
