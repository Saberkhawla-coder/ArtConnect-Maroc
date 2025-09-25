import React from 'react';
import SideBar from './SideBar.jsx';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
  return (
    <div className="admin-layout flex">
      <SideBar />
      <div className="admin-content flex-1 p-4">
        <Outlet /> {/* This is where Oeuvres, Categories, etc. will render */}
      </div>
    </div>
  );
}

export default AdminLayout;
