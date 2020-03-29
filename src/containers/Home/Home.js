import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';

const Home = props => {
  const setBackground = props.setMainBackground;

  useEffect(() => {
    setBackground('green');
  }, [setBackground]);

  return (
    <div>
      Hello
    </div>
  );
};

export default Home;