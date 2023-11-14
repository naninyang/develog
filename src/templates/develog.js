import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import _get from 'lodash/get';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Profile from '../components/Profile';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Pager from '../components/Pager';
import * as styles from '../styles/articles.module.sass';
import '@deckdeckgo/highlight-code';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

// eslint-disable-next-line
export const DevelogTemplate = ({
  content,
  contentComponent,
  description,
  series,
  title,
  helmet,
  featuredimage,
  date,
  nextPostURL,
  prevPostURL,
  nextPostTitle,
  prevPostTitle,
  id,
}) => {
  const PostContent = contentComponent || Content;
  return (
    <>
      <article className={styles['articlePage']}>
        {helmet || ''}
        <h1>{title}</h1>
        <small>{description}</small>
        <time>{date}</time>
        <a href={`/admin/#/collections/develog/entries/${id}`}>수정</a>
        {featuredimage && (
          <PreviewCompatibleImage
            imageInfo={{
              image: featuredimage,
              alt: `featured image thumbnail for post ${title}`,
              width: featuredimage.childImageSharp.gatsbyImageData.width,
              height: featuredimage.childImageSharp.gatsbyImageData.height,
            }}
          />
        )}

        <PostContent content={content} />
        <strong className={styles['articleFIN']}>FIN!</strong>
      </article>
      <aside>
        <Profile />
      </aside>
      <Pager
        previousAddress={prevPostURL}
        previousTitle={prevPostTitle}
        nextAddress={nextPostURL}
        nextTitle={nextPostTitle}
      />
    </>
  );
};

DevelogTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  created: PropTypes.string,
};

const Develog = ({ data }) => {
  const { markdownRemark: post, allMarkdownRemark: allPosts } = data;
  const siteAddress = `https://develog.dev1stud.io/`;
  const timestamp = Date.now();
  const thisEdge = allPosts.edges.find((edge) => edge.node.id === post.id);
  return (
    <Layout>
      <DevelogTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | DEV1L.studio develog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
            <meta property="og:title" content={`${post.frontmatter.title}`} />
            <meta property="og:description" content={`${post.frontmatter.description}`} />
            <meta property="og:url" content={`${siteAddress}develog/${post.frontmatter.created}`} />
            <meta
              property="og:image"
              content={`${siteAddress}img/${post.frontmatter.created}-summary.webp?ts=${timestamp}`}
            />
            <link rel="canonical" href={`${siteAddress}develog/${post.frontmatter.created}`} />
            <link rel="alternate" href={`${siteAddress}develog/${post.frontmatter.created}`} hrefLang="ko-KR" />
            <meta property="og:type" content="article" />
          </Helmet>
        }
        id={post.frontmatter.created}
        featuredimage={post.frontmatter.featuredimage}
        date={post.frontmatter.date}
        series={post.frontmatter.series}
        title={post.frontmatter.title}
        nextPostURL={_get(thisEdge, 'next.fields.slug')}
        prevPostURL={_get(thisEdge, 'previous.fields.slug')}
        nextPostTitle={_get(thisEdge, 'next.frontmatter.title')}
        prevPostTitle={_get(thisEdge, 'previous.frontmatter.title')}
      />
    </Layout>
  );
};

Develog.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Develog;

export const pageQuery = graphql`
  query Develog($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        created
        title
        description
        series
        featuredimage {
          childImageSharp {
            gatsbyImageData(width: 1200, quality: 100, layout: CONSTRAINED)
          }
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "develog" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
