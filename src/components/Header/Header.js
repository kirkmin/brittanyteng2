import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <Link to="/">
        B TENG
      </Link>
      <Link to="info">
        info
      </Link>
      <div>:)</div>
    </header>
  );
};

export default Header;