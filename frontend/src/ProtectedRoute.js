import React , { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('auth') === 'true'
  );

  useEffect(() => {
    setAuthenticated(localStorage.getItem('auth') === 'true');
  }, [localStorage.getItem('auth')]);

  return authenticated ? children : <Navigate to="/loging" />;
};

export default ProtectedRoute