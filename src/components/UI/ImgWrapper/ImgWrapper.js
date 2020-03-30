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

  let Wrapper = (
    <div className={classes}>
      <img className={styles.img} src={props.src} alt="" />
    </div>
  );
  if (props.mp4 || props.mov) {
    Wrapper = (
      <div className={classes}>
        <video className={styles.img} src={props.src} muted autoPlay loop playsInline controls >
          <source src={props.src} type={props.mp4 ? "video/mp4" : "video/mov"} />
        </video>
      </div>
    );
  }

  return Wrapper;
};

export default ImgWrapper;