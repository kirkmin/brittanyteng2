import React, { useEffect } from 'react';

import ImgWrapper from '../../components/UI/ImgWrapper/ImgWrapper';

import styles from './Pages.module.css';
import Craft_0 from "../../assets/images/Craft/Craft_0.jpg";
import Craft_1 from "../../assets/images/Craft/Craft_1.jpg";
import Craft_2 from "../../assets/images/Craft/Craft_2.gif";
import Craft_3 from "../../assets/images/Craft/Craft_3.jpg";
import Craft_4 from "../../assets/images/Craft/Craft_4.png";
import Craft_5 from "../../assets/images/Craft/Craft_5.mov";
import Craft_6 from "../../assets/images/Craft/Craft_6.jpg";
import Craft_7 from "../../assets/images/Craft/Craft_7.jpg";
import Craft_8 from "../../assets/images/Craft/Craft_8.jpg";
import Craft_9 from "../../assets/images/Craft/Craft_9.jpg";
import Craft_10 from "../../assets/images/Craft/Craft_10.jpg";
import Craft_11 from "../../assets/images/Craft/Craft_11.jpg";
import Craft_12 from "../../assets/images/Craft/Craft_12.jpg";

const Craft = props => {
  const setBackground = props.setMainBackground;

  useEffect(() => {
    setBackground('white');
    window.scrollTo(0, 0);
  }, [setBackground]);

  return (
    <div className={styles['pages__container']}>
      <ImgWrapper src={Craft_0} />
      <h3 className={[styles['pages__text'], styles['text--title']].join(' ')}>
        Contemporary Craft Center
      </h3>
      <div className={[styles['pages__text__container'], styles['container--desktop-order-first']].join(' ')}>
        <h4 className={[styles['pages__text'], styles['text--left']].join(' ')}>
          The Contemporary Craft Center is a place to both see and make art. The center emphasizes a hands-on approach to learning and creating. The simple building blocks that make up the mark are inspired by the nostalgic memories of childhood, representing the institution's playful nature and collaborative environment.
        </h4>
        <h4 className={[styles['pages__text'], styles['text--right']].join(' ')}>
          Materiality and color play a huge role in the center's identity ranging from pattern work to outdoor furniture. I developed the visual language to focus around the idea of learning from your process. There is no fail at the Contemporary Craft Center, because the intention is not to create something perfect, it's simply to create.
        </h4>
      </div>
      <ImgWrapper src={Craft_1} />
      <ImgWrapper src={Craft_2} />
      <ImgWrapper src={Craft_3} />
      <ImgWrapper src={Craft_4} />
      <ImgWrapper src={Craft_5} mov />
      <ImgWrapper src={Craft_6} video />
      <ImgWrapper src={Craft_7} right />
      <ImgWrapper src={Craft_8} left />
      <ImgWrapper src={Craft_9} right />
      <ImgWrapper src={Craft_10} left />
      <ImgWrapper src={Craft_11} right />
      <ImgWrapper src={Craft_12} />
    </div>
  );
};

export default Craft;