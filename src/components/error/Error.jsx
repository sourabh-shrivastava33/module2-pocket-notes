/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Error.module.css";
import notFound from "../../assets/images/not-found.svg";
const Error = () => {
  const { group } = useParams();
  return (
    <div className={styles.error}>
      <img src={notFound} alt="not found" className={styles.image} />
      <div className={styles.errorInfo}>
        <h1>
          <span>{group}</span> group Not found
        </h1>
        <Link to="/" className={styles.link}>
          Back home
        </Link>
      </div>
    </div>
  );
};

export default Error;
