import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Get token from local storage

  // If token is not found, redirect to login page
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If token is found, render the children components (i.e., the protected route)
  return children;
};

export default ProtectedRoute;
