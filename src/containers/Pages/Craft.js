import React, { useEffect } from 'react';

import Hero from '../../components/UI/Hero/Hero';
import TextBlock from '../../components/UI/TextBlock/TextBlock';
import ImgWrapper from '../../components/UI/ImgWrapper/ImgWrapper';

import styles from './Pages.module.css';
import Craft_0 from "../../assets/images/Craft/Craft_0.png";
import Craft_1 from "../../assets/images/Craft/Craft_1.jpg";
import Craft_2 from "../../assets/images/Craft/Craft_2.gif";
import Craft_3 from "../../assets/images/Craft/Craft_3.jpg";
import Craft_4 from "../../assets/images/Craft/Craft_4.jpg";
import Craft_5 from "../../assets/images/Craft/Craft_5.mov";
import Craft_6 from "../../assets/images/Craft/Craft_6.jpg";
import Craft_7 from "../../assets/images/Craft/Craft_7.jpg";
import Craft_8 from "../../assets/images/Craft/Craft_8.jpg";
import Craft_9 from "../../assets/images/Craft/Craft_9.jpg";
import Craft_10 from "../../assets/images/Craft/Craft_10.jpg";
import Craft_11 from "../../assets/images/Craft/Craft_11.jpg";
import Craft_12 from "../../assets/images/Craft/Craft_12.jpg";

const Craft = props => {
    const setBackground = props.setMainBackground;

    useEffect(() => {
        setBackground('white');
        window.scrollTo(0, 0);
    }, [setBackground]);

    return (
        <div className={styles['page']}>
            <Hero src={Craft_0} />
            <TextBlock
                headerText="CONTEMPORARY CRAFT CENTER"
                subheaderText="Branding, Print, Experiential"
                paragraphText={
                    <>
                        The Contemporary Craft Center is a place to both see and make art. The center emphasizes a hands-on approach to learning and creating. The simple building blocks that make up the mark are inspired by the nostalgic memories of childhood, representing the institution's playful nature and collaborative environment. 
                        <br /><br />
                        Materiality and color play a huge role in the center's identity ranging from pattern work to outdoor furniture. I developed the visual language to focus around the idea of learning from your process. There is no fail at the Contemporary Craft Center, because the intention is not to create something perfect, it's simply to create.
                    </>
                }
            />
            <ImgWrapper src={Craft_1} page />
            <ImgWrapper src={Craft_2} page />
            <ImgWrapper src={Craft_3} page />
            <ImgWrapper src={Craft_4} page />
            <ImgWrapper src={Craft_5} mov page />
            <ImgWrapper src={Craft_6} page />
            <ImgWrapper src={Craft_7} page />
            <ImgWrapper src={Craft_8} page />
            <ImgWrapper src={Craft_9} page />
            <ImgWrapper src={Craft_10} page />
            <ImgWrapper src={Craft_11} page />
            <ImgWrapper src={Craft_12} page />
        </div>
    );
};

export default Craft;