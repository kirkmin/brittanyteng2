import React, { useEffect } from 'react';

import styles from './Pages.module.css';

const Daily = props => {
  const setBackground = props.setMainBackground;

  useEffect(() => {
    setBackground('white');
  }, [setBackground]);

  return (
    <div className={styles['pages__container']}>
      Daily
    </div>
  );
};

export default Daily;