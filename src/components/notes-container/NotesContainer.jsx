/* eslint-disable react/prop-types */
import React from "react";
import styles from "./NotesContainer.module.css";
import { Outlet } from "react-router-dom";

const NotesContainer = ({ group }) => {
  return (
    <div className={`${styles.notes} ${!group ? styles.hidden : ""}`}>
      <Outlet />
    </div>
  );
};

export default NotesContainer;
