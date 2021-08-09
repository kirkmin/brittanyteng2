import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import ImgWrapper from '../../components/UI/ImgWrapper/ImgWrapper';

import styles from './Home.module.css';
import Daily_0 from "../../assets/images/Daily/Daily_0.jpg";
import Athlete_0 from "../../assets/images/Athlete/Athlete_0.jpg";
import Breadblok_0 from "../../assets/images/Breadblok/Breadblok_0.jpg";
import Breadblok_7 from "../../assets/images/Breadblok/Breadblok_7.jpg";
import Transcendent_5 from "../../assets/images/Transcendent/Transcendent_5.jpg";
import Transcendent_2 from "../../assets/images/Transcendent/Transcendent_2.jpg";
import Craft_0 from "../../assets/images/Craft/Craft_0.jpg";
import Craft_11 from "../../assets/images/Craft/Craft_11.jpg";

const Home = props => {
  const setBackground = props.setMainBackground;

  useEffect(() => {
    setBackground('green');
    window.scrollTo(0, 0);
  }, [setBackground]);

  return (
    <div className={styles['home__container']}>
      <Link to="daily">
        <div className={styles['link__content__container']}>
          <div className={[styles['link__content'], styles['content--big']].join(' ')}>
            <ImgWrapper src={Daily_0} />
          </div>
          <div className={[styles['link__content'], styles['content--small'], styles['content--first-on-desktop']].join(' ')}>
            <h3 className={[styles['link__content__text'], styles['text--title']].join(' ')}>
              <span className={styles['link__content__text__italic']}>The Daily</span> from The NYT
            </h3>
          </div>
        </div>
      </Link>
      <Link to="athlete">
        <div className={styles['link__content__container']}>
          <div className={[styles['link__content'], styles['content--big']].join(' ')}>
            <ImgWrapper src={Athlete_0} />
          </div>
          <div className={[styles['link__content'], styles['content--small']].join(' ')}>
            <h3 className={[styles['link__content__text'], styles['text--title']].join(' ')}>
              Athlete Mixtape
            </h3>
          </div>
        </div>
      </Link>
      <Link to="breadblok">
        <div className={styles['link__content__container']}>
          <div className={[styles['link__content'], styles['content--small'], styles['content--mobile-order-last']].join(' ')}>
            <ImgWrapper src={Breadblok_7} desktopOnly />
            <h3 className={[styles['link__content__text'], styles['text--title']].join(' ')}>
              Breadblok
            </h3>
          </div>
          <div className={[styles['link__content'], styles['content--big']].join(' ')}>
            <ImgWrapper src={Breadblok_0} />
          </div>
        </div>
      </Link>
      <Link to="teamwork">
        <div className={styles['link__content__container']}>
          <div className={[styles['link__content'], styles['content--big']].join(' ')}>
          </div>
          <div className={[styles['link__content'], styles['content--small']].join(' ')}>
            <h3 className={[styles['link__content__text'], styles['text--title']].join(' ')}>
              Teamwork
            </h3>
          </div>
        </div>
      </Link>
      <Link to="craft">
        <div className={styles['link__content__container']}>
          <div className={[styles['link__content'], styles['content--big']].join(' ')}>
            <ImgWrapper src={Craft_11} />
          </div>
          <div className={[styles['link__content'], styles['content--small'], styles['content--first-on-desktop']].join(' ')}>
            <ImgWrapper src={Craft_0} desktopOnly />
            <h3 className={[styles['link__content__text'], styles['text--title']].join(' ')}>
              Contemporary Craft Center
            </h3>
          </div>
        </div>
      </Link>
      <Link to="transcendent">
        <div className={styles['link__content__container']}>
          <div className={[styles['link__content'], styles['content--big']].join(' ')}>
            <ImgWrapper src={Transcendent_5} />
          </div>
          <div className={[styles['link__content'], styles['content--small']].join(' ')}>
            <ImgWrapper src={Transcendent_2} desktopOnly />
            <h3 className={[styles['link__content__text'], styles['text--title']].join(' ')}>
              Transcendent Material
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;