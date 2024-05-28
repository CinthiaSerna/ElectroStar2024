import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  // Definir el usuario administrador
  const adminUser = {
    email: "admin@example.com",
    password: "admin123"
  };

  if (user) {
    return (user.email === adminUser.email && user.password === adminUser.password) 
      ? children 
      : <Navigate to="/shopping" />;
  } else {
    return <Navigate to="/signup" />;
  }
};

export default AdminRoute;
