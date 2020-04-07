import React from 'react';
import classNames from 'classnames/bind';

import styles from './ImgWrapper.module.css';

let cx = classNames.bind(styles);

const ImgWrapper = (props) => {
  const classes = cx({
    "img__wrapper": true,
    "wrapper--right": props.right,
    "wrapper--left": props.left,
    "wrapper--desktop-only": props.desktopOnly,
    "wrapper--extra-margins": props.extraMargins,
    "wrapper--box-shadow": props.boxShadow,
    "wrapper--grid-item": props.gridItem,
    "wrapper--top-right": props.topRight,
    "wrapper--bottom-left": props.bottomLeft,
    "wrapper--mobile-top": props.mobileTop,
    "wrapper--mobile-margin-top": props.mobileMarginTop,
    "wrapper--mobile-margin-bottom": props.mobileMarginBottom,
    "wrapper--desktop-extra-margin-top": props.desktopExtraMarginTop,
    "wrapper--desktop-extra-margin-bottom": props.desktopExtraMarginBottom,
    "wrapper--stretch": props.stretch,
    "wrapper--illustration": props.illustration
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