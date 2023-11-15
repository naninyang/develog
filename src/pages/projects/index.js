import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.sass';

const ProjectsPage = () => {
  const siteAddress = `https://develog.dev1stud.io/`;
  const timestamp = Date.now();
  return (
    <Layout>
      <Helmet titleTemplate="%s | DEV1L.studio develog">
        <title>프로젝트</title>
        <meta property="og:title" content="프로젝트" />
        <meta property="og:url" content={`${siteAddress}projects`} />
        <meta property="og:image" content={`${siteAddress}img/open-graph-projects.png?ts=${timestamp}`} />
        <link rel="canonical" href={`${siteAddress}projects`} />
        <link rel="alternate" href={`${siteAddress}projects`} hrefLang="ko-KR" />
        <meta property="og:type" content="article" />
      </Helmet>
      <main className={styles['projPage']}>
        <h1>🏗 Projects</h1>
        <blockquote>
          <p>
            <span>
              악연 하나 만드는 건 1억 빚지는 거고,
              <br />
              인연 하나 만드는 건 1억 버는거래
            </span>
            <br />
            <small>tvN 드라마 ‘스타트업’ 7회 서달미 대사 중에서</small>
          </p>
        </blockquote>
        <div className={styles['colgroup']}>
          <div className={styles['col']}>
            <h2>Design</h2>
            <ul>
              <li>1998년 ㅈ고등학교 웹사이트</li>
              <li>2014년 ㅂ 서비스 웹사이트</li>
              <li>2016년 ㄷ 쇼핑몰 이벤트 운영/유지보수</li>
              <li>2017년 ㅍ 사단법인 웹사이트</li>
              <li>2020년 ㄹ 법무법인 웹사이트</li>
              <li>2022년 ‘주식회사 샘물터’ 웹사이트</li>
              <li>2022년~2023년 윤슬빅데이터포털 @ 샘물터</li>
            </ul>
          </div>
          <div className={styles['col']}>
            <h2>Web Publishing</h2>
            <ul>
              <li>2008년 ㅍ 블로그 관리자 화면</li>
              <li>2009년 ㅅ 백화점 본점본관 웹사이트</li>
              <li>2010~2012년 ㄹ 쇼핑몰 웹사이트</li>
              <li>2013년 금융위원회 웹사이트</li>
              <li>2014년 ㅂ 서비스 웹사이트</li>
              <li>2015년 ㄴ사 개발자센터 웹사이트</li>
              <li>2016년 ㄷ 쇼핑몰 랜딩페이지</li>
              <li>2017년 ㅅ 쇼핑몰 웹사이트</li>
              <li>2019~2020 ㅁ 서비스 웹사이트</li>
              <li>2021년 ㅈ 서비스 랜딩페이지</li>
              <li>2022년 ‘주식회사 샘물터’ 웹사이트</li>
              <li>2022년~2023년 윤슬빅데이터포털 @ 샘물터</li>
            </ul>
          </div>
          <div className={styles['col']}>
            <h2>Planning</h2>
            <ul>
              <li>2012년 ㅎ 서비스 웹사이트</li>
              <li>2019~2020년 ㅁ 서비스 웹사이트</li>
              <li>2022년 ‘주식회사 샘물터’ 웹사이트</li>
              <li>2022년~2023년 윤슬빅데이터포털 @ 샘물터</li>
            </ul>
          </div>
          <div className={styles['col']}>
            <h2>App. Publishing</h2>
            <ul>
              <li>2010~2012년 ㄹ 쇼핑몰 앱</li>
              <li>2017~2018년 ㅇ사 서비스 앱</li>
              <li>2019년 ㅍ사 ㅍ 서비스 앱</li>
              <li>2023년 숏뷰 뉴스 (Next.js PWA App.)</li>
            </ul>
          </div>
        </div>
      </main>
      {/* <PostComment /> */}
    </Layout>
  );
};

export default ProjectsPage;
