import React, { useEffect } from 'react';

import ImgWrapper from '../../components/UI/ImgWrapper/ImgWrapper';

import styles from './Pages.module.css';
import Teamwork_0 from "../../assets/images/Teamwork/Teamwork_0.png";
import Teamwork_1 from "../../assets/images/Teamwork/Teamwork_1.png";
import Teamwork_2 from "../../assets/images/Teamwork/Teamwork_2.png";
import Teamwork_3 from "../../assets/images/Teamwork/Teamwork_3.png";
import Teamwork_4 from "../../assets/images/Teamwork/Teamwork_4.png";
import Teamwork_5 from "../../assets/images/Teamwork/Teamwork_5.png";
import Teamwork_6 from "../../assets/images/Teamwork/Teamwork_6.png";
import Teamwork_7 from "../../assets/images/Teamwork/Teamwork_7.gif";
import Teamwork_8 from "../../assets/images/Teamwork/Teamwork_8.png";
import Teamwork_9 from "../../assets/images/Teamwork/Teamwork_9.png";
import Teamwork_10 from "../../assets/images/Teamwork/Teamwork_10.png";
import { ReactComponent as Avatar1 } from '../../assets/images/avatar_1.svg';
import { ReactComponent as Avatar2 } from '../../assets/images/avatar_2.svg';
import { ReactComponent as Avatar3 } from '../../assets/images/avatar_3.svg';

