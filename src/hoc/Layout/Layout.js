import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router';

import Header from '../../components/Header/Header';
import FixedHeader from '../../components/Header/FixedHeader';

import styles from './Layout.module.css';

const Layout = (props) => {
  const [mainBackground, setMainBackground] = useState('white');
  const [showFixedHeader, setShowFixedHeader] = useState(false);
  const [currentPageYOffset, setCurrentPageYOffset] = useState(0);
  const [fixedHeaderTimeout, setFixedHeaderTimeout] = useState(null);

  const prevCurrentPageYOffset = usePrevious(currentPageYOffset);
  const [fixedHeaderRef, isFixedHeaderHovered] = useHover();

  const scrollListener = e => {
    setCurrentPageYOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  useEffect(() => {
    if (window.pageYOffset < 200) {
      setShowFixedHeader(false);
      clearTimeout(fixedHeaderTimeout);
    } else if (prevCurrentPageYOffset > currentPageYOffset) {
      setShowFixedHeader(true);
      clearTimeout(fixedHeaderTimeout);
      setFixedHeaderTimeout(setTimeout(() => {setShowFixedHeader(false)}, 3000));
    }
  }, [currentPageYOffset]);

  useEffect(() => {
    if (isFixedHeaderHovered) {
      setShowFixedHeader(true);
      clearTimeout(fixedHeaderTimeout);
    } else {
      setFixedHeaderTimeout(setTimeout(() => {setShowFixedHeader(false)}, 3000));
    }
  }, [isFixedHeaderHovered]);

  return (
    <main className={[styles.main, styles['main--' + mainBackground]].join(' ')}>
      <Header background={mainBackground === "green" ? "white" : "green"} />
      <FixedHeader background={mainBackground === "green" ? "white" : "green"} fixedShow={showFixedHeader} refCallback={fixedHeaderRef} />
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

function useHover() {
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
    [ref.current]
  );

  return [ref, value];
}

export default withRouter(Layout)