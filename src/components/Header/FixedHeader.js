import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import { ReactComponent as HappyFace } from '../../assets/images/happy_face.svg';
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

const FixedHeader = props => {
  const classes = cx({
    "header": true,
    "header--fixed": true,
    "header--white": props.background === "white",
    "header--green": props.background === "green",
    "header--black": props.background === "black",
    "header--fixed-slide": props.fixedSlide,
    "header--fixed-show": props.fixedShow
  });

  return (
    <header className={classes} ref={props.refCallback}>
      <div className={[styles['header__link__container'], styles['container--home']].join(' ')}>
        <Link to="/" className={styles['header__link']}>
          <div className={styles['header__link__content']}>B</div>
          <div className={[styles['header__link__content'], styles['content--teng']].join(' ')}>TENG</div>
        </Link>
      </div>
      <div className={styles['header__icon-container']}>
        <Link to="happy" className={styles['header__link']}>
          <HappyFace />
        </Link>
      </div>
    </header>
  );
};

export default FixedHeader;