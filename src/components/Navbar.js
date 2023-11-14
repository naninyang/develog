import React from 'react';
import styled from '@emotion/styled';
import LinkButton from './LinkButton';
import { colors, mq, Rem, mixin, fontWeights } from '../styles/design-system';

const Header = styled.header({
  backgroundColor: colors.background,
  display: 'flex',
  justifyContent: 'space-between',
  padding: Rem(25),
  width: '100%',
  '& h1': {
    fontFamily: "'Fira Code', monospace",
    fontSize: Rem(18),
    '& a': {
      color: colors.yellow,
      '&::before': {
        content: "'<O612 DEV1L={studio} />'",
      },
    },
    '& span': {
      ...mixin.screenReaderOnly,
    },
  },
});

const Nav = styled.nav({
  display: 'flex',
  marginRight: Rem(-5),
  '& ol': {
    display: 'flex',
    justifyContent: 'flex-end',
    '& li:first-of-type a::before': {
      display: 'none',
    },
    '& a': {
      padding: Rem(5),
      fontWeight: fontWeights.bold,
      fontSize: Rem(14),
      color: colors.light,
      '& span b, & span i': {
        display: 'inline-block',
        verticalAlign: 'text-bottom',
      },
      '& span i': {
        overflow: 'hidden',
        width: 0,
        opacity: 0,
        transition: '.2s linear',
      },
      '&::before': {
        content: "'/'",
        paddingRight: Rem(5),
      },
      '&:focus, &:hover': {
        '& span': {
          fontWeight: fontWeights.black,
          textDecoration: 'underline',
          color: colors.mint,
          '& i': {
            width: 'auto',
            opacity: 1,
          },
        },
      },
    },
  },
});

const Aside = styled.aside({
  backgroundColor: '#005BBB',
  padding: Rem(15),
  textAlign: 'center',
  color: '#FFD500',
  '& a': {
    display: 'inline-flex',
    marginLeft: Rem(10),
    fontWeight: 900,
    color: '#FFD500',
    [mq.maxTablet]: {
      display: 'block',
    },
    '&:hover, &:focus': {
      textDecoration: 'underline',
    },
  },
});

const Navbar = () => {
  return (
    <>
      <Aside>
        Support Ukraine 🇺🇦{' '}
        <LinkButton href="https://www.unhcr.or.kr/ukraine-emergency/">우크라이나 긴급구호 함께해요!</LinkButton>
      </Aside>
      <Header>
        <h1>
          <LinkButton href="/">
            <span>O612의 데브런닷 스튜디오</span>
          </LinkButton>
        </h1>
        <Nav>
          <ol>
            <li>
              <LinkButton href="/bio">
                <span>
                  <b>B</b>
                  <i>io</i>
                </span>
              </LinkButton>
            </li>
            <li>
              <LinkButton href="/projects">
                <span>
                  <b>P</b>
                  <i>rojects</i>
                </span>
              </LinkButton>
            </li>
          </ol>
        </Nav>
      </Header>
    </>
  );
};

export default Navbar;
