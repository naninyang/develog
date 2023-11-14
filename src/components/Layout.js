import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import useSiteMetadata from './SiteMetadata';

const Contents = styled.div({
  width: '100%',
});

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const siteAddress = `https://develog.dev1stud.io/`;
  const timestamp = Date.now();
  return (
    <Contents>
      <Helmet>
        <html lang="ko-KR" />
        <meta charSet="utf-8" />

        <link rel="apple-touch-icon" sizes="180x180" href={`${siteAddress}img/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" href={`${siteAddress}img/favicon-32x32.png`} sizes="32x32" />
        <link rel="icon" type="image/png" href={`${siteAddress}img/favicon-16x16.png`} sizes="16x16" />
        <meta name="theme-color" content="#171717" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content="DEV1L.studio develog" />
        <meta property="og:type" content="website" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </Contents>
  );
};

export default TemplateWrapper;
