import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { colors, mixin, Rem } from '../styles/design-system';

const Nav = styled.nav({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Pager = styled.button({
  backgroundColor: 'transparent',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `${Rem(2)} solid transparent`,
  width: Rem(32),
  height: Rem(32),
  '& span': {
    ...mixin.screenReaderOnly,
  },
  '&[disabled]': {
    display: 'none',
  },
});

const Button = styled.button({
  display: 'inline-flex',
  alignItems: 'center',
  margin: `0 ${Rem(5)}`,
  border: `${Rem(2)} solid ${colors.mint}`,
  borderRadius: Rem(5),
  padding: `0 ${Rem(10)}`,
  height: Rem(32),
  backgroundColor: colors.background,
  color: colors.light,
  fontSize: Rem(14),
  '&:hover': {
    backgroundColor: colors.mint,
    color: colors.dark,
  },
  '&[aria-current]': {
    backgroundColor: colors.mint,
    color: colors.dark,
  },
});

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);
  const handleSetPage = (newPage) => {
    localStorage.setItem('currentPage', newPage);
    setPage(newPage);
  };
  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setPage(Number(savedPage));
    }
  }, [setPage]);
  useEffect(() => {
    localStorage.setItem('currentPage', page);
  }, [page]);

  return (
    <Nav>
      {page !== 1 && (
        <Pager onClick={() => handleSetPage(page - 1)}>
          <span>이전</span>
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="white" />
          </svg>
        </Pager>
      )}
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <Button key={i + 1} onClick={() => handleSetPage(i + 1)} aria-current={page === i + 1 ? 'page' : null}>
            {i + 1}
          </Button>
        ))}
      {page !== numPages && (
        <Pager onClick={() => handleSetPage(page + 1)}>
          <span>다음</span>
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="white" />
          </svg>
        </Pager>
      )}
    </Nav>
  );
}

export default Pagination;
