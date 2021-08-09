import React, { useEffect } from 'react';

import ImgWrapper from '../../components/UI/ImgWrapper/ImgWrapper';

import styles from './Happy.module.css';
import Happy_0 from "../../assets/images/Happy/Happy_0.jpg";
import Happy_1 from "../../assets/images/Happy/Happy_1.jpg";
import Happy_2 from "../../assets/images/Happy/Happy_2.jpg";
import Happy_3 from "../../assets/images/Happy/Happy_3.jpg";
import Happy_4 from "../../assets/images/Happy/Happy_4.jpg";
import Happy_5 from "../../assets/images/Happy/Happy_5.jpg";

const Happy = props => {
    const setBackground = props.setMainBackground;

    useEffect(() => {
        setBackground('white');
        window.scrollTo(0, 0);
    }, [setBackground]);

    return (
        <div className={styles['happy']}>
            <h1 className={styles['happy__header']}>JUST</h1>
            <div className={styles['happy__image-container']}>
                <ImgWrapper src={Happy_0} page />
                <ImgWrapper src={Happy_1} page />
                <ImgWrapper src={Happy_2} page />
            </div>
            <h1 className={styles['happy__header']}>FUN</h1>
            <div className={styles['happy__image-container']}>
                <ImgWrapper src={Happy_3} page />
                <ImgWrapper src={Happy_4} page />
                <ImgWrapper src={Happy_5} page />
            </div>
            <h1 className={styles['happy__header']}>STUFF</h1>
        </div>
    );
};

export default Happy;