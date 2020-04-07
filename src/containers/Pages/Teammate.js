import React, { useEffect } from 'react';

import ImgWrapper from '../../components/UI/ImgWrapper/ImgWrapper';

import styles from './Pages.module.css';
import Teammate_0 from "../../assets/images/Teammate/Teammate_0.png";
import Teammate_1 from "../../assets/images/Teammate/Teammate_1.png";
import Teammate_2_1 from "../../assets/images/Teammate/Teammate_2-1.png";
import Teammate_2_2 from "../../assets/images/Teammate/Teammate_2-2.png";
import Teammate_3 from "../../assets/images/Teammate/Teammate_3.gif";
import Teammate_4 from "../../assets/images/Teammate/Teammate_4.png";
import Teammate_5 from "../../assets/images/Teammate/Teammate_5.gif";
import Teammate_6 from "../../assets/images/Teammate/Teammate_6.png";
import Teammate_7 from "../../assets/images/Teammate/Teammate_7.png";
import Teammate_8 from "../../assets/images/Teammate/Teammate_8.png";
import Teammate_9 from "../../assets/images/Teammate/Teammate_9.png";
import Teammate_10 from "../../assets/images/Teammate/Teammate_10.png";
import Teammate_11 from "../../assets/images/Teammate/Teammate_11.png";
import Teammate_12 from "../../assets/images/Teammate/Teammate_12.png";
import Teammate_13 from "../../assets/images/Teammate/Teammate_13.png";
import Teammate_14 from "../../assets/images/Teammate/Teammate_14.png";

