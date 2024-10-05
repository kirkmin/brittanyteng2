import React from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames/bind";
import styles from './Header.module.css';

let cx = classNames.bind(styles);

const Header = ({ background }) => {
  const classes = cx([
    "header",
    `header--${background}`,
    ["dog", "brown", "black"].includes(background) && "header--white-text"
]);

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

export default Header;