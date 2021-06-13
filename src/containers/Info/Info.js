import React, { useEffect } from 'react';

import styles from './Info.module.css';

const Info = props => {
  const setBackground = props.setMainBackground;

  useEffect(() => {
    setBackground('green');
    window.scrollTo(0, 0);
  }, [setBackground]);

  return (
    <div className={styles["info"]}>
      <h2 className={styles["info__text"]}>
        Brittany Teng is a creative based in Los Angeles. She specializes in digital design, branding, campaigns, and occasionally dabbles in ceramics. Currently, she's a senior designer at Elephant. She approaches design the same way she approaches dogs. Hands-on.
      </h2>
      <h2 className={styles["info__text"]}>
        Email her at hi@brittanyteng.com
      </h2>
      <h2 className={styles["info__text"]}>
        Connect with her on <a className={styles["info__text__link"]} href="https://www.linkedin.com/in/brittanyteng/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </h2>
    </div>
  );
};

export default Info;