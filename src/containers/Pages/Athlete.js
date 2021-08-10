import React, { useEffect } from 'react';

import Hero from '../../components/UI/Hero/Hero';
import TextBlock from '../../components/UI/TextBlock/TextBlock';
import TextGrid from '../../components/UI/TextGrid/TextGrid';
import ImgWrapper from '../../components/UI/ImgWrapper/ImgWrapper';

import styles from './Pages.module.css';
import Athlete_0 from "../../assets/images/Athlete/Athlete_0.jpg";
import Athlete_1 from "../../assets/images/Athlete/Athlete_1.png";
import Athlete_2 from "../../assets/images/Athlete/Athlete_2.jpg";
import Athlete_3 from "../../assets/images/Athlete/Athlete_3.jpg";
import Athlete_4 from "../../assets/images/Athlete/Athlete_4.jpg";
import Athlete_5 from "../../assets/images/Athlete/Athlete_5.jpg";
import Athlete_6 from "../../assets/images/Athlete/Athlete_6.jpg";
import Athlete_7 from "../../assets/images/Athlete/Athlete_7.jpg";
import Athlete_8 from "../../assets/images/Athlete/Athlete_8.gif";
import Athlete_9 from "../../assets/images/Athlete/Athlete_9.jpg";
import Athlete_10 from "../../assets/images/Athlete/Athlete_10.jpg";
import Athlete_11 from "../../assets/images/Athlete/Athlete_11.jpg";
import Athlete_12 from "../../assets/images/Athlete/Athlete_12.png";

const Athlete = props => {
    const setBackground = props.setMainBackground;

    useEffect(() => {
        setBackground('white');
        window.scrollTo(0, 0);
    }, [setBackground]);

    return (
        <div className={styles['page']}>
            <Hero src={Athlete_0} />
            <TextBlock
                headerText="ATHLETE MIXTAPE"
                subheaderText="UI/UX"
                paragraphText={
                    <>
                        BallerTV is about more than capturing live content and replays from the most popular sports events across the country. It’s about showcasing and sharing your athlete’s best moments. The Athlete Mixtape is an online video editing service that provides the perfect solution for parents to custom build multi-event player highlight reels easily.
                        <br /><br />
                        Design and Product collaborated to innovate this new product that undoubtedly adds more value for our members. Our challenge was to build a low friction product, work around engineering limitations, and ultimately figure out how to market this mixtape to obtain new customers.
                    </>
                }
            />
            <ImgWrapper src={Athlete_1} page />
            <TextBlock
                headerText="WHAT DID WE SOLVE?"
                paragraphText={
                    <>
                        Single-game player download clips were intially offered. This forced parents to download various games, upload them to a third party site, and stitch them together, driving away traffic from our website and creating more work for our customers.
                        <br /><br />
                        By offering multi-event player highlights, we can retain customers within our business ecosystem and move towards our goal of 0% margins.
                    </>
                }
            />
            <TextBlock
                headerText="INSIGHTS FROM MARKET RESEARCH"
                paragraphText={
                    <TextGrid>
                        <span>1.  </span><span>Parents buy mixtapes, but the issues they run into is lack of content, automation, and quality.<br /></span>
                        <span>2.  </span><span>Parents mentioned they wish we had player highlights across different streams so they don’t have to outsource to edit.<br /></span>
                        <span>3.  </span><span>Parents want to include detailed information in the clips such as name, school, position, etc. for recruitment purposes.<br /></span>
                        <span>4.  </span><span>College coaches want to see the strongest play first and keep the video short (3–5 min).</span>
                    </TextGrid>
                }
            />
            <ImgWrapper src={Athlete_2} page />
            <ImgWrapper src={Athlete_3} page />
            <TextBlock
                headerText="Wireframing V 1.0"
                paragraphText={
                    <>
                        When wireframing the initial version we made thefollowing UX decisions:
                        <br /><br />
                        <TextGrid>
                            <span>1.  </span><span>Letting them search our content library on the event level. Higher confidence of finding content, rather than searching by team.<br /></span>
                            <span>2.  </span><span>Allowing a level of customization by having ‘must have moments’.<br /></span>
                            <span>3.  </span><span>Ease the anxiety of the video editor not tracking the right athlete by identifying their athlete jersey per game.</span>
                        </TextGrid>
                    </>
                }
            />
            <ImgWrapper src={Athlete_4} page />
            <ImgWrapper src={Athlete_5} page />
            <ImgWrapper src={Athlete_6} page />
            <TextBlock
                headerText="Wireframing V 2.0"
                paragraphText={
                    <>
                        With the rebrand we had bandwidth to update the front end and make UX changes we didnt have the resources to make. The focus is creating more delightful moments for users to increase the NPS.
                        <br /><br />
                        Borrowing food delivery UX, we implemented an editable order summary that is sticky throughout the process—it allows the user to focus on the content but know that they can always modify their order along the way.
                    </>
                }
            />
            <ImgWrapper src={Athlete_7} page />
            <ImgWrapper src={Athlete_8} page />
            <ImgWrapper src={Athlete_9} page />
            <ImgWrapper src={Athlete_10} page />
            <ImgWrapper src={Athlete_11} page />
            <ImgWrapper src={Athlete_12} page />
        </div>
    );
};

export default Athlete;