import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import LinkButton from './LinkButton';
import Pagination from './Pagination';
import * as styles from '../styles/home.module.sass';

const BlogRollTemplate = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark;
  const [page, setPage] = React.useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;

  console.log('all page: ', page);
  console.log('all limit: ', limit);
  console.log('all offset: ', offset);

  return (
    <>
      <ul className={styles['homeList']}>
        {posts &&
          posts.slice(offset, offset + limit).map(({ node: post }) => (
            <li key={post.id}>
              <LinkButton href={post.fields.slug}>
                <div className={styles['listThumbnail']}>
                  {post?.frontmatter?.featuredimage && (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        width: post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.width,
                        height: post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.height,
                      }}
                    />
                  )}
                </div>
                <strong>{post.frontmatter.title}</strong>
                <p>{post.excerpt}</p>
                <time>{post.frontmatter.date}</time>
              </LinkButton>
            </li>
          ))}
      </ul>
      <Pagination total={posts.length} limit={limit} page={page} setPage={setPage} />
    </>
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "develog" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "YYYY.MM.DD")
                  featuredpost
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
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
