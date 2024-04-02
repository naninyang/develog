import * as React from 'react';
import styled from '@emotion/styled';
import LinkButton from './LinkButton';
import { colors, mq, Rem } from '../styles/design-system';

const Container = styled.footer({
  display: 'flex',
  padding: Rem(25),
  width: '100%',
  [mq.maxTablet]: {
    flexDirection: 'column-reverse',
  },
  [mq.minXsmall]: {
    justifyContent: 'space-between',
  },
  '& p': {
    fontFamily: "'Gowun Batang', sans-serif",
    fontSize: Rem(12),
    [mq.minXsmall]: {
      fontSize: Rem(16),
    },
    '& span': {
      color: colors.yellow,
    },
  },
});

const SiteLink = styled.ul({
  display: 'flex',
  opacity: 0.5,
  [mq.maxTablet]: {
    marginBottom: Rem(25),
    marginLeft: Rem(-10),
  },
  [mq.minXsmall]: {
    justifyContent: 'flex-end',
    marginRight: Rem(-10),
  },
  '& li': {
    paddingRight: Rem(5),
    paddingLeft: Rem(5),
  },
  '& a': {
    display: 'block',
    width: Rem(30),
    height: Rem(30),
  },
  '& i': {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundSize: 'contain',
    display: 'block',
    width: '100%',
    height: '100%',
  },
});

const GithubLink = styled.li({
  '& i': {
    backgroundImage: `url('data:image/svg+xml,%3Csvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M10.9 2.1C6.3 2.6 2.6 6.3 2.1 10.8C1.6 15.5 4.3 19.7 8.4 21.3C8.7 21.4 9 21.2 9 20.8V19.2C9 19.2 8.6 19.3 8.1 19.3C6.7 19.3 6.1 18.1 6 17.4C5.9 17 5.7 16.7 5.4 16.4C5.1 16.3 5 16.3 5 16.2C5 16 5.3 16 5.4 16C6 16 6.5 16.7 6.7 17C7.2 17.8 7.8 18 8.1 18C8.5 18 8.8 17.9 9 17.8C9.1 17.1 9.4 16.4 10 16C7.7 15.5 6 14.2 6 12C6 10.9 6.5 9.8 7.2 9C7.1 8.8 7 8.3 7 7.6C7 7.2 7 6.7 7.2 6.3C7.2 6.1 7.4 6 7.5 6H7.6C8.1 6.1 9.1 6.4 10 7.3C10.6 7.1 11.3 7 12 7C12.7 7 13.4 7.1 14 7.3C14.9 6.4 16 6.1 16.5 6H16.6C16.8 6 16.9 6.1 17 6.3C17 6.7 17 7.2 17 7.6C17 8.4 16.9 8.8 16.8 9C17.5 9.8 18 10.8 18 12C18 14.2 16.3 15.5 14 16C14.6 16.5 15 17.4 15 18.3V20.9C15 21.2 15.3 21.5 15.7 21.4C19.4 19.9 22 16.3 22 12.1C22 6.1 16.9 1.4 10.9 2.1Z" fill="%23EAFFFF"/%3E%3C/svg%3E%0A')`,
  },
});

const PostypeLink = styled.li({
  '& i': {
    backgroundImage: `url('data:image/svg+xml,%3Csvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath fill-rule="evenodd" clip-rule="evenodd" d="M20 2C21.1046 2 22 2.89026 22 3.99483C22 7.91883 22 16.0812 22 20.0052C22 21.1097 21.1046 22 20 22V22H4V22C2.89543 22 2 21.1046 2 20V20V4V4C2 2.89543 2.89543 2 4 2V2H20V2ZM13.7125 6.375H6.5875V8.05625H7.89375V17.625H9.39375V8.05625H10.7V17.625H12.2V14.625H13.7062C15.9812 14.625 17.8312 12.775 17.8312 10.5C17.8312 8.225 15.9875 6.375 13.7062 6.375H13.7125ZM13.8687 8.0625C15.2062 8.0625 16.2875 9.14375 16.2875 10.4812C16.2875 11.8187 15.2062 12.9 13.8687 12.9H12.2375V8.0625H13.8687Z" fill="%23EAFFFF"/%3E%3C/svg%3E%0A')`,
  },
});

const VelogLink = styled.li({
  '& i': {
    backgroundImage: `url('data:image/svg+xml,%3Csvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath fill-rule="evenodd" clip-rule="evenodd" d="M4.5 2H19.5C20.8807 2 22 3.11928 22 4.5V19.5C22 20.8807 20.8807 22 19.5 22H4.5C3.11928 22 2 20.8807 2 19.5V4.5C2 3.11928 3.11928 2 4.5 2ZM7.10417 8.03332V8.82083H8.97917L10.4042 16.8458L12.2604 16.7146C14.0854 14.4021 15.3167 12.6708 15.9542 11.5208C16.6042 10.3583 16.9292 9.38957 16.9292 8.61458C16.9292 8.15209 16.7917 7.80208 16.5167 7.56457C16.2542 7.32707 15.9229 7.20833 15.5229 7.20833C14.7729 7.20833 14.1479 7.52709 13.6479 8.16457C14.1354 8.48958 14.4667 8.75832 14.6417 8.97082C14.8292 9.17084 14.9229 9.43957 14.9229 9.77707C14.9229 10.3396 14.7542 10.9771 14.4167 11.6896C14.0917 12.4021 13.7354 13.0333 13.3479 13.5833C13.0979 13.9333 12.7792 14.3646 12.3917 14.8771L11.1729 7.95833C11.0729 7.45832 10.7604 7.20833 10.2354 7.20833C9.99792 7.20833 9.54166 7.30833 8.86666 7.50832C8.19166 7.69582 7.60417 7.87084 7.10417 8.03332Z" fill="%23EAFFFF"/%3E%3C/svg%3E%0A')`,
  },
});

const Dev1Link = styled.li({
  '& i': {
    backgroundImage: `url('data:image/svg+xml,%3Csvg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M13.4286 17.9461V16.5175H12V12.2318H13.4286V10.8033H20.5714V12.2318H22V16.5175H20.5714V17.9461H13.4286Z" fill="%2389DDFF"/%3E%3Cpath d="M4.85714 9.37468V7.94611H7.71428V9.37468H4.85714ZM2 17.9461V16.5175H4.85714V12.2318H3.42857V10.8032H7.71428V16.5175H10.5714V17.9461H2Z" fill="%23EAFFFF"/%3E%3C/svg%3E%0A')`,
  },
});

const Footer = () => {
  return (
    <Container>
      <p>
        Copyright 2022 <span>O612 DEV1L.studio develog</span> w/ Devilish code
      </p>
      <SiteLink>
        <GithubLink>
          <LinkButton href="https://github.com/naninyang" aria-label="Github">
            <i />
          </LinkButton>
        </GithubLink>
        <PostypeLink>
          <LinkButton href="https://dev-il-studio.postype.com" aria-label="Postype">
            <i />
          </LinkButton>
        </PostypeLink>
        <VelogLink>
          <LinkButton href="https://velog.io/@naninyang" aria-label="Velog">
            <i />
          </LinkButton>
        </VelogLink>
        <Dev1Link>
          <LinkButton href="https://dev1stud.io" aria-label="DEV1.studio">
            <i />
          </LinkButton>
        </Dev1Link>
      </SiteLink>
    </Container>
  );
};

export default Footer;
