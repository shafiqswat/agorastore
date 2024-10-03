/** @format */

import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  // Show loading indicator while checking authentication state
  if (loading) {
    return <div></div>;
  }

  // If not authenticated, redirect to home page or login page
  if (!isAuthenticated) {
    return <Navigate to='/' />;
  }

  // If authenticated, render the children (protected content)
  return children;
};

export default ProtectedRoute;