const Teammate = props => {
  const setBackground = props.setMainBackground;

  useEffect(() => {
    setBackground('white');
    window.scrollTo(0, 0);
  }, [setBackground]);

  return (
    <div className={styles['pages__container']}>
      <ImgWrapper src={Teammate_0} />
      <h3 className={[styles['pages__text'], styles['text--title']].join(' ')}>Teammate</h3>
      <div className={[styles['pages__text__container'], styles['container--desktop-order-first']].join(' ')}>
        <h4 className={[styles['pages__text'], styles['text--left']].join(' ')}>
          With a growing global community of parents, athletes, and fans, BallerTV needed to build renewed enthusiasm by rethinking the brand.<br/><br/>
          In 2016, BallerTV began live streaming amateur sports and in just a few short years, they became the leader in amateur sports coverage with live streams, replays and highlights of top amateur sporting events across the country—providing full coverage of more than 10,000 games on any given weekend.
        </h4>
        <h4 className={[styles['pages__text'], styles['text--right']].join(' ')}>
          While the current brand sufficed for the past few years, it would not be able to continue to support the company as it grows and reaches a wider audience. The limitations of the name and design language became increasingly apparent as the product library rapidly expanded. Our main user base and target demographic consists of parents age 30–55, so my challenge was to lead the development of an identity to reflect that.
        </h4>
      </div>
      <ImgWrapper extraMargins mobileMarginTop src={Teammate_1} />
      <h3 className={[styles['pages__text'], styles['text--random-header']].join(' ')}>
        Teammate connects families and <br/>communities everywhere through the <br/>unifying power of live sports.
      </h3>
      <div className={[styles['pages__text__container'], styles['container--extra-margins']].join(' ')}>
        <ImgWrapper left gridItem mobileMarginTop mobileMarginBottom src={Teammate_2_1} />
        <ImgWrapper right gridItem mobileMarginTop mobileMarginBottom src={Teammate_2_2} />
      </div>
      <hr/>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--little-margin-bottom']].join(' ')}>
        <h3 className={[styles['pages__text'], styles['text--left'], styles['text--greater']].join(' ')}>
          How did we do this?
        </h3>
        <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser']].join(' ')}>
          After interviewing stakeholders and assessing the current brand, Marketing and Design collaborated to  pivot the brand to cultivate new relationships.<br/><br/>
          As a first step, we renamed the company to encompass the range of sports we offered and the sports we are planning to offer in the future. At this time we were simultaneously designing our internal tool, Teamwork, so we knew we wanted the two names and identities to intersect.<br/><br/>
          We established 4 brand attributes to unite our audience and represent our product and story.
        </h4>
      </div>
      <ImgWrapper extraMargins mobileMarginTop desktopExtraMarginTop desktopExtraMarginBottom src={Teammate_3} />
      <hr/>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--little-margin-bottom']].join(' ')}>
        <h3 className={[styles['pages__text'], styles['text--left'], styles['text--greater']].join(' ')}>
          Typography
        </h3>
        <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser']].join(' ')}>
          When exploring different typographic styles, we always kept our 4 characteristics in mind. When we considered Suisse Int’l, we realized it had all the confidence and just the right touch of playful. Although we live stream amateur sports, our audience is much more sophisticated, so we knew a typeface with a subtle but no-nonsense voice was the way to go.
        </h4>
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--lefty-grid'], styles['container--little-margin-bottom']].join(' ')}>
        <ImgWrapper left stretch gridItem mobileMarginTop src={Teammate_4} />
        <ImgWrapper right stretch gridItem mobileMarginTop src={Teammate_5} />
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--righty-grid'], styles['container--little-margin-top']].join(' ')}>
        <ImgWrapper left stretch gridItem mobileMarginTop src={Teammate_6} />
        <ImgWrapper right stretch gridItem mobileMarginTop src={Teammate_7} />
      </div>
      <hr/>
      <div className={[styles['pages__text__container'], styles['container--extra-margins']].join(' ')}>
        <h3 className={[styles['pages__text'], styles['text--left'], styles['text--greater']].join(' ')}>
          Photography
        </h3>
        <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser']].join(' ')}>
          Imagery plays a huge role in the rebrand—high quality images of our events adds even more to our content library. We captured our athletes in action and between games for a holistic view of each event.<br/><br/>
          Photographer: Andy Fortson
        </h4>
      </div>
      <ImgWrapper extraMargins mobileMarginTop desktopExtraMarginTop src={Teammate_8} />
      <ImgWrapper extraMargins mobileMarginTop desktopExtraMarginBottom src={Teammate_9} />
      <hr/>
      <div className={[styles['pages__text__container'], styles['container--extra-margins']].join(' ')}>
        <h3 className={[styles['pages__text'], styles['text--left'], styles['text--greater']].join(' ')}>
          Illustration Style
        </h3>
        <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser']].join(' ')}>
          We illustrated certain parts of the brand—anything related to family and friends became an illustration, so our customers could relate better to Teammate. Although we heavily relied on photography to depict our service, we ultimately decided to expand our illustrations to complement imagery on product marketing pages.
        </h4>
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--illustrations'], styles['container--little-margin-top']].join(' ')}>
        <ImgWrapper illustration src={Teammate_10} />
        <ImgWrapper illustration src={Teammate_11} />
        <ImgWrapper illustration src={Teammate_12} />
      </div>
      <hr/>
      <div className={[styles['pages__text__container'], styles['container--extra-margins']].join(' ')}>
        <h3 className={[styles['pages__text'], styles['text--left'], styles['text--greater']].join(' ')}>
          Teammate & <br className={styles['br-desktop-only']}/>Teamwork
        </h3>
        <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser']].join(' ')}>
          Teamwork is an internal tool designed to help our contractors effortlessly cover thousands of games every weekend. Teammate and Teamwork make up a cohesive identity to provide a seamless experience for thousands of people around the world.
        </h4>
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--lefty-grid'], styles['container--little-margin-top']].join(' ')}>
        <ImgWrapper left stretch gridItem mobileMarginTop src={Teammate_13} />
        <ImgWrapper right stretch gridItem mobileMarginTop src={Teammate_14} />
      </div>
    </div>
  );
};

export default Teammate;