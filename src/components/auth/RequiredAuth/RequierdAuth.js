import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const RequierdAuth = (props) => {
  const auth = useContext(AuthContext).auth;
  return <div>{auth.user ? props.children : <Navigate to={"/login"} />}</div>;
};

export default RequierdAuth;
