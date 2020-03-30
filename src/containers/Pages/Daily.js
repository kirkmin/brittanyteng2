import React, { useEffect } from 'react';

import ImgWrapper from '../../components/UI/ImgWrapper/ImgWrapper';

import styles from './Pages.module.css';
import Daily_0 from "../../assets/images/Daily/Daily_0.png";
import Daily_1 from "../../assets/images/Daily/Daily_1.gif";
import Daily_2 from "../../assets/images/Daily/Daily_2.jpg";
import Daily_3 from "../../assets/images/Daily/Daily_3.jpg";
import Daily_4 from "../../assets/images/Daily/Daily_4.jpeg";
import Daily_5 from "../../assets/images/Daily/Daily_5.jpg";
import Daily_6 from "../../assets/images/Daily/Daily_6.jpg";
import Daily_7 from "../../assets/images/Daily/Daily_7.jpg";

const Daily = props => {
  const setBackground = props.setMainBackground;

  useEffect(() => {
    setBackground('white');
    window.scrollTo(0, 0);
  }, [setBackground]);

  return (
    <div className={styles['pages__container']}>
      <ImgWrapper src={Daily_0} />
      <h3 className={[styles['pages__text'], styles['text--title']].join(' ')}>
        <span className={styles['pages__text__italic']}>The Daily</span> from The NYT
      </h3>
      <div className={[styles['pages__text__container'], styles['container--mobile']].join(' ')}>
        <h4 className={styles['pages__text']}>
          <span className={styles['pages__text__italic']}>The Daily</span> is a podcast hosted by Michael Barbaro, a reporter for <span className={styles['pages__text__italic']}>The New York Times</span>. With five million monthly unique listeners, it became the most downloaded new show in 2017 on Apple Podcasts, and now airs on more than 30 radio stations across the country.
        </h4>
        <h4 className={styles['pages__text']}>
          Our challenge was to communicate all of this in a succinct, memorable and non-partisan way.  We developed a verbal and visual language, which threads the immediacy of the medium with the mission of the Times. Our final work ran as a national campaign, with executions that spanned out-of-home, television, radio, print and digital—all anchored by a single line: “This moment deserves to be understood.”
        </h4>
        <h4 className={[styles['pages__text'], styles['text--more-margin-bottom']].join(' ')}>
          Creative Director: Ryan Moore<br />Art Director: Caleb Halter
        </h4>
      </div>
      <div className={[styles['pages__text__container'], styles['container--desktop']].join(' ')}>
        <div className={styles['pages__text__column']}>
          <h4 className={styles['pages__text']}>
            <span className={styles['pages__text__italic']}>The Daily</span> is a podcast hosted by Michael Barbaro, a reporter for <span className={styles['pages__text__italic']}>The New York Times</span>. With five million monthly unique listeners, it became the most downloaded new show in 2017 on Apple Podcasts, and now airs on more than 30 radio stations across the country.
          </h4>
          <h4 className={[styles['pages__text'], styles['text--more-margin-bottom']].join(' ')}>
            Creative Director: Ryan Moore<br />Art Director: Caleb Halter
          </h4>
        </div>
        <div className={styles['pages__text__column']}>
          <h4 className={styles['pages__text']}>
            Our challenge was to communicate all of this in a succinct, memorable and non-partisan way.  We developed a verbal and visual language, which threads the immediacy of the medium with the mission of the Times. Our final work ran as a national campaign, with executions that spanned out-of-home, television, radio, print and digital—all anchored by a single line: “This moment deserves to be understood.”
          </h4>
        </div>
      </div>
      <ImgWrapper src={Daily_1} />
      <ImgWrapper src={Daily_2} right />
      <ImgWrapper src={Daily_3} left />
      <ImgWrapper src={Daily_4} />
      <ImgWrapper src={Daily_5} right />
      <ImgWrapper src={Daily_6} left />
      <ImgWrapper src={Daily_7} />
    </div>
  );
};

export default Daily;