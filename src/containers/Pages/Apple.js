import React, { useEffect, useState } from 'react';

import Password from '../../components/Password/Password';
import Hero from '../../components/UI/Hero/Hero';
import TextBlock from '../../components/UI/TextBlock/TextBlock';
import ImgWrapper from '../../components/UI/ImgWrapper/ImgWrapper';

import styles from './Pages.module.css';
import Apple_0 from "../../assets/images/Apple/Apple_0.jpg";
import Apple_1 from "../../assets/images/Apple/Apple_1.jpg";
import Apple_2 from "../../assets/images/Apple/Apple_2.jpg";
import Apple_3 from "../../assets/images/Apple/Apple_3.jpg";
import Apple_4 from "../../assets/images/Apple/Apple_4.jpg";
import Apple_5 from "../../assets/images/Apple/Apple_5.jpg";
import Apple_6 from "../../assets/images/Apple/Apple_6.jpg";

const Apple = props => {
    const [passed, setPassed] = useState(false);
    const setBackground = props.setMainBackground;

    useEffect(() => {
        setBackground(passed ? 'white' : 'black');
        window.scrollTo(0, 0);
    }, [setBackground, passed]);

    if (!passed) return <Password onCorrect={() => { setPassed(true); }} />

    return (
        <div className={styles['page']}>
            <Hero src={Apple_0} />
            <TextBlock
                headerText="APPLE TV+ PRESS"
                subheaderText="UI/UX"
                paragraphText={
                    <>
                        In 2019, Apple TV+ made it’s debut as the home for the world’s most creative storytellers. The Apple TV+ press site was then founded as a destination for updates and press materials on Apple Originals. Here journalists can find the latest trailers, key art, images and information around Apple TV+ — all the essentials needed to develop stories around the service.
                        <br /><br />
                        In order for Apple TV+ to gain traction in the streaming industry, the press site needed to reflect current and future programming priorities to cater to the entertainment press. We reimagined the entire Apple TV+ press site to align with new business goals, provide journalists with a seamless experience, and complement the Apple TV+ brand.
                    </>
                }
            />
            <ImgWrapper src={Apple_1} page />
            <ImgWrapper src={Apple_2} page />
            <ImgWrapper src={Apple_3} page />
            <ImgWrapper src={Apple_4} page />
            <ImgWrapper src={Apple_5} page />
            <ImgWrapper src={Apple_6} page />
        </div>
    );
};

export default Apple;