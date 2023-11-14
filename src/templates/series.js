import React, { useState } from 'react';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Profile from '../components/Profile';
import Route from '../components/Route';
import LinkButton from '../components/LinkButton';
import Pagination from '../components/Pagination';
import * as styles from '../styles/home.module.sass';

const TagRoute = (props) => {
  const posts = props.data.allMarkdownRemark.edges;

  const { tag } = props.pageContext;
  const { totalCount } = props.data.allMarkdownRemark;
  const [page, setPage] = React.useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;
  const siteAddress = `https://develog.dev1stud.io/`;
  const timestamp = Date.now();
  console.log('series page: ', page);
  console.log('series limit: ', limit);
  console.log('series offset: ', offset);

  const tagsMap = {
    Retrospect: {
      title: '회고하기',
      description: '회고를 해보았습니다',
    },
    Useless: {
      title: '알쓸없코',
      description: '알아두면 쓸데없는 코드',
    },
    'Devil Styled Sheets': {
      title: 'Devil Styled Sheets',
      description: '수능보다 쉽다! emotion과 Sass 배우기',
    },
    'Comparative Frameworks': {
      title: 'Comparative Frameworks',
      description: '자기들이 어떤 Framework을 좋아할지 몰라서 이것저것 준비했어~',
    },
    'unPretty macOS': {
      title: 'unPretty macOS',
      description: '아주 NICE! 애플 생태계',
    },
    'Street Code Fighters': {
      title: 'Street Code Fighters',
      description: '싸우자 코드야',
    },
  };

  const title = tagsMap[tag]?.title || '(시리즈 미분류)';
  const description = tagsMap[tag]?.description || '';

  const postLinks =
    posts &&
    posts.map((post) => (
      <li key={post.node.fields.slug}>
        <LinkButton href={post.node.fields.slug}>
          <div className={styles['listThumbnail']}>
            {post?.node?.frontmatter?.featuredimage && (
              <PreviewCompatibleImage
                imageInfo={{
                  image: post.node.frontmatter.featuredimage,
                  alt: `featured image thumbnail for post ${post.node.frontmatter.title}`,
                  width: post.node.frontmatter.featuredimage.childImageSharp.gatsbyImageData.width,
                  height: post.node.frontmatter.featuredimage.childImageSharp.gatsbyImageData.height,
                }}
              />
            )}
          </div>
          <strong>{post.node.frontmatter.title}</strong>
          <p>{post.node.excerpt}</p>
          <time>{post.node.frontmatter.date}</time>
        </LinkButton>
      </li>
    ));

  return (
    <Layout>
      <Helmet titleTemplate="%s | DEV1L.studio develog">
        <title>시리즈 _{title}</title>
        <meta property="og:title" content={`시리즈 _${title}`} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${siteAddress}series/${kebabCase(tag)}`} />
        <meta property="og:image" content={`${siteAddress}img/${kebabCase(tag)}.webp?ts=${timestamp}`} />
        <link rel="canonical" href={`${siteAddress}series/${kebabCase(tag)}`} />
        <link rel="alternate" href={`${siteAddress}series/${kebabCase(tag)}`} hrefLang="ko-KR" />
        <meta property="og:type" content="site" />
      </Helmet>
      <main className={styles['mainPage']}>
        <Profile />
        <Route route="series" />
        <h2>
          {title} <em>_{totalCount}건</em>
        </h2>
        <ul>{postLinks}</ul>
        {/* <Pagination total={totalCount} limit={limit} page={page} setPage={setPage} /> */}
      </main>
    </Layout>
  );
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { series: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
            featuredimage {
              childImageSharp {
                gatsbyImageData(width: 1200, quality: 100, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`;
