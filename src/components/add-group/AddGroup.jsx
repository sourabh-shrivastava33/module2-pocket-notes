/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./AddGroup.module.css";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useGroupProvider } from "../../contexts/GroupsProvider";
const AddGroup = ({ setShowModal }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const { ref, handleOutsideClick } = useOutsideClick(setShowModal);
  const { groups, setGroups } = useGroupProvider();

  function handleCreateNewGroup() {
    if (name.trim() === "" || !color) return;

    // finding wheather similar group already present
    if (
      groups.find(
        (el) =>
          el.name
            .split(" ")
            .map((el) => el.toLowerCase())
            .join(" ") ===
          name
            .split(" ")
            .map((el) => el.toLowerCase())
            .join(" ")
      )
    )
      return;
    setGroups((prevGroups) => {
      const newGroupsArr = [
        ...prevGroups,
        {
          name: name,
          color: color,
          notes: [],
        },
      ];
      localStorage.setItem("groups", JSON.stringify(newGroupsArr));
      return newGroupsArr;
    });

    setShowModal((prev) => !prev);
  }
  return (
    <div className={styles.overlay} onClick={handleOutsideClick}>
      <div className={styles.modal} ref={ref}>
        <p className={styles.head}>Create new group</p>
        <div className={styles.nameInputContainer}>
          <label htmlFor="name">Group name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter group name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.colorContainer}>
          <span>Choose color</span>
          <div
            className={styles.colors}
            onClick={(e) => e.target.id && setColor(e.target.id)}
          >
            <span
              id="#B38BFA"
              className={color === "#B38BFA" ? styles.active : ""}
            ></span>
            <span
              id="#FF79F2"
              className={color === "#FF79F2" ? styles.active : ""}
            ></span>
            <span
              id="#43E6FC"
              className={color === "#43E6FC" ? styles.active : ""}
            ></span>
            <span
              id="#F19576"
              className={color === "#F19576" ? styles.active : ""}
            ></span>
            <span
              id="#0047FF"
              className={color === "#0047FF" ? styles.active : ""}
            ></span>
            <span
              id="#6691FF"
              className={color === "#6691FF" ? styles.active : ""}
            ></span>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={handleCreateNewGroup}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default AddGroup;
