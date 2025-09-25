import React from "react";
import { Link, useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="sidebar flex flex-col justify-between h-screen w-64 bg-white shadow-lg p-6">
      <div>
        <h1 className="text-2xl font- text-amber-600 mb-8">ArtConnect</h1>

        <nav className="flex flex-col gap-4">
          <Link
            to="/admin/tableaubord"
            className="text-gray-400 hover:text-amber-600 font-medium transition"
          >
            Tableau de Bord
          </Link>
          <Link
            to="/admin/oeuvres"
            className="text-gray-400 hover:text-amber-600 font-medium transition"
          >
            Œuvres
          </Link>
          <Link
            to="/admin/categories"
            className="text-gray-400 hover:text-amber-600 font-medium transition"
          >
            Catégories
          </Link>
          <Link
            to="/admin/artisans"
            className="text-gray-400 hover:text-amber-600 font-medium transition"
          >
            Artisans
          </Link>
          <Link
            to="/admin/evenements"
            className="text-gray-400 hover:text-amber-600 font-medium transition"
          >
            Événements
          </Link>
        </nav>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 text-gray-600 hover:text-red-500 font-medium transition"
      >
        
        Logout
      </button>
    </div>
  );
}

export default SideBar;
