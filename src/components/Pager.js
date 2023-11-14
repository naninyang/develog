import * as React from 'react';
import styled from '@emotion/styled';
import LinkButton from './LinkButton';
import * as styles from '../styles/articles.module.sass';

const Container = styled.ul();

const IndicatorPrevious = styled.dt({
  '&::before': {
    background: `url('data:image/svg+xml,%3Csvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="white"/%3E%3C/svg%3E%0A') no-repeat 50% 50%/contain`,
  },
});

const IndicatorNext = styled.dt({
  '&::before': {
    background: `url('data:image/svg+xml,%3Csvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="white"/%3E%3C/svg%3E%0A') no-repeat 50% 50%/contain`,
  },
});

const Pager = ({ previousAddress, previousTitle, nextAddress, nextTitle }) => (
  <Container className={styles['pagerContainer']}>
    <li className={styles['pagerPrevious']}>
      {previousAddress && (
        <LinkButton href={previousAddress}>
          <dl>
            <IndicatorPrevious>
              <span>이전 글</span>
            </IndicatorPrevious>
            <dd>{previousTitle}</dd>
          </dl>
        </LinkButton>
      )}
    </li>
    <li className={styles['pagerNext']}>
      {nextAddress && (
        <LinkButton href={nextAddress}>
          <dl>
            <IndicatorNext>
              <span>다음 글</span>
            </IndicatorNext>
            <dd>{nextTitle}</dd>
          </dl>
        </LinkButton>
      )}
    </li>
  </Container>
);

export default Pager;
