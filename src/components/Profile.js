import * as React from 'react';
import * as styles from '../styles/profile.module.sass';

const Profile = () => (
  <div className={styles['profile']}>
    <i />
    <div className={styles['profileContents']}>
      <cite>O612</cite>
      <p>
        <span>♀ 6월 12일생 O모씨.</span>
        <span>일 좀 주세요 사장님들...</span>
      </p>
    </div>
  </div>
);

export default Profile;
