import React , { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('auth') === 'true'&& localStorage.getItem('user_roll') === 'Admin'
    
  );

  useEffect(() => {
    setAuthenticated(localStorage.getItem('auth') === 'true' && localStorage.getItem('user_roll') === 'Admin');
  }, [localStorage.getItem('auth')]);

  return authenticated ? children : <Navigate to="/dashboard" />;
};

export default AdminRoute