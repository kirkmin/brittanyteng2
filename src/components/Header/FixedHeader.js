import React from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames/bind";
import styles from './Header.module.css';

let cx = classNames.bind(styles);

const FixedHeader = ({ background, fixedSlide, fixedShow }) => {
  const classes = cx({
    "header": true,
    "header--fixed": true,
    [`header--${background}`]: background,
    "header--white-text": ["dog", "brown", "black"].includes(background),
    "header--fixed-slide": fixedSlide,
    "header--fixed-show": fixedShow
  });

  return (
    <header className={classes}>
      <nav className={styles["header__nav"]}>
        <Link to="/" className={styles['header__nav__link']}>Brittany Teng</Link>
        <div className={styles['header__nav__link-container']}>
          <Link to="/" className={styles['header__nav__link']}>Work</Link>
          <Link to="/" className={styles['header__nav__link']}>Not work</Link>
        </div>
      </nav>
    </header>
  );
};

export default FixedHeader;