import React from 'react';

import styles from './TextBlock.module.css';

const TextBlock = (props) => (
    <div className={styles["text-block"]}>
        <h1 className={styles.header}>{props.headerText}</h1>
        <h2 className={styles.subheader}>{props.subheaderText}</h2>
        <p className={styles.paragraph}>{props.paragraphText}</p>
    </div>
);

export default TextBlock;