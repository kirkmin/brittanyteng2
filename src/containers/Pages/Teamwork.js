import React, { useEffect } from 'react';

import Hero from '../../components/UI/Hero/Hero';
import TextBlock from '../../components/UI/TextBlock/TextBlock';
import TextGrid from '../../components/UI/TextGrid/TextGrid';
import ImgWrapper from '../../components/UI/ImgWrapper/ImgWrapper';

import styles from './Pages.module.css';
import Teamwork_0 from "../../assets/images/Teamwork/Teamwork_0.jpg";
import Teamwork_1 from "../../assets/images/Teamwork/Teamwork_1.jpg";
import Teamwork_2 from "../../assets/images/Teamwork/Teamwork_2.jpg";
import Teamwork_3 from "../../assets/images/Teamwork/Teamwork_3.jpg";
import Teamwork_4 from "../../assets/images/Teamwork/Teamwork_4.gif";
import Teamwork_5 from "../../assets/images/Teamwork/Teamwork_5.jpg";
import Teamwork_6 from "../../assets/images/Teamwork/Teamwork_6.jpg";
import Teamwork_7 from "../../assets/images/Teamwork/Teamwork_7.jpg";

const Teamwork = props => {
    const setBackground = props.setMainBackground;

    useEffect(() => {
        setBackground('white');
        window.scrollTo(0, 0);
    }, [setBackground]);

    return (
        <div className={styles['page']}>
            <Hero src={Teamwork_0} />
            <TextBlock
                headerText="TEAMWORK"
                subheaderText="UI/UX"
                paragraphText={
                    <>
                        BallerTV is building the world’s largest sports network—a goal that wouldn’t be possible without a team of dedicated contractors based around the country. Web solutions to manage this network were created on the fly and could no longer keep up with the rapid pace at which the company was scaling.
                        <br /><br />
                        Our solution was to create a hybrid app designed to handle tasks related to the contractor application process, training and onboarding, event information, communications, project management, and payments for services.
                    </>
                }
            />
            <TextBlock
                headerText="WHAT DID WE SOLVE?"
                paragraphText={
                    <TextGrid>
                        <span>1.  </span><span>Standardizing and scaling operating procedures to reach 0% margins and create quality control.<br /></span>
                        <span>2.  </span><span>Improve coverage quality by providing tools that help contractors efficiently troubleshoot. <br /></span>
                        <span>3.  </span><span>Create a mobile optimized user experience that cultivates stronger relationships between contractors and BallerTV.</span>
                    </TextGrid>
                }
            />
            <ImgWrapper src={Teamwork_1} page />
            <TextBlock
                headerText="INSIGHTS FROM OUR CONTRACTORS"
                paragraphText={
                    <>
                        Conducting interviews, observing card sorting, and sending field kits to a handful of our contractors, helped us understand that their thought processes and incentives varied greatly between each other.
                        <br /><br />
                        It was our responsibility to identify pain points starting from event sign up to getting paid—designing a seamless experience is crucial for our contractors to effectively do their job.
                        <br /><br />
                        <TextGrid>
                            <span>1.  </span><span>Contractors are not fully prepped prior to working their first event—communication is lacking on what they should expect<br /></span>
                            <span>2.  </span><span>Alerts and information are scattered across different platforms (text messages, web pages, PDFs), so locating resources is very frustrating</span>
                        </TextGrid>
                    </>
                }
            />
            <TextBlock
                headerText={<>SOFT RELEASE —<br /> COURT SELECTOR</>}
                paragraphText={
                    <>
                        After Internal testing of the “Events” section, we took our user learnings and updated the “Court Selector”.
                        <br /><br />
                        A major objective for designing this app was to create hierarchy and only surface relevant info. In order to improve quality coverage for our customers and cultivate relationships with our contractors, the “Stream Dashboard” became an essential feature. Here, contractors are able to focus on what’s important—checking the status of streams and troubleshooting issues.
                    </>
                }
            />
            <ImgWrapper src={Teamwork_2} page />
            <ImgWrapper src={Teamwork_3} page />
            <TextBlock
                headerText="CHECKLIST V 1.0"
                paragraphText={
                    <>
                        To guide our contractors throughout an event, we worked with Operations to assemble a to-do list. The “Checklist” in our Soft Release contained 38 tasks—an unecessary mix of reminders and non-actionable items.
                        <br /><br />
                        Our solution was to surface tasks by day as the event went on—the goal was to assist but not overwhelm. Each task triggers a card with more information and an Actionable Item such as uploading a photo for completion. After completion, the task would automatically move to the bottom of the list so contractors could focus on what’s next.*
                        <br /><br />
                        *Currently monitoring metrics
                    </>
                }
            />
            <ImgWrapper src={Teamwork_4} page />
            <ImgWrapper src={Teamwork_5} page />
            <TextBlock
                headerText="APPLY V 1.5"
                paragraphText={
                    <>
                        Although all features were designed before internal testing, due to limited engineering resources, “Apply” was pushed to release in Version 1.5.
                        <br /><br />
                        After filling out an initial application, contractors were able to easily apply for nearby events. Recommendations were based on past events they worked and proximity. To maintain transparency throughout the application process, all applied events were stored under “Your Events” and sorted by Approved, Pending, Declined, and Past 30 Days. 
                        <br /><br />
                        There are now clear indications for the requirements of each event, whether that’s orientation or travel—all pertinent information can be found here.
                    </>
                }
            />
            <ImgWrapper src={Teamwork_6} page />
            <ImgWrapper src={Teamwork_7} page />
        </div>
    );
};

export default Teamwork;