import React from "react";
import { Link } from 'react-router-dom';
import styles from "./Card.module.css";

const Card = ({ src, alt, to }) => {
  return (
    <Link to={to} className={styles["card"]}>
      <img src={src} alt={alt} />
    </Link>
  );
};

export default Card;