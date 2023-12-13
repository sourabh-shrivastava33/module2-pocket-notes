/* eslint-disable react/prop-types */
import React from "react";
import { useParams } from "react-router-dom";
import Error from "../error/Error";

const ProtectedRoute = ({ children }) => {
  const { group } = useParams();
  const presentGroup =
    localStorage.getItem("groups") &&
    JSON.parse(localStorage.getItem("groups")).find((el) => el.name === group);

  return presentGroup ? children : <Error />;
};

export default ProtectedRoute;
