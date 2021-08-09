import React from 'react';

import styles from './TextGrid.module.css';

const TextGrid = ({ children }) => <span className={styles["text-grid"]}>{children}</span>;

export default TextGrid