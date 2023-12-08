/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const GroupsContext = createContext();

export function GroupsProvider({ children }) {
  const [groups, setGroups] = useState(() => {
    const storedValue = localStorage.getItem("groups");
    console.log(JSON.parse(storedValue));
    if (storedValue) return JSON.parse(storedValue);
    return [];
  });
  return (
    <GroupsContext.Provider value={{ setGroups, groups }}>
      {children}
    </GroupsContext.Provider>
  );
}

export function useGroupProvider() {
  const groups = useContext(GroupsContext);
  if (!groups) {
    throw new Error("useGroupProvider is used outside context");
  }
  return groups;
}
