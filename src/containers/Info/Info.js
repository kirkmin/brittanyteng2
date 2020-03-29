import React, { useEffect } from 'react';

import styles from './Info.module.css';

const Info = props => {
  const setBackground = props.setMainBackground;

  useEffect(() => {
    setBackground('green');
  }, [setBackground]);

  return (
    <div>
      Info
    </div>
  );
};

export default Info;