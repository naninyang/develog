import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from '../styles/design-system';
import LinkButton from './LinkButton';

const ActiveButton = styled(LinkButton)(({ $current }) => ({
  backgroundColor: $current ? colors.yellow : null,
  fontWeight: $current ? 700 : 400,
  color: $current ? colors.dark : colors.light,
}));

function Route({ route }) {
  return (
    <nav>
      <ul>
        <li>
          <ActiveButton href="/develog" $current={route === 'home'}>
            전체 글
          </ActiveButton>
        </li>
        <li>
          <ActiveButton href="/series" $current={route === 'series'}>
            시리즈
          </ActiveButton>
        </li>
      </ul>
    </nav>
  );
}

export default Route;
