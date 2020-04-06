import React, { useEffect } from 'react';

import ImgWrapper from '../../components/UI/ImgWrapper/ImgWrapper';

import styles from './Pages.module.css';
import Athlete_0 from "../../assets/images/Athlete/Athlete_0.jpg";
import Athlete_1 from "../../assets/images/Athlete/Athlete_1.png";
import Athlete_2 from "../../assets/images/Athlete/Athlete_2.png";
import Athlete_3 from "../../assets/images/Athlete/Athlete_3.png";
import Athlete_4 from "../../assets/images/Athlete/Athlete_4.jpg";
import Athlete_5 from "../../assets/images/Athlete/Athlete_5.png";
import Athlete_6 from "../../assets/images/Athlete/Athlete_6.png";
import Athlete_7 from "../../assets/images/Athlete/Athlete_7.png";
import Athlete_8 from "../../assets/images/Athlete/Athlete_8.png";
import Athlete_9 from "../../assets/images/Athlete/Athlete_9.png";
import Athlete_10 from "../../assets/images/Athlete/Athlete_10.gif";
import Athlete_11 from "../../assets/images/Athlete/Athlete_11.png";
import Athlete_12 from "../../assets/images/Athlete/Athlete_12.png";
import Athlete_13 from "../../assets/images/Athlete/Athlete_13.png";
import Athlete_14 from "../../assets/images/Athlete/Athlete_14.png";

const Athlete = props => {
  const setBackground = props.setMainBackground;

  useEffect(() => {
    setBackground('white');
    window.scrollTo(0, 0);
  }, [setBackground]);

  return (
    <div className={styles['pages__container']}>
      <ImgWrapper src={Athlete_0} />
      <h3 className={[styles['pages__text'], styles['text--title']].join(' ')}>Athlete Mixtape</h3>
      <div className={[styles['pages__text__container'], styles['container--mobile']].join(' ')}>
        <h4 className={styles['pages__text']}>
          BallerTV is about more than capturing live content and replays from the most popular sports events across the country. It’s about showcasing and sharing your athlete’s best moments. The Athlete Mixtape is an online video editing service that provides the perfect solution for parents to custom build multi-event player highlight reels easily.
        </h4>
        <h4 className={styles['pages__text']}>
          Design and Product collaborated to innovate this new product that undoubtedly adds more value for our members. Our challenge was to build a low friction product, work around engineering limitations, and ultimately figure out how to market this mixtape to obtain new customers.
        </h4>
      </div>
      <div className={[styles['pages__text__container'], styles['container--desktop']].join(' ')}>
        <div className={styles['pages__text__column']}>
          <h4 className={styles['pages__text']}>
            BallerTV is about more than capturing live content and replays from the most popular sports events across the country. It’s about showcasing and sharing your athlete’s best moments. The Athlete Mixtape is an online video editing service that provides the perfect solution for parents to custom build multi-event player highlight reels easily.
          </h4>
        </div>
        <div className={styles['pages__text__column']}>
          <h4 className={styles['pages__text']}>
            Design and Product collaborated to innovate this new product that undoubtedly adds more value for our members. Our challenge was to build a low friction product, work around engineering limitations, and ultimately figure out how to market this mixtape to obtain new customers.
          </h4>
        </div>
      </div>
      {/*<ImgWrapper src={Daily_1} />*/}
      {/*<ImgWrapper src={Daily_2} right />*/}
      {/*<ImgWrapper src={Daily_3} left />*/}
      {/*<ImgWrapper src={Daily_4} />*/}
      {/*<ImgWrapper src={Daily_5} right />*/}
      {/*<ImgWrapper src={Daily_6} left />*/}
      {/*<ImgWrapper src={Daily_7} />*/}
    </div>
  );
};

export default Athlete;