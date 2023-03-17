import React, { useContext } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

function AuthLayout() {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/" replace />;
  }
  return (
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        
      </div>
  );
}

export default AuthLayout;
