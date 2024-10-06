import React from "react";
import Card from "../Card";
import styles from "./CardRows.module.css";

const CardRows = ({ cardsData }) => (
  <div className={styles["card-rows"]}>
    {cardsData.map(card => (
      <Card key={card.alt} src={card.src} alt={card.alt} to={card.to} />
    ))}
  </div>
);

export default CardRows;