import React from 'react';
import useBackground from '../../hooks/useBackground';
import styles from './Home.module.css';

const Home = ({ setMainBackground }) => {
    useBackground({ setBackground: setMainBackground, color: 'green' });

    return (
        <div className={styles["home"]}>
            <div className={[styles["home__section"], styles["section--right"]].join(" ")}>
                <p className={styles["home__paragraph"]}>Brittany Teng is a creative based in Los Angeles specializing in UI/UX, branding, campaigns, and dabbling in ceramics. She approaches design the same way she approaches dogs. Hands-on. Connect with her at hi@brittanyteng.com.</p>
            </div>
        </div>
    );
};

export default Home;