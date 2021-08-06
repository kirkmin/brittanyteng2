import React from 'react';

import styles from './Hero.module.css';

const Hero = (props) => (
    <div className={styles.hero}>
      <img className={styles.img} src={props.src} alt="" />
    </div>
);

export default Hero;