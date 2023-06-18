import React, { useContext } from "react";
import { Contextapi } from "../ContextApi.jsx";
import { Navigate } from "react-router-dom";
const PrivateRouter = ({ children }) => {
  let { Auth } = useContext(Contextapi);

  if (!Auth.login) {
    return <Navigate to={"/authentication"} />;
  }
  return children;
};

export default PrivateRouter;
