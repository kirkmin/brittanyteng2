import React, { useEffect } from 'react';

import styles from './Info.module.css';

const Info = props => {
  const setBackground = props.setMainBackground;

  useEffect(() => {
    setBackground('green');
  }, [setBackground]);

  return (
    <div className={styles["info"]}>
      <h2 className={styles["info__text"]}>
        Brittany Teng is a product designer based in Los Angeles. She previously worked at MoMA, Gretel, Uber ATG, and has spent the last year at a startup. She approaches design the same way she approaches dogs. Hands-on.
      </h2>
      <h2 className={styles["info__text"]}>
        Email her at hi@brittanyteng.com
      </h2>
      <h2 className={styles["info__text"]}>
        Connect with her on <a className={styles["info__text__link"]} href="https://www.linkedin.com/in/brittanyteng/" target="_blank">LinkedIn</a>
      </h2>
    </div>
  );
};

export default Info;