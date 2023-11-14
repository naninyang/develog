import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import * as styles from '../../styles/bio.module.sass';
// import PostComment from '../components/utilities/utterances';

const BioPage = () => {
  const siteAddress = `https://develog.dev1stud.io/`;
  const timestamp = Date.now();
  return (
    <Layout>
      <Helmet titleTemplate="%s | DEV1L.studio develog">
        <title>O612 바이오</title>
        <meta property="og:title" content="O612 바이오" />
        <meta property="og:url" content={`${siteAddress}bio`} />
        <meta property="og:image" content={`${siteAddress}img/open-graph-bio.png?ts=${timestamp}`} />
        <link rel="canonical" href={`${siteAddress}bio`} />
        <link rel="alternate" href={`${siteAddress}bio`} hrefLang="ko-KR" />
        <meta property="og:type" content="article" />
      </Helmet>
      <main className={styles['bioPage']}>
        <h1>💃 O612 BIO</h1>
        <blockquote>
          <p>
            <span>값은 근거가 된다</span>
            <br />
            <small>값과 수치를 근거로 일하는 테크리드</small>
          </p>
        </blockquote>
        <div className={styles['colgroup']}>
          <div className={styles['col']}>
            <h2>Summary</h2>
            <ul>
              <li>1998년 웹디자인 시작</li>
              <li>2004년 ㄱ대학교 소프트웨어전공 졸업</li>
              <li>2007년 웹퍼블리싱 시작</li>
              <li>2009년 첫 정규직 스타트업 입사</li>
              <li>2010년 모바일웹 퍼블리싱 시작</li>
              <li>2012년 웹기획 시작</li>
              <li>2022년 3월 ‘주식회사 샘물터’ 입사</li>
              <li>2023년 7월 ‘주식회사 샘물터’ 퇴사</li>
              <li>2023년 8월 ~ 일/프로젝트 구하는 중</li>
            </ul>
          </div>
          <div className={styles['col']}>
            <h2>Skills & Tools</h2>
            <ul>
              <li>M1 Apple Silicon MBP</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Figma</li>
              <li>Git / Github</li>
              <li>VS Code</li>
              <li>Notion / Slack / Etc.</li>
              <li>React / Next.js / vercel serverless</li>
            </ul>
          </div>
        </div>
      </main>
      {/* <PostComment /> */}
    </Layout>
  );
};

export default BioPage;
