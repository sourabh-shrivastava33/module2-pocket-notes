import React from "react";
import GroupContainer from "../../components/group-container/GroupContainer";
import NotesContainer from "../../components/notes-container/NotesContainer";
import styles from "./HomePage.module.css";
import { useParams } from "react-router-dom";

const HomePage = () => {
  const { group } = useParams();

  return (
    <div className={styles.homepage}>
      <GroupContainer group={group} />
      <NotesContainer group={group} />
    </div>
  );
};

export default HomePage;
