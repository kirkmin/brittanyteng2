import React from 'react';
import classNames from 'classnames/bind';
import styles from './ImgWrapper.module.css';

let cx = classNames.bind(styles);

const ImgWrapper = (props) => {
  const classes = cx({
    "img__wrapper": true,
    "wrapper--large": props.large
  });

  return (
    <div className={[styles.ImgWrapper, styles[props.extraClass]].join(' ')}>
      <img className={styles.Img} src={props.src} alt="" />
    </div>
  );
};

export default ImgWrapper;