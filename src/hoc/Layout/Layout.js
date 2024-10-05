import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router';
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
      <Header background={mainBackground} />
      <FixedHeader background={mainBackground} fixedSlide={slideFixedHeader} fixedShow={showFixedHeader} refCallback={fixedHeaderRef} />
      {props.children(setMainBackground)}
    </main>
  );
};

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function useFixedHeaderHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);

        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [ref]
  );

  return [ref, value];
}

export default withRouter(Layout)