const Teamwork = props => {
  const setBackground = props.setMainBackground;

  useEffect(() => {
    setBackground('white');
    window.scrollTo(0, 0);
  }, [setBackground]);

  return (
    <div className={styles['pages__container']}>
      <ImgWrapper src={Teamwork_0} />
      <h3 className={[styles['pages__text'], styles['text--title']].join(' ')}>Teamwork</h3>
      <div className={[styles['pages__text__container'], styles['container--desktop-order-first']].join(' ')}>
        <h4 className={[styles['pages__text'], styles['text--left']].join(' ')}>
          BallerTV is building the world’s largest sports network—a goal that wouldn’t be possible without a team of dedicated contractors based around the country. Web solutions to manage this network were created on the fly and could no longer keep up with the rapid pace at which the company was scaling.
        </h4>
        <h4 className={[styles['pages__text'], styles['text--right']].join(' ')}>
          Our solution was to create a hybrid app designed to handle tasks related to the contractor application process, training and onboarding, event information, communications, project management, and payments for services.
        </h4>
      </div>
      <hr className={styles['hr-mobile-only']}/>
      <div className={[styles['pages__text__container'], styles['container--extra-margins']].join(' ')}>
        <h3 className={[styles['pages__text'], styles['text--left'], styles['text--greater']].join(' ')}>
          What are we trying to solve?
        </h3>
        <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser']].join(' ')}>
          <ol>
            <li>Standardizing and scaling operating procedures to reach 0% margins and create quality control.</li><br/>
            <li>Improve coverage quality by providing tools that help contractors efficiently troubleshoot.</li><br/>
            <li>Create a mobile optimized user experience that cultivates stronger relationships between contractors and BallerTV.</li>
          </ol>
        </h4>
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--lefty-grid'], styles['container--little-margin-bottom'], styles['container--little-margin-top'], styles['container--little-margin-bottom']].join(' ')}>
        <ImgWrapper left gridItem mobileMarginTop src={Teamwork_1} />
        <div className={[styles['pages__text'], styles['text--right'], styles['text--boxed']].join(' ')}>
          <h4 className={[styles['text-box-content'], styles['text-box-content--mobile-margin-top'], styles['text-box-content--mobile-margin-bottom']].join(' ')}>
            The original Contractor website is a haphazard mixture of web pages, PDFs, and text messages. The process was never standardized or meant to be scalable, which created major problems when the number of contractors grew to 1,000+ people across the country.<br/><br/>
            It was never optimized for mobile, which is the preferred device for all our contractors. There is no hierarchy, consistency, or familiarity from one page to the next, making it difficult to work in a high stress environment.
          </h4>
        </div>
      </div>
      <hr className={[styles['hr-desktop-only'], styles['hr-extra-margins']].join(' ')}/>
      <div className={[styles['pages__text__container'], styles['container--extra-margins']].join(' ')}>
        <h3 className={[styles['pages__text'], styles['text--left'], styles['text--greater']].join(' ')}>
          Insights from Our Contractors
        </h3>
        <div className={[styles['pages__text'], styles['text--right']].join(' ')}>
          <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser']].join(' ')}>
            Conducting interviews, observing card sorting, and sending field kits to a handful of our contractors, helped us understand that their thought processes and incentives varied greatly between each other.<br/><br/>
            It was our responsibility to identify pain points starting from event sign up to getting paid—designing a seamless experience is crucial for our contractors to effectively do their job.
          </h4><br/><br/>
          <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser'], styles['text--padding-top-none']].join(' ')}>
            <ol>
              <li>Contractors are not fully prepped prior to working their first event—communication is lacking on what they should expect</li><br/>
              <li>Alerts and information are scattered across different platforms (text messages, web pages, PDFs), so locating resources is very frustrating</li>
            </ol>
          </h4>
        </div>
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--righty-grid'], styles['container--little-margin-bottom'], styles['container--little-margin-top'], styles['container--little-margin-bottom']].join(' ')}>
        <div className={[styles['pages__text'], styles['text--left'], styles['text--boxed']].join(' ')}>
          <h4 className={[styles['text-box-content'], styles['text-box-content--mobile-margin-top']].join(' ')}>
            We designed and sent out several personalized Field Kits to get to know our contractors better. These helped us understand who they are, where they came from, and their motivations for working with us. We asked them questions like who or what influences you and what are your emotional responses throughout the week of an event.
          </h4>
        </div>
        <ImgWrapper right gridItem mobileMarginTop src={Teamwork_2} />
      </div>
      <hr className={styles['hr-extra-margins']}/>
      <div className={[styles['pages__text__container'], styles['container--extra-margins']].join(' ')}>
        <h3 className={[styles['pages__text'], styles['text--left'], styles['text--greater']].join(' ')}>
          Information Architecture
        </h3>
        <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser']].join(' ')}>
          After extensive card sorting interviews, we discovered that there was no standard mental model for their experience. The results were consistent across some familiar categories like payments, messages, and account settings. However, when it came to the most significant portions, “Event Management” and “Events and Scheduling”, each contractor’s distribution of features differed.
        </h4>
      </div>
      <ImgWrapper extraMargins mobileMarginTop src={Teamwork_3} />
      <hr className={styles['hr-extra-margins']}/>
      <div className={[styles['pages__text__container'], styles['container--extra-margins']].join(' ')}>
        <h3 className={[styles['pages__text'], styles['text--left'], styles['text--greater']].join(' ')}>
          Wireframing “Apply”
        </h3>
        <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser']].join(' ')}>
          “Apply” is comprised of finding/applying for events, checking application status, and getting more information. There was a lack of transparency when it came to application status—it seemed that an application would disappear in a black hole until contractors were notified of approval a few days before the event. They couldn’t have fulfilling personal lives because they felt they needed to keep their schedule open in case they were approved for an event.
        </h4>
      </div>
      <ImgWrapper extraMargins mobileMarginTop src={Teamwork_4} />
      <div className={[styles['pages__text__container'], styles['container--extra-margins']].join(' ')}>
        <div className={[styles['pages__text'], styles['text--right']].join(' ')}>
          <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser']].join(' ')}>
            This feature in Teamwork was meant to serve several purposes for our contractors:
          </h4><br/><br/>
          <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser'], styles['text--padding-top-none']].join(' ')}>
            <ol>
              <li>Reduce anxiety when awaiting application approval</li><br/>
              <li>Empowering users by providing them with enough information to make decisions in their personal life</li><br/>
              <li>Provide all necessary information and make it easily accessible</li>
            </ol>
          </h4>
        </div>
      </div>
      <hr/>
      <div className={[styles['pages__text__container'], styles['container--extra-margins']].join(' ')}>
        <h3 className={[styles['pages__text'], styles['text--left'], styles['text--greater']].join(' ')}>
          Soft Release— <br className={styles['br-desktop-only']}/>Court Selector
        </h3>
        <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser']].join(' ')}>
          After Internal testing of the “Events” section, we took our user learnings and updated the “Court Selector”.<br/><br/>
          A major objective for designing this app was to create hierarchy and only surface relevant info. In order to improve quality coverage for our customers and cultivate relationships with our contractors, the “Stream Dashboard” became an essential feature. Here, contractors are able to focus on what’s important—checking the status of streams and troubleshooting issues.
        </h4>
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--righty-grid'], styles['container--little-margin-bottom'], styles['container--little-margin-top'], styles['container--little-margin-bottom']].join(' ')}>
        <div className={[styles['pages__text'], styles['text--left'], styles['text--boxed']].join(' ')}>
          <h4 className={[styles['text-box-content'], styles['text-box-content--mobile-margin-top']].join(' ')}>
            The “Event Hub” acted as a homebase for contractors working an event. The “Stream Dashboard” allows them to select the courts they are assigned to monitor for the duration of the event.
          </h4>
        </div>
        <ImgWrapper right gridItem mobileMarginTop src={Teamwork_5} />
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--lefty-grid'], styles['container--little-margin-bottom'], styles['container--little-margin-top'], styles['container--little-margin-bottom']].join(' ')}>
        <div className={[styles['pages__text'], styles['text--right'], styles['text--boxed']].join(' ')}>
          <h4 className={[styles['text-box-content'], styles['text-box-content--mobile-margin-top']].join(' ')}>
            After Courts were selected, they were color coded based on status. By eliminating the need to search through possibly hundreds of courts to check on theirs, contractors could operate and resolve issues faster.
          </h4>
        </div>
        <ImgWrapper left gridItem mobileMarginTop src={Teamwork_6} />
      </div>
      <div className={[styles['pages__text__container'], styles['container--testimonials'], styles['container--extra-margins'], styles['container--little-margin-bottom'], styles['container--little-margin-top']].join(' ')}>
        <div className={[styles['pages__text'], styles['text--centered-circle']].join(' ')}>
          <div className={[styles['pages__text__centered-circle']].join(' ')}>
            <h2 className={styles['centered-circle-header']}>71</h2>
            <h4 className={styles['centered-circle-subheader']}>Soft Release NPS</h4>
          </div>
        </div>
        <div className={[styles['pages__text'], styles['text--centered-rectangle'], styles['text--testimonial-first']].join(' ')}>
          <div className={styles['pages__text__centered-rectangle']}>
            <div className={styles['centered-rectangle-avatar']}><Avatar1 /></div>
            <div className={styles['centered-rectangle-text']}>
              <h2 className={styles['centered-rectangle-header']}>“I love this! You can see them [Court Labels] all in a second.”</h2>
              <h4 className={styles['centered-rectangle-subheader']}>Aaron Rodriguez</h4>
            </div>
          </div>
        </div>
        <div className={[styles['pages__text'], styles['text--centered-rectangle']].join(' ')}>
          <div className={styles['pages__text__centered-rectangle']}>
            <div className={styles['centered-rectangle-avatar']}><Avatar2 /></div>
            <div className={styles['centered-rectangle-text']}>
              <h2 className={styles['centered-rectangle-header']}>“It’s easier to pull up the Stream Dashboard, Check-In and see the courts!”</h2><br className={styles['br-mobile-only']}/>
              <h4 className={styles['centered-rectangle-subheader']}>Austin Dean</h4>
            </div>
          </div>
        </div>
        <div className={[styles['pages__text'], styles['text--centered-rectangle']].join(' ')}>
          <div className={styles['pages__text__centered-rectangle']}>
            <div className={styles['centered-rectangle-avatar']}><Avatar3 /></div>
            <div className={styles['centered-rectangle-text']}>
              <h2 className={styles['centered-rectangle-header']}>“It’s helping the event run smoothly. I love checking the Stream Dashboard so quickly.”</h2><br className={styles['br-mobile-only']}/>
              <h4 className={styles['centered-rectangle-subheader']}>Kelly Bell</h4>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles['hr-extra-margins']}/>
      <div className={[styles['pages__text__container'], styles['container--section-header'], styles['container--margin-bottom']].join(' ')}>
        <h2 className={[styles['pages__text'], styles['text--header']].join(' ')}>Version 1.0—Checklist</h2>
      </div>
      <ImgWrapper extraMargins mobileMarginTop src={Teamwork_7} />
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--double-box-container'], styles['container--little-margin-bottom'], styles['container--little-margin-top']].join(' ')}>
        <div className={[styles['pages__text'], styles['text--left'], styles['text--boxed']].join(' ')}>
          <h4 className={styles['text-box-content']}>
            To guide our contractors throughout an event, we worked with Operations to assemble a to-do list. The “Checklist” in our Soft Release contained 38 tasks—an unecessary mix of reminders and non-actionable items.<br/><br/>
            Our solution was to surface tasks by day as the event went on—the goal was to assist but not overwhelm.
          </h4>
        </div>
        <div className={[styles['pages__text'], styles['text--right'], styles['text--boxed']].join(' ')}>
          <h4 className={[styles['text-box-content'], styles['text-box-content--mobile-no-padding-top']].join(' ')}>
            Each task triggers a card with more information and an Actionable Item such as uploading a photo for completion. After completion, the task would automatically move to the bottom of the list so contractors could focus on what’s next.*<br/><br/>
            *Currently monitoring metrics
          </h4>
        </div>
      </div>
      <ImgWrapper extraMargins mobileMarginTop src={Teamwork_8} />
      <hr className={styles['hr-extra-margins']}/>
      <div className={[styles['pages__text__container'], styles['container--section-header'], styles['container--margin-bottom']].join(' ')}>
        <h2 className={[styles['pages__text'], styles['text--header']].join(' ')}>Version 1.5—Apply</h2>
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--lefty-grid'], styles['container--little-margin-bottom'], styles['container--little-margin-top'], styles['container--little-margin-bottom']].join(' ')}>
        <ImgWrapper left gridItem mobileMarginTop src={Teamwork_9} />
        <div className={[styles['pages__text'], styles['text--right'], styles['text--boxed']].join(' ')}>
          <h4 className={[styles['text-box-content'], styles['text-box-content--mobile-margin-top']].join(' ')}>
            Although all features were designed before internal testing, due to limited engineering resources, “Apply” was pushed to release in Version 1.5.<br/><br/>
            After filling out an initial application, contractors were able to easily apply for nearby events. Recommendations were based on past events they worked and proximity.
          </h4>
        </div>
      </div>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--right-grid'], styles['container--little-margin-bottom'], styles['container--little-margin-top'], styles['container--little-margin-bottom']].join(' ')}>
        <div className={[styles['pages__text'], styles['text--left'], styles['text--boxed']].join(' ')}>
          <h4 className={[styles['text-box-content'], styles['text-box-content--mobile-margin-top']].join(' ')}>
            To maintain transparency throughout the application process, all applied events were stored under “Your Events” and sorted by Approved, Pending, Declined, and Past 30 Days.<br/><br/>
            There are now clear indications for the requirements of each event, whether that’s orientation or travel—all pertinent information can be found here.
          </h4>
        </div>
        <ImgWrapper right gridItem mobileMarginTop src={Teamwork_10} />
      </div>
      <hr/>
      <div className={[styles['pages__text__container'], styles['container--extra-margins'], styles['container--mobile-extra-padding-bottom']].join(' ')}>
        <h3 className={[styles['pages__text'], styles['text--left'], styles['text--greater']].join(' ')}>
          Solving Coverage Quality and Cultivating Relationships
        </h3>
        <h4 className={[styles['pages__text'], styles['text--right'], styles['text--lesser']].join(' ')}>
          As BallerTV expands its network, Teamwork has proven to be one of the most valuable tools for the company. BallerTV heavily relies on their contractors to provide high-quality coverage and by enhancing their experience during events, we are able to build trust with them and ultimately our paying members.<br/><br/>
          The released feature metrics will continue to be tracked as others begin development in Versions 1.5 and 2.0.
        </h4>
      </div>
    </div>
  );
};

export default Teamwork;