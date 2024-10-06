import React, { useState, useEffect } from 'react';
import useBackground from '../../hooks/useBackground';
import CardRows from '../../components/UI/Card/CardRows/CardRows';
import CardCarousel from '../../components/UI/Card/CardCarousel/CardCarousel';
import styles from './Work.module.css';

import weightSrc from '../../assets/images/Work/WeightTracker.png';
import medSrc from '../../assets/images/Work/MedicationReminder.png';
import subSrc from '../../assets/images/Work/SubManagement.png';
import appleSrc from '../../assets/images/Work/AppleTV.png';
import nikeSrc from '../../assets/images/Work/Nike.png';
import dailySrc from '../../assets/images/Work/TheDaily.png';

const cardsData = [
  {
    src: weightSrc,
    alt: "Weight Tracker",
    to: "/",
  }, {
    src: medSrc,
    alt: "Medication Reminder",
    to: "/",
  }, {
    src: subSrc,
    alt: "Sub Management",
    to: "/",
  }, {
    src: appleSrc,
    alt: "Apple TV+ Press",
    to: "/",
  }, {
    src: nikeSrc,
    alt: "Nike Fleece",
    to: "/",
  }, {
    src: dailySrc,
    alt: "The Daily by NYT",
    to: "/",
  }
];

const breakpoint = 600;

const Work = ({ setMainBackground }) => {
  useBackground({ setMainBackground, color: 'yellow' });
  const [isCarousel, setIsCarousel] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCarousel(window.innerWidth >= breakpoint);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles["work"]}>
      {isCarousel ? <CardCarousel cardsData={cardsData} /> : <CardRows cardsData={cardsData} />}
    </div>
  )
}

export default Work;