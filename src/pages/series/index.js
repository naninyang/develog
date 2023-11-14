import * as React from 'react';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import LinkButton from '../../components/LinkButton';
import Layout from '../../components/Layout';
import Profile from '../../components/Profile';
import Route from '../../components/Route';
import * as styles from '../../styles/home.module.sass';

const SeriesPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  const timestamp = Date.now();
  const siteAddress = `https://develog.dev1stud.io/`;
  const tagsMap = {
    Retrospect: {
      subject: '회고하기',
      description: '회고를 해보았습니다',
    },
    Useless: {
      subject: '알쓸없코',
      description: '알아두면 쓸데없는 코드',
    },
    'Devil Styled Sheets': {
      subject: 'Devil Styled Sheets',
      description: '수능보다 쉽다! emotion과 Sass 배우기',
    },
    'Comparative Frameworks': {
      subject: 'Comparative Frameworks',
      description: '자기들이 어떤 Framework을 좋아할지 몰라서 이것저것 준비했어~',
    },
    'unPretty macOS': {
      subject: 'unPretty macOS',
      description: '아주 NICE! 애플 생태계',
    },
    'Street Code Fighters': {
      subject: 'Street Code Fighters',
      description: '싸우자 코드야',
    },
  };
  return (
    <Layout>
      <Helmet titleTemplate="%s | DEV1L.studio develog">
        <title>시리즈</title>
        <meta property="og:title" content="시리즈" />
        <meta property="og:url" content={`${siteAddress}series`} />
        <meta property="og:image" content={`${siteAddress}img/open-graph-home.png?ts=${timestamp}`} />
        <link rel="canonical" href={`${siteAddress}series`} />
        <link rel="alternate" href={`${siteAddress}series`} hrefLang="ko-KR" />
        <meta property="og:type" content="site" />
      </Helmet>
      <main className={styles['mainPage']}>
        <Profile />
        <Route route="series" />
        <ul>
          {group.map((tag) => {
            const tagName = tag.fieldValue;
            const subject = tagsMap[tagName]?.subject || '(시리즈 미분류)';
            const description = tagsMap[tagName]?.description || '';
            return (
              <li key={tag.fieldValue}>
                <LinkButton href={`/series/${kebabCase(tag.fieldValue)}`}>
                  <div className={styles['listThumbnail']}>
                    <img src={`/img/${kebabCase(tag.fieldValue)}.webp`} alt="" width="1200" height="630" />
                  </div>
                  <strong>
                    {subject} <em>({tag.totalCount})</em>
                  </strong>
                  <p>{description}</p>
                </LinkButton>
              </li>
            );
          })}
        </ul>
      </main>
    </Layout>
  );
};

export default SeriesPage;

export const tagPageQuery = graphql`
  query SeriesQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___series) {
        fieldValue
        totalCount
      }
    }
  }
`;
