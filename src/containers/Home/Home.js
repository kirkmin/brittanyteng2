import React, { useState, useEffect } from 'react';

import ImgWrapper from '../../components/UI/ImgWrapper/ImgWrapper';
import HomeLink from '../../components/HomeLink/HomeLink';

import styles from './Home.module.css';
import Daily_0 from "../../assets/images/Daily/Daily_0.jpg";
import Apple_7 from "../../assets/images/Apple/Apple_7.jpg";
import Breadblok_0 from "../../assets/images/Breadblok/Breadblok_0.jpg";
import Athlete_0 from "../../assets/images/Athlete/Athlete_0.jpg";
import Craft_0 from '../../assets/images/Craft/Craft_0.jpg';
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
            <ImgWrapper src={currentSrc} desktop />
            <p className={styles["home__paragraph"]}>Brittany Teng is a creative based in Los Angeles specializing in UI/UX, branding, campaigns, and dabbling in ceramics. She approaches design the same way she approaches dogs. Hands-on. Email her at hi@brittanyteng.com.</p>
            <HomeLink
                to="daily"
                header="THE DAILY BY THE NEW YORK TIMES"
                subheader="Print, OOH Campaign"
                src={Daily_0}
            />
            <HomeLink
                to="apple"
                header="APPLE"
                subheader="UI/UX"
                src={Apple_7}
            />
            <HomeLink
                to="breadblok"
                header="BREADBLOK"
                subheader="Branding, UI/UX"
                src={Breadblok_0}
            />
            <HomeLink
                to="athlete"
                header="ATHLETE MIXTAPE"
                subheader="UI/UX"
                src={Athlete_0}
            />
            <HomeLink
                to="craft"
                header="CONTEMPORARY CRAFT CENTER"
                subheader="Branding, Print, Experiential"
                src={Craft_0}
            />
            <HomeLink
                to="transcendent"
                header="TRANSCENDENT MATERIAL"
                subheader="UI/UX"
                src={Transcendent_0}
            />
            <HomeLink
                to="teamwork"
                header="TEAMWORK"
                subheader="Branding, UI/UX"
                src={Teamwork_0}
            />
        </div>
    );
};

export default Home;