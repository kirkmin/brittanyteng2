import React, { useEffect } from 'react';

import Hero from '../../components/UI/Hero/Hero';
import TextBlock from '../../components/UI/TextBlock/TextBlock';
import ImgWrapper from '../../components/UI/ImgWrapper/ImgWrapper';

import styles from './Pages.module.css';
import Breadblok_0 from "../../assets/images/Breadblok/Breadblok_0.png";
import Breadblok_1 from "../../assets/images/Breadblok/Breadblok_1.png";
import Breadblok_2 from "../../assets/images/Breadblok/Breadblok_2.png";
import Breadblok_3 from "../../assets/images/Breadblok/Breadblok_3.png";
import Breadblok_4 from "../../assets/images/Breadblok/Breadblok_4.png";
import Breadblok_5 from "../../assets/images/Breadblok/Breadblok_5.png";
import Breadblok_6 from "../../assets/images/Breadblok/Breadblok_6.png";
import Breadblok_7 from "../../assets/images/Breadblok/Breadblok_7.png";

const Breadblok = props => {
    const setBackground = props.setMainBackground;

    useEffect(() => {
        setBackground('white');
        window.scrollTo(0, 0);
    }, [setBackground]);

    return (
        <div className={styles['page']}>
            <Hero src={Breadblok_0} />
            <TextBlock
                headerText="BREADBLOK"
                subheaderText="Branding, UI/UX"
                paragraphText={
                    <>
                        Breadblok is an organic, gluten-free bakery in Santa Monica, CA. They produce a wide offering of baked goods and entrees for those who are gluten-free — as well as those with other food sensitivities.
                        <br /><br />
                        Currently, their visual identity does not do its products justice, so I challenged myself to create a brand and digital experience that reflects the thoughtfulness and comfort they bring to their customers.
                    </>
                }
            />
            <ImgWrapper src={Breadblok_1} page />
            <ImgWrapper src={Breadblok_2} page />
            <ImgWrapper src={Breadblok_3} page />
            <ImgWrapper src={Breadblok_4} page />
            <ImgWrapper src={Breadblok_5} page />
            <ImgWrapper src={Breadblok_6} page />
            <ImgWrapper src={Breadblok_7} page />
        </div>
    );
};

export default Breadblok;