/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./GroupContainer.module.css";
import add from "../../assets/images/add.png";
import Groups from "../groups/Groups";
import AddGroup from "../add-group/AddGroup";
const GroupContainer = ({ group }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={`${styles.groups} ${!group ? "" : styles.hidden}`}>
      <h2 className={styles.head}>Pocket Notes</h2>
      <Groups />
      <div
        className={styles.addContainer}
        onClick={() => setShowModal((prev) => !prev)}
      >
        <img src={add} alt="Add button" className={styles.imgAdd} />
        <p className={styles.plus}>+</p>
      </div>
      {showModal && <AddGroup setShowModal={setShowModal} />}
    </div>
  );
};

export default GroupContainer;
