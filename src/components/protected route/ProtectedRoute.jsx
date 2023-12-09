/* eslint-disable react/prop-types */
import React from "react";
import { Navigate, useParams } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { group } = useParams();
  const presentGroup =
    localStorage.getItem("groups") &&
    JSON.parse(localStorage.getItem("groups")).find((el) => el.name === group);

  return presentGroup ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
