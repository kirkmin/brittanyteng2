import React, { useState, useEffect } from 'react';

import ImgWrapper from '../../components/UI/ImgWrapper/ImgWrapper';
import HomeLink from '../../components/HomeLink/HomeLink';

import styles from './Home.module.css';
import Daily_0 from "../../assets/images/Daily/Daily_0.jpg";
import Apple_7 from "../../assets/images/Apple/Apple_7.jpg";
import Apple_8 from "../../assets/images/Apple/Apple_8.jpg";
import Breadblok_0 from "../../assets/images/Breadblok/Breadblok_0.png";
import Athlete_0 from "../../assets/images/Athlete/Athlete_0.jpg";
import Craft_0 from '../../assets/images/Craft/Craft_0.png';
import Transcendent_0 from '../../assets/images/Transcendent/Transcendent_0.jpg';
import Teamwork_0 from '../../assets/images/Teamwork/Teamwork_0.jpg'

const Home = props => {
    const [currentSrc, setcurrentSrc] = useState(null);
    const setBackground = props.setMainBackground;

    useEffect(() => {
        setBackground('green');
        window.scrollTo(0, 0);
    }, [setBackground]);

    return (
        <div className={styles["home"]}>
            <div className={[styles["home__section"], styles["section--left"]].join(" ")}>
                <ImgWrapper src={currentSrc} desktop fixed half={currentSrc === Apple_8} />
            </div>
            <div className={[styles["home__section"], styles["section--right"]].join(" ")}>
                <p className={styles["home__paragraph"]}>Brittany Teng is a creative based in Los Angeles specializing in UI/UX, branding, campaigns, and dabbling in ceramics. She approaches design the same way she approaches dogs. Hands-on. Connect with her at hi@brittanyteng.com.</p>
                <div className={styles["home__links-container"]}>
                    <HomeLink
                        to="daily"
                        header="THE DAILY BY THE NEW YORK TIMES"
                        subheader="Print, OOH Campaign"
                        src={Daily_0}
                        mouseEnterHandler={() => { setcurrentSrc(Daily_0); }}
                        mouseLeaveHandler={() => { setcurrentSrc(null); }}
                    />
                    <HomeLink
                        to="apple"
                        header="APPLE"
                        subheader="UI/UX"
                        src={Apple_7}
                        mouseEnterHandler={() => { setcurrentSrc(Apple_8); }}
                        mouseLeaveHandler={() => { setcurrentSrc(null); }}
                    />
                    <HomeLink
                        to="breadblok"
                        header="BREADBLOK"
                        subheader="Branding, UI/UX"
                        src={Breadblok_0}
                        mouseEnterHandler={() => { setcurrentSrc(Breadblok_0); }}
                        mouseLeaveHandler={() => { setcurrentSrc(null); }}
                    />
                    <HomeLink
                        to="athlete"
                        header="ATHLETE MIXTAPE"
                        subheader="UI/UX"
                        src={Athlete_0}
                        mouseEnterHandler={() => { setcurrentSrc(Athlete_0); }}
                        mouseLeaveHandler={() => { setcurrentSrc(null); }}
                    />
                    <HomeLink
                        to="craft"
                        header="CONTEMPORARY CRAFT CENTER"
                        subheader="Branding, Print, Experiential"
                        src={Craft_0}
                        mouseEnterHandler={() => { setcurrentSrc(Craft_0); }}
                        mouseLeaveHandler={() => { setcurrentSrc(null); }}
                    />
                    <HomeLink
                        to="transcendent"
                        header="TRANSCENDENT MATERIAL"
                        subheader="UI/UX"
                        src={Transcendent_0}
                        mouseEnterHandler={() => { setcurrentSrc(Transcendent_0); }}
                        mouseLeaveHandler={() => { setcurrentSrc(null); }}
                    />
                    <HomeLink
                        to="teamwork"
                        header="TEAMWORK"
                        subheader="Branding, UI/UX"
                        src={Teamwork_0}
                        mouseEnterHandler={() => { setcurrentSrc(Teamwork_0); }}
                        mouseLeaveHandler={() => { setcurrentSrc(null); }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;