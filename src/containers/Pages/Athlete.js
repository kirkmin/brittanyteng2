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
      <div className={[styles['pages__text__container'], styles['container--desktop-order-first']].join(' ')}>
        <h4 className={[styles['pages__text'], styles['text--left']].join(' ')}>
          BallerTV is about more than capturing live content and replays from the most popular sports events across the country. It’s about showcasing and sharing your athlete’s best moments. The Athlete Mixtape is an online video editing service that provides the perfect solution for parents to custom build multi-event player highlight reels easily.
        </h4>
        <h4 className={[styles['pages__text'], styles['text--right']].join(' ')}>
          Design and Product collaborated to innovate this new product that undoubtedly adds more value for our members. Our challenge was to build a low friction product, work around engineering limitations, and ultimately figure out how to market this mixtape to obtain new customers.
        </h4>
      </div>
      <hr className={styles['hr-mobile-only']}/>
      <div className={[styles['pages__text__container'], styles['container--extra-margins']].join(' ')}>
        <h3 className={[styles['pages__text'], styles['text--left'], styles['text--greater']].join(' ')}>
          What are we trying to solve?
        </h3>
        <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser']].join(' ')}>
          Single-game player download clips were intially offered. This forced parents to download various games, upload them to a third party site, and stitch them together, driving away traffic from our website and creating more work for our customers.<br/><br/>
          By offering multi-event player highlights, we can retain customers within our business ecosystem and move towards our goal of 0% margins.
        </h4>
      </div>
      <hr className={styles['hr-desktop-only']}/>
      <div className={styles['container__dynamic-order-wrapper']}>
        <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--insights']].join(' ')}>
          <h3 className={[styles['pages__text'], styles['text--left'], styles['text--greater']].join(' ')}>
            Insights from Market Research
          </h3>
          <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser']].join(' ')}>
            <ol>
              <li>Parents buy mixtapes, but the issues they run into is lack of content, automation, and quality.</li><br/>
              <li>Parents mentioned they wish we had player highlights across different streams so they don’t have to outsource  to edit.</li><br/>
              <li>Parents want to include detailed information in the clips such as name, school, position, etc. for recruitment purposes.</li><br/>
              <li>College coaches want to see the strongest play first and keep the video short (3–5 min).</li>
            </ol>
          </h4>
        </div>
        <ImgWrapper extraMargins boxShadow mobileTop mobileMarginTop src={Athlete_1} />
        <ImgWrapper extraMargins boxShadow mobileTop mobileMarginTop src={Athlete_2} />
      </div>
      <hr className={styles['hr-mobile-only']}/>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--wireframing']].join(' ')}>
        <h3 className={[styles['pages__text'], styles['text--left'], styles['text--greater']].join(' ')}>
          Wireframing <br className={styles['br-desktop-only']}/>Version 1.0
        </h3>
        <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser']].join(' ')}>
          When wireframing the initial version we made the following UX decisions:<br/><br/>
          <ol>
            <li>Letting them search our content library on the event level. Higher confidence of finding content, rather than searching by team.</li><br/>
            <li>Allowing a level of customization by having ‘must have moments’.</li><br/>
            <li>Ease the anxiety of the video editor not tracking the right athlete by identifying their athlete jersey per game.</li>
          </ol>
        </h4>
      </div>
      <ImgWrapper extraMargins src={Athlete_3} />
      <hr className={styles['hr-extra-margins']}/>
      <div className={[styles['pages__text__container'], styles['container--section-header']].join(' ')}>
        <h2 className={[styles['pages__text'], styles['text--header']].join(' ')}>Version 1.0</h2>
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--lefty-grid'], styles['container--little-margin-bottom'], styles['container--only-for-large']].join(' ')}>
        <ImgWrapper left gridItem boxShadow src={Athlete_4} />
        <div className={[styles['pages__text'], styles['text--right'], styles['text--boxed']].join(' ')}>
          <h4 className={[styles['text-box-content'], styles['text-box-content--mobile-margin-top']].join(' ')}>
            In order to integrate all the capabilities of this product into a seamless experience, the ability to click through events and scroll within the results was a necessity. Buttons highlighted in blue indicate primary actions—switching between events and checking out. Users are able to preview games—triggering a viewport so you can verify this is the correct game and identify your child’s jersey number.
          </h4>
        </div>
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--tetris-grid']].join(' ')}>
        <div className={[styles['pages__text'], styles['text--top-left'], styles['text--boxed']].join(' ')}>
          <h4 className={styles['text-box-content']}>
            We designed a natural language form to capture athlete data—this felt more personable and engaging as a first step for our new product.
          </h4>
        </div>
        <ImgWrapper left gridItem topRight boxShadow src={Athlete_5} />
        <ImgWrapper left gridItem bottomLeft boxShadow src={Athlete_6} />
        <div className={[styles['pages__text'], styles['text--bottom-right'], styles['text--boxed']].join(' ')}>
          <h4 className={styles['text-box-content']}>
            The same tiles were carried over from our core website to maintain familiarity with identifying games and events.<br/><br/>
            Parents can easily keep track of their selections by tapping the “Selected Events” accordion menu.
          </h4>
        </div>
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--tetris-grid']].join(' ')}>
        <div className={[styles['pages__text'], styles['text--top-left'], styles['text--boxed']].join(' ')}>
          <h4 className={styles['text-box-content']}>
            A modal is triggered once they select a game, in order to capture their athlete’s info and any specific plays.
          </h4>
        </div>
        <ImgWrapper left gridItem topRight boxShadow src={Athlete_7} />
        <ImgWrapper left gridItem bottomLeft boxShadow src={Athlete_8} />
        <div className={[styles['pages__text'], styles['text--bottom-right'], styles['text--boxed']].join(' ')}>
          <h4 className={styles['text-box-content']}>
            Once all events are selected, the “Edit Team” button allows parents to add their athlete’s team and surface games they participated in during those events.
          </h4>
        </div>
      </div>
      <hr className={[styles['hr-mobile-only'], styles['hr-extra-margin-top']].join(' ')}/>
      <div className={[styles['pages__text__container'], styles['container--section-header'], styles['container--more-margins'], styles['container--smaller-mobile']].join(' ')}>
        <h2 className={[styles['pages__text'], styles['text--header']].join(' ')}>Launch Metric Results Version 1.0</h2>
        <h3 className={[styles['pages__text'], styles['text--subheader']].join(' ')}>(Oct 2019–Feb 2020)</h3>
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--lefty-grid'], styles['container--more-margins'], styles['container--max-width-mobile']].join(' ')}>
        <div className={[styles['pages__text'], styles['text--left'], styles['text--centered-boxed']].join(' ')}>
          <h3 className={styles['centered-box-content']}>201 Athlete Mixtape Orders</h3>
          <h3 className={styles['centered-box-content']}>vs</h3>
          <h3 className={styles['centered-box-content']}>94 Player Clip Orders</h3>
        </div>
        <div className={[styles['pages__text'], styles['text--right'], styles['text--centered-circle']].join(' ')}>
          <div className={[styles['pages__text__centered-circle']].join(' ')}>
            <h2 className={styles['centered-circle-header']}>67</h2>
            <h4 className={styles['centered-circle-subheader']}>Version 1.0 NPS</h4>
          </div>
        </div>
      </div>
      <hr/>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--wireframing']].join(' ')}>
        <h3 className={[styles['pages__text'], styles['text--left'], styles['text--greater']].join(' ')}>
          Wireframing <br className={styles['br-desktop-only']}/>Version 2.0
        </h3>
        <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser']].join(' ')}>
          With the rebrand we had bandwidth to update the front end and make UX changes we didnt have the resources to make. The focus is creating more delightful moments for users to increase the NPS.
        </h4>
      </div>
      <ImgWrapper extraMargins src={Athlete_9} />
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--wireframing']].join(' ')}>
        <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser']].join(' ')}>
          Borrowing food delivery UX, we implemented an editable order summary that is sticky throughout the process—it allows the user to focus on the content but know that they can always modify their order along the way.
        </h4>
      </div>
      <hr className={styles['hr-extra-margins']}/>
      <div className={[styles['pages__text__container'], styles['container--section-header'], styles['container--margin-bottom']].join(' ')}>
        <h2 className={[styles['pages__text'], styles['text--header']].join(' ')}>Version 2.0</h2>
      </div>
      <ImgWrapper extraMargins src={Athlete_10} mobileMarginBottom />
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--double-box-container'], styles['container--little-margin-bottom'], styles['container--little-margin-top']].join(' ')}>
        <div className={[styles['pages__text'], styles['text--left'], styles['text--boxed']].join(' ')}>
          <h4 className={styles['text-box-content']}>
            For Version 2.0, we had the opportunity and resources to refresh the UI and flesh out the UX further. In order to shorten the process and create less friction, we opted to have all Athlete Info input on one screen.<br/><br/>
            In line with food delivery UX, we added a sticky icon to the top right so they could modify or complete their order at any point in the process.
          </h4>
        </div>
        <div className={[styles['pages__text'], styles['text--right'], styles['text--boxed']].join(' ')}>
          <h4 className={[styles['text-box-content'], styles['text-box-content--mobile-no-padding-top']].join(' ')}>
            After adding a game, you would be returned to the list of games to add more, or complete your mixtape order.<br/><br/>
            We were able to incorporate Search in the process, so parents could find their events and games much faster. The Select action was separated from the event and game tiles, to clearly distinguish between previewing a game and selecting one.
          </h4>
        </div>
      </div>
      <ImgWrapper extraMargins src={Athlete_11} mobileMarginTop />
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--lefty-grid'], styles['container--little-margin-bottom'], styles['container--little-margin-top']].join(' ')}>
        <ImgWrapper left gridItem src={Athlete_12} mobileMarginTop mobileMarginBottom />
        <div className={[styles['pages__text'], styles['text--right'], styles['text--boxed']].join(' ')}>
          <h4 className={styles['text-box-content']}>
            Since this is a new product, it was essential for us to include a sample Athlete Mixtape for both current and new customers to see what they can create with this tool.
        </h4>
        </div>
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--righty-grid'], styles['container--little-margin-bottom'], styles['container--little-margin-top']].join(' ')}>
        <div className={[styles['pages__text'], styles['text--left'], styles['text--boxed']].join(' ')}>
          <h4 className={[styles['text-box-content'], styles['text-box-content--mobile-no-padding-top']].join(' ')}>
            For Version 2.0, we tested moving payment to the beginning of the flow to improve conversion.*<br/><br/>
            *Currently monitoring metrics
          </h4>
        </div>
        <ImgWrapper right gridItem src={Athlete_12} mobileMarginTop />
      </div>
      <ImgWrapper extraMargins src={Athlete_13} mobileMarginTop />
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--wireframing'], styles['container--mobile-extra-padding-bottom']].join(' ')}>
        <h3 className={[styles['pages__text'], styles['text--left'], styles['text--greater']].join(' ')}>
          Where do we go from here?
        </h3>
        <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser']].join(' ')}>
          Moving forward, we would continue to track all the other metrics but really focus on NPS increasing and reducing mobile drop off rate.
        </h4>
      </div>
    </div>
  );
};

export default Athlete;