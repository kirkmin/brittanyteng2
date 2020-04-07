import React, { useEffect } from 'react';

import ImgWrapper from '../../components/UI/ImgWrapper/ImgWrapper';

import styles from './Pages.module.css';
import Design_0 from "../../assets/images/Design/Design_0.png";
import Design_1 from "../../assets/images/Design/Design_1.png";
import Design_2 from "../../assets/images/Design/Design_2.png";
import Design_3 from "../../assets/images/Design/Design_3.png";
import Design_4 from "../../assets/images/Design/Design_4.png";
import Design_5 from "../../assets/images/Design/Design_5.png";
import Design_6 from "../../assets/images/Design/Design_6.png";
import Design_7 from "../../assets/images/Design/Design_7.png";
import Design_8 from "../../assets/images/Design/Design_8.png";
import Design_9 from "../../assets/images/Design/Design_9.png";
import Design_10 from "../../assets/images/Design/Design_10.png";

const Design = props => {
  const setBackground = props.setMainBackground;

  useEffect(() => {
    setBackground('white');
    window.scrollTo(0, 0);
  }, [setBackground]);

  return (
    <div className={styles['pages__container']}>
      <ImgWrapper src={Design_0} />
      <h3 className={[styles['pages__text'], styles['text--title']].join(' ')}>BallerTV Design System</h3>
      <div className={[styles['pages__text__container'], styles['container--desktop-order-first']].join(' ')}>
        <h4 className={[styles['pages__text'], styles['text--left']].join(' ')}>
          BallerTV lacked any formal style guide, system, or even a simple UI library. As the Design team was established, we created our own library of parts, internally knowing how it was meant to be used. However, when collaborating with engineering an front end, there were glaring inconsistencies.<br/><br/>
          As new products were being developed outside of our core web product, we felt that it was the right time to establish a living design system.
        </h4>
        <h4 className={[styles['pages__text'], styles['text--right']].join(' ')}>
          We built the foundation of the design system starting with our Contractor app, Teamwork, where we made a lot of learnings, mistakes, and happy accidents. After ironing out all the bugs with the mobile design system, we worked towards creating systems for web and iPad OS.<br/><br/>
          To unify the entire system regardless of device, OS, or interface we established a cohesive set of UI and UX principles that could scale and adapt with the company.
        </h4>
      </div>
      <hr className={styles['hr-mobile-only']}/>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--little-margin-bottom']].join(' ')}>
        <h3 className={[styles['pages__text'], styles['text--left'], styles['text--greater']].join(' ')}>
          Establishing <br className={styles['br-desktop-only']}/>UI/UX Principles
        </h3>
        <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser']].join(' ')}>
          BallerTV connects people everywhere by providing the content and platform to share memorable experiences. We’ve designed and built two systems for our internal digital tools and one system for our consumer facing products to meet our business needs, and to manage our growing network of members.<br/><br/>
          The goal of creating a design system is to enhance the user experience by creating delightful products, both internally and externally. Before getting lost in the nuances of type and color, we established 5 UI/UX Principles to guide our process.
        </h4>
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--little-margin-top'], styles['container--little-margin-bottom']].join(' ')}>
        <div className={[styles['pages__text'], styles['text--right']].join(' ')}>
          <h4 className={[styles['pages__text'], styles['text--right'], styles['text--greater']].join(' ')}>1. Be our Users</h4>
          <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser'], styles['text--only-desktop']].join(' ')}>When designing content, we need to design as if we are our users. We need to see, think, touch, and say what our typical user would do. This will help make better design decisions. Be challenged to innovate for the sake of our users.</h4>
        </div>
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--little-margin-top'], styles['container--little-margin-bottom']].join(' ')}>
        <div className={[styles['pages__text'], styles['text--right']].join(' ')}>
          <h4 className={[styles['pages__text'], styles['text--right'], styles['text--greater']].join(' ')}>2. Keep it clear</h4>
          <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser'], styles['text--only-desktop']].join(' ')}>Evoke a sense of confidence in our user at every step they encounter. Use size and weight to establish hierarchy, color to denote significance, and illustrations to supplement descriptions. In order to effectively guide our users, all these elements must unite to provide a well-paved, frictionless road.</h4>
        </div>
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--little-margin-top'], styles['container--little-margin-bottom']].join(' ')}>
        <div className={[styles['pages__text'], styles['text--right']].join(' ')}>
          <h4 className={[styles['pages__text'], styles['text--right'], styles['text--greater']].join(' ')}>3. Design with familiarity</h4>
          <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser'], styles['text--only-desktop']].join(' ')}>Don’t reinvent the wheel. Design from familiarity in industry standard user experience and user interface. This not only means familiarity with standard UI principles, but also familiarity within our own platforms. Design is built on communication and leveraging the systems that others have established is one of the greatest tools at our disposal. </h4>
        </div>
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--little-margin-top'], styles['container--little-margin-bottom']].join(' ')}>
        <div className={[styles['pages__text'], styles['text--right']].join(' ')}>
          <h4 className={[styles['pages__text'], styles['text--right'], styles['text--greater']].join(' ')}>4. Design for consistency</h4>
          <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser'], styles['text--only-desktop']].join(' ')}>User experience should have a consistent pattern throughout the platform to create habitual user experience. Build a foundational knowledge for our user base and be useful when we introduce new products. </h4>
        </div>
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--little-margin-top']].join(' ')}>
        <div className={[styles['pages__text'], styles['text--right']].join(' ')}>
          <h4 className={[styles['pages__text'], styles['text--right'], styles['text--greater']].join(' ')}>5. Always consider</h4>
          <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser'], styles['text--only-desktop']].join(' ')}>Did we explore all our options? Is the output worth the input of time and resources? Does this enhance the user experience or detract from it? </h4>
        </div>
      </div>
      <hr/>
      <div className={[styles['pages__text__container'], styles['container--extra-margins']].join(' ')}>
        <h3 className={[styles['pages__text'], styles['text--left'], styles['text--greater']].join(' ')}>
          How did we do this?
        </h3>
        <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser']].join(' ')}>
          Each system is made up of foundational elements like defined text styles for headers and content, a color palette, and symbols for common elements like buttons, navigation, and cards.<br/><br/>
          We created 3 systems to meet our needs—Lightweight (tablet), Middleweight (mobile), and Heavyweight (desktop). Our naming convention represents the weight of components each system carries—tablet having the least and desktop having the most.
        </h4>
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--righty-grid'], styles['container--little-margin-bottom'], styles['container--little-margin-top'], styles['container--little-margin-bottom']].join(' ')}>
        <div className={[styles['pages__text'], styles['text--left'], styles['text--boxed']].join(' ')}>
          <h4 className={[styles['text-box-content'], styles['text-box-content--mobile-margin-top']].join(' ')}>
            Our choice of design tool was Sketch, making nesting symbols and standardizing grids infinitely easier. After the designs system were built, we hosted them on an internal site made available to the company.
          </h4>
        </div>
        <ImgWrapper right gridItem mobileMarginTop src={Design_1} />
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--righty-grid'], styles['container--little-margin-bottom'], styles['container--little-margin-top']].join(' ')}>
        <ImgWrapper right gridItem mobileMarginTop src={Design_2} />
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--lefty-grid'], styles['container--little-margin-bottom'], styles['container--little-margin-top'], styles['container--little-margin-bottom']].join(' ')}>
        <ImgWrapper left gridItem mobileMarginTop src={Design_3} />
        <div className={[styles['pages__text'], styles['text--right'], styles['text--boxed']].join(' ')}>
          <h4 className={[styles['text-box-content'], styles['text-box-content--mobile-margin-top'], styles['text-box-content--mobile-margin-bottom']].join(' ')}>
            Heavyweight bears the load of our web system. Middleweight was designed for Teamwork (an internal hybrid app). Lightweight functions as the system for iPad OS (internal).
          </h4>
        </div>
      </div>
      <ImgWrapper right gridItem mobileMarginTop src={Design_4} />
      <ImgWrapper right gridItem mobileMarginTop src={Design_5} />
      <ImgWrapper right gridItem mobileMarginTop src={Design_6} />
      <ImgWrapper right gridItem mobileMarginTop src={Design_7} />
      <ImgWrapper right gridItem mobileMarginTop src={Design_8} />
      <ImgWrapper right gridItem mobileMarginTop src={Design_9} />
      <ImgWrapper right gridItem mobileMarginTop src={Design_10} />
    </div>
  );
};

export default Design;