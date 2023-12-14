import React from "react";
import styles from "./Groups.module.css";
import Group from "./Group";
import { useGroupProvider } from "../../contexts/GroupsProvider";
const Groups = () => {
  const { groups } = useGroupProvider();

  return (
    <div className={styles.groups}>
      {groups.map((el) => (
        <Group name={el.name} color={el.color} key={el.name} />
      ))}
    </div>
  );
};

export default Groups;
