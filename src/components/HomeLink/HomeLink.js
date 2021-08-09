import React from 'react';
import { Link } from 'react-router-dom';

import ImgWrapper from '../UI/ImgWrapper/ImgWrapper';

import styles from './HomeLink.module.css';

const HomeLink = ({ to, header, subheader, src }) => (
    <Link to={to} className={styles["home-link"]}>
        <span className={styles.line}></span>
        <h3 className={styles.header}>{header}</h3>
        <h4 className={styles.subheader}>{subheader}</h4>
        <ImgWrapper src={src} mobile home />
    </Link>
);

export default HomeLink;