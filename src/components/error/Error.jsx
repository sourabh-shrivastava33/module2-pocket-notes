/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error.module.css";
import notFound from "../../assets/images/not-found.svg";
const Error = () => {
  return (
    <div className={styles.error}>
      <img src={notFound} alt="not found" className={styles.image} />
      <div className={styles.errorInfo}>
        <h3>Ooh! group not found</h3>
        <Link to="/" className={styles.link}>
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
