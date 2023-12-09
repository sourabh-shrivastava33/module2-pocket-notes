import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./NotesHeader.module.css";
import { useGroupProvider } from "../../contexts/GroupsProvider";
import Initial from "../groups/Initial";
import backArrow from "../../assets/icons/backArrow.svg";
const NotesHeader = () => {
  const navigate = useNavigate();
  const { group } = useParams();
  const { groups } = useGroupProvider();
  const { name, color } = groups.find((el) => el.name === group);
  return (
    <header className={styles.header}>
      <img
        src={backArrow}
        alt="back arrow"
        className={styles.back}
        onClick={() => navigate("/")}
      />
      <Initial name={name} color={color} />
      <span className={styles.groupName}>{name}</span>
    </header>
  );
};

export default NotesHeader;
