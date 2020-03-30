import React, { useEffect } from 'react';

import ImgWrapper from '../../components/UI/ImgWrapper/ImgWrapper';

import styles from './Pages.module.css';
import Transcendent_0 from "../../assets/images/Transcendent/Transcendent_0.png";
import Transcendent_1 from "../../assets/images/Transcendent/Transcendent_1.mp4";
import Transcendent_2 from "../../assets/images/Transcendent/Transcendent_2.jpg";
import Transcendent_3 from "../../assets/images/Transcendent/Transcendent_3.png";
import Transcendent_4 from "../../assets/images/Transcendent/Transcendent_4.jpg";
import Transcendent_5 from "../../assets/images/Transcendent/Transcendent_5.jpg";

const Transcendent = props => {
  const setBackground = props.setMainBackground;

  useEffect(() => {
    setBackground('white');
  }, [setBackground]);

  return (
    <div className={styles['pages__container']}>
      <ImgWrapper src={Transcendent_0} />
      <h3 className={[styles['pages__text'], styles['text--title']].join(' ')}>
        Transcendent Material
      </h3>
      <div className={[styles['pages__text__container'], styles['container--mobile']].join(' ')}>
        <h4 className={styles['pages__text']}>
          Transcendent Material is an exhibition on artist Tara Donovan's site-specific installations. Donovan's large, organic sculptures made from mundane materials are immense representations of naturally occurring organisms. Her strategy of obsessive repetition gives shape to these materials in a different context, depending on your vantage point.
        </h4>
        <h4 className={styles['pages__text']}>
          I utilized typography as a means to abstract the dimensional sculptures and highlight the skeletal qualities of her work. This interactive title wall gives the viewer a sense of what it would be like to completely immerse oneself in her Polyester Film sculpture. By employing a combination of projection mapping, motion sensors, and processing, I created an experience that invites the visitor to have a dialogue with the fabric and the type that floods the installation.
        </h4>
      </div>
      <div className={[styles['pages__text__container'], styles['container--desktop']].join(' ')}>
        <div className={styles['pages__text__column']}>
          <h4 className={styles['pages__text']}>
            Transcendent Material is an exhibition on artist Tara Donovan's site-specific installations. Donovan's large, organic sculptures made from mundane materials are immense representations of naturally occurring organisms. Her strategy of obsessive repetition gives shape to these materials in a different context, depending on your vantage point.
          </h4>
        </div>
        <div className={styles['pages__text__column']}>
          <h4 className={styles['pages__text']}>
            I utilized typography as a means to abstract the dimensional sculptures and highlight the skeletal qualities of her work. This interactive title wall gives the viewer a sense of what it would be like to completely immerse oneself in her Polyester Film sculpture. By employing a combination of projection mapping, motion sensors, and processing, I created an experience that invites the visitor to have a dialogue with the fabric and the type that floods the installation.
          </h4>
        </div>
      </div>
      <ImgWrapper src={Transcendent_1} mp4 />
      <ImgWrapper src={Transcendent_2} right />
      <ImgWrapper src={Transcendent_3} />
      <ImgWrapper src={Transcendent_4} left />
      <ImgWrapper src={Transcendent_5} />
    </div>
  );
};

export default Transcendent;