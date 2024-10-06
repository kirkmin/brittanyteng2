import React from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Card from '../Card';
import styles from './CardCarousel.module.css';

const CardCarousel = ({ cardsData }) => {
  const [carouselRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <div className={styles["carousel"]} ref={carouselRef}>
      <div className={styles["carousel__container"]}>
        {cardsData.map(card => (
          <div key={card.alt} className={styles["carousel__slide"]}>
            <Card src={card.src} alt={card.alt} to={card.to} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;