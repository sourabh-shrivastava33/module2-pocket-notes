/* eslint-disable react/prop-types */
import React from "react";
import Initial from "./Initial";
import styles from "./Group.module.css";
import { NavLink } from "react-router-dom";
const Group = ({ color, name }) => {
  return (
    <NavLink
      to={`/${name}`}
      className={(state) => (state.isActive ? styles.active : styles.link)}
    >
      <p className={styles.group}>
        <Initial name={name} color={color} />
        <span className={styles.groupName}>{name}</span>
      </p>
    </NavLink>
  );
};

export default Group;
