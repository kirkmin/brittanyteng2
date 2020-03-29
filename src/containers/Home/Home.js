import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';

const Home = props => {
  useEffect(() => {
    props.setMainBackground('green');
  }, []);

  return (
    <div>
      Hello
    </div>
  );
};

export default Home;