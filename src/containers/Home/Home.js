import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import ImgWrapper from '../../components/UI/ImgWrapper/ImgWrapper';

import styles from './Home.module.css';
import Daily_0 from "../../assets/images/Daily/Daily_0.png";
import Daily_8 from "../../assets/images/Daily/Daily_8.png";
import Athlete_0 from "../../assets/images/Athlete/Athlete_0.jpg";
import Athlete_15 from "../../assets/images/Athlete/Athlete_15.png";
import Design_0 from "../../assets/images/Design/Design_0.png";
import Design_11 from "../../assets/images/Design/Design_11.png";
import Teamwork_0 from "../../assets/images/Teamwork/Teamwork_0.png";
import Teammate_13 from "../../assets/images/Teammate/Teammate_13.png";
import Teammate_0 from "../../assets/images/Teammate/Teammate_0.png";
import Teammate_15 from "../../assets/images/Teammate/Teammate_15.png";
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
            <ImgWrapper src={Daily_8} desktopOnly />
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
            <ImgWrapper src={Athlete_15} desktopOnly />
            <h3 className={[styles['link__content__text'], styles['text--title']].join(' ')}>
              Athlete Mixtape
            </h3>
          </div>
        </div>
      </Link>
      <Link to="design">
        <div className={styles['link__content__container']}>
          <div className={[styles['link__content'], styles['content--big']].join(' ')}>
            <ImgWrapper src={Design_0} />
          </div>
          <div className={[styles['link__content'], styles['content--small'], styles['content--first-on-desktop']].join(' ')}>
            <ImgWrapper src={Design_11} desktopOnly />
            <h3 className={[styles['link__content__text'], styles['text--title']].join(' ')}>
              BallerTV Design System
            </h3>
          </div>
        </div>
      </Link>
      <Link to="teamwork">
        <div className={styles['link__content__container']}>
          <div className={[styles['link__content'], styles['content--big']].join(' ')}>
            <ImgWrapper src={Teamwork_0} />
          </div>
          <div className={[styles['link__content'], styles['content--small']].join(' ')}>
            <ImgWrapper src={Teammate_13} desktopOnly />
            <h3 className={[styles['link__content__text'], styles['text--title']].join(' ')}>
              Teamwork
            </h3>
          </div>
        </div>
      </Link>
      <Link to="teammate">
        <div className={styles['link__content__container']}>
          <div className={[styles['link__content'], styles['content--big']].join(' ')}>
            <ImgWrapper src={Teammate_0} />
          </div>
          <div className={[styles['link__content'], styles['content--small'], styles['content--first-on-desktop']].join(' ')}>
            <ImgWrapper src={Teammate_15} desktopOnly />
            <h3 className={[styles['link__content__text'], styles['text--title']].join(' ')}>
              Teammate
            </h3>
          </div>
        </div>
      </Link>
      <Link to="craft">
        <div className={styles['link__content__container']}>
          <div className={[styles['link__content'], styles['content--big']].join(' ')}>
            <ImgWrapper src={Craft_11} />
          </div>
          <div className={[styles['link__content'], styles['content--small']].join(' ')}>
            <ImgWrapper src={Craft_0} desktopOnly />
            <h3 className={[styles['link__content__text'], styles['text--title']].join(' ')}>
              Contemporary Craft Center
            </h3>
          </div>
        </div>
      </Link>
      <Link to="transcendent">
        <div className={styles['link__content__container']}>
          <div className={[styles['link__content'], styles['content--small'], styles['content--mobile-order-last']].join(' ')}>
            <ImgWrapper src={Transcendent_2} desktopOnly />
            <h3 className={[styles['link__content__text'], styles['text--title']].join(' ')}>
              Transcendent Material
            </h3>
          </div>
          <div className={[styles['link__content'], styles['content--big']].join(' ')}>
            <ImgWrapper src={Transcendent_5} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;