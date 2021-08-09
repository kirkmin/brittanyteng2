import React, { useEffect } from 'react';

import Hero from '../../components/UI/Hero/Hero';
import TextBlock from '../../components/UI/TextBlock/TextBlock';
import ImgWrapper from '../../components/UI/ImgWrapper/ImgWrapper';

import styles from './Pages.module.css';
import Transcendent_0 from "../../assets/images/Transcendent/Transcendent_0.jpg";
import Transcendent_1 from "../../assets/images/Transcendent/Transcendent_1.mp4";
import Transcendent_2 from "../../assets/images/Transcendent/Transcendent_2.jpg";
import Transcendent_3 from "../../assets/images/Transcendent/Transcendent_3.jpg";
import Transcendent_4 from "../../assets/images/Transcendent/Transcendent_4.jpg";
import Transcendent_5 from "../../assets/images/Transcendent/Transcendent_5.jpg";

const Transcendent = props => {
    const setBackground = props.setMainBackground;

    useEffect(() => {
        setBackground('white');
        window.scrollTo(0, 0);
    }, [setBackground]);

    return (
        <div className={styles['page']}>
            <Hero src={Transcendent_0} />
            <TextBlock
                headerText="TRANSCENDENT MATERIAL"
                subheaderText="Branding, Print, Experiential"
                paragraphText={
                    <>
                        Transcendent Material is an exhibition on artist Tara Donovan's site-specific installations. Donovan's large, organic sculptures made from mundane materials are immense representations of naturally occurring organisms. Her strategy of obsessive repetition gives shape to these materials in a different context, depending on your vantage point.
                        <br /><br />
                        I utilized typography as a means to abstract the dimensional sculptures and highlight the skeletal qualities of her work. This interactive title wall gives the viewer a sense of what it would be like to completely immerse oneself in her Polyester Film sculpture. By employing a combination of projection mapping, motion sensors, and processing, I created an experience that invites the visitor to have a dialogue with the fabric and the type that floods the installation.
                        </>
                }
            />
            <ImgWrapper src={Transcendent_1} mp4 page />
            <ImgWrapper src={Transcendent_2} page />
            <ImgWrapper src={Transcendent_3} page />
            <ImgWrapper src={Transcendent_4} page />
            <ImgWrapper src={Transcendent_5} page />
        </div>
    );
};

export default Transcendent;