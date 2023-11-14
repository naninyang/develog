import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import Profile from '../../components/Profile';
import Route from '../../components/Route';
import BlogRoll from '../../components/BlogRoll';
import * as styles from '../../styles/home.module.sass';

export default function BlogIndexPage() {
  const siteAddress = `https://develog.dev1stud.io/`;
  const timestamp = Date.now();
  return (
    <Layout>
      <Helmet titleTemplate="%s | DEV1L.studio develog">
        <title>devlog</title>
        <meta property="og:title" content="develog" />
        <meta property="og:url" content={`${siteAddress}develog`} />
        <meta property="og:image" content={`${siteAddress}img/open-graph-home.png?ts=${timestamp}`} />
        <link rel="canonical" href={`${siteAddress}develog`} />
        <link rel="alternate" href={`${siteAddress}develog`} hrefLang="ko-KR" />
        <meta property="og:type" content="site" />
      </Helmet>
      <main className={styles['mainPage']}>
        <Profile />
        <Route route={'home'} />
        <BlogRoll />
      </main>
    </Layout>
  );
}
