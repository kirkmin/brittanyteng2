import React from 'react';
import useBackground from '../../hooks/useBackground';
import me from "../../assets/images/Home/Me.png";
import styles from './Home.module.css';

const Home = ({ setMainBackground }) => {
	useBackground({ setMainBackground, color: 'yellow' });

	return (
		<div className={styles["home"]}>
      <div className={styles["home__image-wrapper"]}>
        <img src={me} alt="me" />
      </div>
      <div className={styles["home__text-container"]}>
        <p>
          Brittany Teng is a Senior Product Designer based in Los Angeles. 
          <span> She approaches design the same way she approaches dogs.</span>
          <span style={{ display: 'block' }}>Hands-on.</span></p>
        <p>Email her at <a href= "mailto: hi@brittanyteng.com">hi@brittanyteng.com</a></p>
      </div>
		</div>
	);
};

export default Home;