import React, { useEffect } from 'react';

import Hero from '../../components/UI/Hero/Hero';
import TextBlock from '../../components/UI/TextBlock/TextBlock';
import ImgWrapper from '../../components/UI/ImgWrapper/ImgWrapper';

import styles from './Pages.module.css';
import Daily_0 from "../../assets/images/Daily/Daily_0.jpg";
import Daily_1 from "../../assets/images/Daily/Daily_1.gif";
import Daily_2 from "../../assets/images/Daily/Daily_2.jpg";
import Daily_3 from "../../assets/images/Daily/Daily_3.jpg";
import Daily_4 from "../../assets/images/Daily/Daily_4.jpg";
import Daily_5 from "../../assets/images/Daily/Daily_5.jpg";
import Daily_6 from "../../assets/images/Daily/Daily_6.jpg";
import Daily_7 from "../../assets/images/Daily/Daily_7.jpg";

const Daily = props => {
    const setBackground = props.setMainBackground;

    useEffect(() => {
        setBackground('white');
        window.scrollTo(0, 0);
    }, [setBackground]);

    return (
        <div className={styles['page']}>
            <Hero src={Daily_0} />
            <TextBlock
                headerText="THE DAILY BY THE NEW YORK TIMES"
                subheaderText="Print, OOH Campaign"
                paragraphText={
                    <>
                        The Daily is a podcast hosted by Michael Barbaro, a reporter for The New York Times. With five million monthly unique listeners, it became the most downloaded new show in 2017 on Apple Podcasts, and now airs on more than 30 radio stations across the country.
                        <br /><br />
                        Our challenge was to communicate all of this in a succinct, memorable and non-partisan way.  We developed a verbal and visual language, which threads the immediacy of the medium with the mission of the Times. Our final work ran as a national campaign, with executions that spanned out-of-home, television, radio, print and digital – all anchored by a single line: “This moment deserves to be understood.”
                        <br /><br />
                        Creative Director: Ryan Moore, Art Director: Caleb Halter
                    </>
                }
            />
            <ImgWrapper src={Daily_1} page />
            <ImgWrapper src={Daily_2} page />
            <ImgWrapper src={Daily_3} page />
            <ImgWrapper src={Daily_4} page />
            <ImgWrapper src={Daily_5} page />
            <ImgWrapper src={Daily_6} page />
            <ImgWrapper src={Daily_7} page />
        </div>
    );
};

export default Daily;