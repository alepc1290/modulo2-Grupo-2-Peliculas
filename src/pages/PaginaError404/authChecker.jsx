import React from 'react';
import { Navigate } from "react-router-dom";
import { getLSItems } from "../../utils/function";

const AuthChecker = ({ children }) => {
  const userLogueado = getLSItems("user_session"); 

  if (!userLogueado || userLogueado.rol !== "admin") {
    return <Navigate to="/home" />;
  }

  return children;
};

export default AuthChecker;