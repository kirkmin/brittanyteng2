import React, { useEffect } from 'react';

import ImgWrapper from '../../components/UI/ImgWrapper/ImgWrapper';

import styles from './Pages.module.css';
import Happy_0 from "../../assets/images/Happy/Happy_0.png";
import Happy_1 from "../../assets/images/Happy/Happy_1.png";
import Happy_2 from "../../assets/images/Happy/Happy_2.png";
import Happy_3 from "../../assets/images/Happy/Happy_3.png";
import Happy_4 from "../../assets/images/Happy/Happy_4.png";
import Happy_5 from "../../assets/images/Happy/Happy_5.png";

const Happy = props => {
  const setBackground = props.setMainBackground;

  useEffect(() => {
    setBackground('white');
    window.scrollTo(0, 0);
  }, [setBackground]);

  return (
    <div className={styles['pages__container']}>
      <h3 className={[styles['pages__text'], styles['text--title']].join(' ')}>Just For Fun</h3>
      <div className={styles['pages__text__container']}>
        <ImgWrapper mobileMarginTop mobileMarginBottom alignCentered src={Happy_0} />
        <ImgWrapper mobileMarginTop mobileMarginBottom alignCentered src={Happy_1} />
      </div>
      <div className={styles['pages__text__container']}>
        <ImgWrapper mobileMarginTop mobileMarginBottom alignCentered src={Happy_2} />
        <ImgWrapper mobileMarginTop mobileMarginBottom alignCentered src={Happy_3} />
      </div>
      <div className={styles['pages__text__container']}>
        <ImgWrapper mobileMarginTop mobileMarginBottom alignCentered src={Happy_4} />
        <ImgWrapper mobileMarginTop mobileMarginBottom alignCentered src={Happy_5} />
      </div>
    </div>
  );
};

export default Happy;