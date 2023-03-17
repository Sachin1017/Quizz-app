import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function DashboardLayout() {
  <Navigate to="/" replace />;
  return (
    <Outlet />
  );
}

export default DashboardLayout;
