/* eslint-disable react/prop-types */
import React from "react";
import { formatDateAndTime } from "../../utils/helper";
import dot from "../../assets/icons/dot.svg";
import styles from "./NoteBox.module.css";
const NoteBox = ({ createdAt, note }) => {
  const date = formatDateAndTime(createdAt, "date");
  const time = formatDateAndTime(createdAt, "time");
  return (
    <div className={styles.notebox}>
      <p className={styles.note}>{note}</p>
      <p className={styles.dateTimeContainer}>
        <span>{date}</span>
        <img src={dot} alt="dot separation between date and time" />
        <span>{time}</span>
      </p>
    </div>
  );
};

export default NoteBox;
