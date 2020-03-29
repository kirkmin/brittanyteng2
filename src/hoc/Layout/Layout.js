import React, { useState } from 'react';
import { withRouter } from 'react-router';

import Header from '../../components/Header/Header';

import styles from './Layout.module.css';

const Layout = (props) => {
  const [mainBackground, setMainBackground] = useState('white');

  return (
    <main className={[styles.main, styles['main--' + mainBackground]].join(' ')}>
      <Header />
      {props.children(setMainBackground)}
    </main>
  );
};

export default withRouter(Layout)