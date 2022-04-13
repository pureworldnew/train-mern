import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/auth";
import PropTypes from "prop-types";

function PrivateRoute({ children }) {
  const authTokens = useAuth();
  return authTokens ? children : <Navigate to="/login" />;
}

PrivateRoute.propTypes = { children: PropTypes.any };

export default PrivateRoute;
