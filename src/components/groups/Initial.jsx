/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Initial.module.css";
const Initial = ({ name, color }) => {
  let initial = name
    .trim()
    ?.split(" ")
    .filter((el) => el !== "")
    .map((el) => el[0].toUpperCase());
  if (initial?.length >= 2) {
    initial = initial.slice(0, 2).join("");
  } else {
    initial = initial?.join("");
  }
  return (
    <span style={{ backgroundColor: `${color}` }} className={styles.initial}>
      {initial}
    </span>
  );
};

export default Initial;
