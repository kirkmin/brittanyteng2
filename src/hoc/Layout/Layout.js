import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import useFixedHeaderHover from '../../hooks/useFixedHeaderHover';
import { usePrefetch, usePrevious } from '../../hooks/utils';
import Header from '../../components/Header/Header';
import FixedHeader from '../../components/Header/FixedHeader';
import styles from './Layout.module.css';

const Layout = (props) => {
  const [mainBackground, setMainBackground] = useState('yellow');
  const [slideFixedHeader, setSlideFixedHeader] = useState(false);
  const [showFixedHeader, setShowFixedHeader] = useState(false);
  const [currentScrollY, setCurrentScrollY] = useState(0);

  const prevCurrentScrollY = usePrevious(currentScrollY);
  const [fixedHeaderRef, isFixedHeaderHovered] = useFixedHeaderHover();
  usePrefetch([
    '../../images/Home/Me.png',
    '../../images/NotWork/DogMobile.png',
    '../../images/NotWork/DogTablet.png',
    '../../images/NotWork/DogDesktop.png',
  ]);

  const scrollListener = e => {
    setCurrentScrollY(window.scrollY);
  };

  useEffect(() => {
    if (showFixedHeader) {
      if (prevCurrentScrollY > currentScrollY) {
        setSlideFixedHeader(true);
      }
    }
  }, [showFixedHeader, prevCurrentScrollY, currentScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  useEffect(() => {
    if (slideFixedHeader && !isFixedHeaderHovered) {
      const timer = setTimeout(() => {setSlideFixedHeader(false)}, 3000);
      return () => clearTimeout(timer);
    }
  }, [slideFixedHeader, isFixedHeaderHovered]);

  useEffect(() => {
    if (window.scrollY < 200) {
      setShowFixedHeader(false);
    } else {
      setShowFixedHeader(true);
    }
  }, [prevCurrentScrollY, currentScrollY]);

  return (
    <main className={[styles.main, styles['main--' + mainBackground]].join(' ')}>
      <div className={styles.content}>
        <Header background={mainBackground} />
        <FixedHeader background={mainBackground} fixedSlide={slideFixedHeader} fixedShow={showFixedHeader} refCallback={fixedHeaderRef} />
        {props.children(setMainBackground)}
      </div>
    </main>
  );
};

export default withRouter(Layout)