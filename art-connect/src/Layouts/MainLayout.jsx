import React from 'react';
import Navbar from '../Accueil/Navbar.jsx';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Outlet /> 
      </div>
    </>
  );
}

export default MainLayout;
