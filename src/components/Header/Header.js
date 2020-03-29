import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import { ReactComponent as HappyFace } from '../../assets/images/happy_face.svg';

const Header = () => {
  return (
    <header className={styles['header']}>
      <Link to="/" className={[styles['header__link'], styles['link--home']].join(' ')}>
        <span className={styles['header__link__circled']}>B</span>
        <span className={[styles['header__link__circled'], styles['circled--teng']].join(' ')}>TENG</span>
      </Link>
      <Link to="info" className={[styles['header__link'], styles['link--info']].join(' ')}><span className={[styles['header__link__circled'], styles['circled--info']].join(' ')}>Info</span></Link>
      <div className={styles['header_icon-container']}><HappyFace /></div>
    </header>
  );
};

export default Header;