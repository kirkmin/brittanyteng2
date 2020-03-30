import React from 'react';
import classNames from 'classnames/bind';

import styles from './ImgWrapper.module.css';

let cx = classNames.bind(styles);

const ImgWrapper = (props) => {
  const classes = cx({
    "img__wrapper": true,
    "wrapper--right": props.right,
    "wrapper--left": props.left
  });

  return (
    <div className={classes}>
      <img className={styles.img} src={props.src} alt="" />
    </div>
  );
};

export default ImgWrapper;