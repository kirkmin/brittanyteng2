import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import { ReactComponent as HappyFace } from '../../assets/images/happy_face.svg';

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={[styles['header__link__container'], styles['container--home']].join(' ')}>
        <Link to="/" className={styles['header__link']}>B</Link>
        <Link to="/" className={[styles['header__link'], styles['link--teng']].join(' ')}>TENG</Link>
      </div>
      <div className={[styles['header__link__container'], styles['container--info']].join(' ')}><Link to="info" className={[styles['header__link'], styles['link--info']].join(' ')}>Info</Link></div>
      <div className={styles['header__icon-container']}><HappyFace /></div>
    </header>
  );
};

export default Header;