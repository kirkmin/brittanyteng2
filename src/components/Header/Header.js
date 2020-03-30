import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import { ReactComponent as HappyFace } from '../../assets/images/happy_face.svg';

const Header = props => (
  <header className={[styles['header'], styles['header--' + props.background]].join(' ')}>
    <div className={[styles['header__link__container'], styles['container--home']].join(' ')}>
      <Link to="/" className={styles['header__link']}>
        <div className={styles['header__link__content']}>B</div>
        <div className={[styles['header__link__content'], styles['content--teng']].join(' ')}>TENG</div>
      </Link>
    </div>
    <div className={[styles['header__link__container'], styles['container--info']].join(' ')}>
      <Link to="info" className={styles['header__link']}>
        <div className={[styles['header__link__content'], styles['content--info']].join(' ')}>Info</div>
      </Link>
    </div>
    <div className={styles['header__icon-container']}><HappyFace /></div>
  </header>
);

export default Header;