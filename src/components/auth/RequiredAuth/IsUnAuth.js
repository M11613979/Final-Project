import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const IsUnAuth = (props) => {
  const location = useLocation();
  const auth = useContext(AuthContext).auth;
  return auth.user ? <Navigate to={location.state} /> : props.children;
};

export default IsUnAuth;
