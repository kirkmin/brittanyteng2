import React, { useEffect } from 'react';

import ImgWrapper from '../../components/UI/ImgWrapper/ImgWrapper';

import styles from './Pages.module.css';
import Breadblok_0 from "../../assets/images/Breadblok/Breadblok_0.png";
import Breadblok_1 from "../../assets/images/Breadblok/Breadblok_1.png";
import Breadblok_2 from "../../assets/images/Breadblok/Breadblok_2.png";
import Breadblok_3 from "../../assets/images/Breadblok/Breadblok_3.png";
import Breadblok_4 from "../../assets/images/Breadblok/Breadblok_4.png";
import Breadblok_5 from "../../assets/images/Breadblok/Breadblok_5.png";
import Breadblok_6 from "../../assets/images/Breadblok/Breadblok_6.png";
import Teamwork_9 from "../../assets/images/Teamwork/Teamwork_9.png";

const Breadblok = props => {
  const setBackground = props.setMainBackground;

  useEffect(() => {
    setBackground('white');
    window.scrollTo(0, 0);
  }, [setBackground]);

  return (
    <div className={styles['pages__container']}>
      <ImgWrapper src={Breadblok_0} />
      <h3 className={[styles['pages__text'], styles['text--title']].join(' ')}>Breadblok</h3>
      <div className={[styles['pages__text__container'], styles['container--desktop-order-first']].join(' ')}>
        <h4 className={[styles['pages__text'], styles['text--left']].join(' ')}>
          Breadblok is an organic, gluten-free bakery in Santa Monica, CA. They produce a wide offering of baked goods and entrees for those who are gluten-free — as well as those with other food sensitivities.
        </h4>
        <h4 className={[styles['pages__text'], styles['text--right']].join(' ')}>
          Currently, their visual identity does not do its products justice, so I challenged myself to create a brand and digital experience that reflects their thoughtfulness and the comfort they bring to their customers.
        </h4>
      </div>
      <hr className={styles['hr-mobile-only']}/>
      <div className={[styles['pages__text__container'], styles['container--extra-margins']].join(' ')}>
        <h3 className={[styles['pages__text'], styles['text--left'], styles['text--greater']].join(' ')}>
          What am I solving?
        </h3>
        <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser']].join(' ')}>
          Breadblok’s current brand lacks the sophistication and warmth of its Santa Monica storefront — their online presence doesn’t reflect the same care and pride they take in their products. I redesigned their overall brand including logotype, typography, and color palette to elevate the visual language to represent their refined palate of offerings.<br/><br/>
          I’ve implemented an Order for Pickup feature on their website to avoid a forced app download and optimized their menu to be easily accessible on mobile and web.
        </h4>
      </div>
      <ImgWrapper extraMargins mobileMarginTop src={Breadblok_1} />
      <ImgWrapper extraMargins mobileMarginTop src={Breadblok_2} />
      <ImgWrapper extraMargins mobileMarginTop src={Breadblok_3} />
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--righty-grid'], styles['container--little-margin-bottom'], styles['container--little-margin-top'], styles['container--little-margin-bottom']].join(' ')}>
        <div className={[styles['pages__text'], styles['text--left'], styles['text--boxed']].join(' ')}>
          <h4 className={[styles['text-box-content'], styles['text-box-content--mobile-margin-top']].join(' ')}>
            What makes Breadblok incredibly unique is their offering of goods that are made for all sorts of people with food sensitivities. It’s important to have this information available at the top of the menu so that people can quickly identify each allergy abbreviation.<br/><br/>
            Breadblok’s current menu is a PDF, so on mobile you have to zoom in to each section of the menu to be able to read it. Creating a simple tabbed, single column menu provides a frictionless experience.
          </h4>
        </div>
        <ImgWrapper right gridItem mobileMarginTop src={Breadblok_4} />
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--lefty-grid'], styles['container--little-margin-bottom'], styles['container--little-margin-top'], styles['container--little-margin-bottom']].join(' ')}>
        <ImgWrapper left gridItem mobileMarginTop src={Breadblok_5} />
        <div className={[styles['pages__text'], styles['text--right'], styles['text--boxed']].join(' ')}>
          <h4 className={[styles['text-box-content'], styles['text-box-content--mobile-margin-top']].join(' ')}>
            The Order Pickup feature follows a standard food delivery UX — a card providing more information upon selection, the option to add special instructions, and a sticky basket for access to checkout immediately.
          </h4>
        </div>
      </div>
      <ImgWrapper extraMargins mobileMarginTop src={Breadblok_6} />
    </div>
  );
};

export default Breadblok;