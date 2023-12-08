import React, { useState } from "react";
import styles from "./NotesTextArea.module.css";
import greySave from "../../assets/icons/greySave.svg";
import colorSave from "../../assets/icons/colorSave.svg";
import { useGroupProvider } from "../../contexts/GroupsProvider";
import { useParams } from "react-router-dom";
const NotesTextArea = () => {
  const [note, setNote] = useState("");
  const { setGroups } = useGroupProvider();
  const { group } = useParams();
  function handleAddNote() {
    if (note.trim() === "") return;
    setGroups((prev) => {
      const newGroupsArr = prev.map((el) => {
        if (el.name === group) {
          return {
            ...el,
            notes: [...el.notes, { note: note, createdAt: new Date() }],
          };
        } else return el;
      });

      localStorage.setItem("groups", JSON.stringify(newGroupsArr));
      return newGroupsArr;
    });
    setNote("");
  }
  return (
    <div className={styles.textareaContainer}>
      <div className={styles.textareaBox}>
        <textarea
          name="textArea"
          value={note}
          className={styles.textarea}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        ></textarea>
        <img
          src={
            note
              .trim()
              .split(" ")
              .filter((el) => el !== "").length > 0
              ? colorSave
              : greySave
          }
          alt="save note button"
          className={styles.saveButton}
          onClick={handleAddNote}
        />
      </div>
    </div>
  );
};

export default NotesTextArea;
