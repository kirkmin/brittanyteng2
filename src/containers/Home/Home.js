import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';

const Home = props => {
  const setBackground = props.setMainBackground;

  useEffect(() => {
    setBackground('green');
  }, [setBackground]);

  return (
    <div className={styles['home__container']}>
      <Link to="daily">Daily</Link>
      <Link to="transcendent">Transcendent</Link>
      <Link to="craft">Craft</Link>
    </div>
  );
};

export default Home;