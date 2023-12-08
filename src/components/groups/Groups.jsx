import React from "react";
import styles from "./Groups.module.css";
import Group from "./Group";
import { useGroupProvider } from "../../contexts/GroupsProvider";
const Groups = () => {
  const { groups } = useGroupProvider();
  // let groups = [
  //   {
  //     name: "My group",
  //     color: "#ff79f2",
  //     notes: [
  //       {
  //         createdAt: new Date(),
  //         note: "lorem asfkjfasfklasdfajfkasdkfljlfaldjfjkdsfjaldjfdf",
  //       },
  //     ],
  //   },
  //   {
  //     name: "React",
  //     color: "#43E6FC",
  //     notes: [
  //       {
  //         createdAt: new Date(),
  //         note: "lorem asfkjfas fklasdfaj fkasd kflj lfal djfjk dsfj afsadf aftqr afaf adfaf agfnad fdgnkjafhgakjfg f adfngaf nafnkjadfnldjfdf",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Node js",
  //     color: "#6691FF",
  //     notes: [
  //       {
  //         createdAt: new Date(),
  //         note: "lorem asfk jfasasd fklasd fajfk asdkfl  jlfaldjf jkdsfja ldjfdf",
  //       },
  //     ],
  //   },
  // ];
  return (
    <div className={styles.groups}>
      {groups.map((el) => (
        <Group name={el.name} color={el.color} key={el.name} />
      ))}
    </div>
  );
};

export default Groups;
