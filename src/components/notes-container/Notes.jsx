import React from "react";
import NotesHeader from "./NotesHeader";
import NotesTextArea from "./NotesTextArea";
import styles from "./Notes.module.css";
import { useGroupProvider } from "../../contexts/GroupsProvider";
import { useParams } from "react-router-dom";
import NoteBox from "./NoteBox";
const Notes = () => {
  const { groups } = useGroupProvider();
  const { group } = useParams();
  const { notes } = groups.filter((el) => el.name === group)[0];

  return (
    <div className={styles.notes}>
      <NotesHeader />
      <main className={styles.notesContainer}>
        {notes.map((el) => (
          <NoteBox key={el.createdAt} createdAt={el.createdAt} note={el.note} />
        ))}
      </main>
      <NotesTextArea />
    </div>
  );
};

export default Notes;
