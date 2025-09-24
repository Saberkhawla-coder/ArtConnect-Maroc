import React from "react";
import { Link } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function Footer() {
  return (
    <div className="bg-gray-200 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
  
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">ArtConnect</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            ArtConnect Maroc est une plateforme dédiée à la valorisation et à la
            préservation du riche patrimoine culturel marocain. Découvrez,
            partagez et célébrez l&apos;art et les traditions du Maroc.
          </p>
          <div className="flex gap-4 text-2xl text-gray-500">
            <Link to="/##" className="hover:text-amber-500 transition-colors">
              <IoLogoFacebook />
            </Link>
            <Link to="/##" className="hover:text-amber-500 transition-colors">
              <FaInstagram />
            </Link>
            <Link to="/##" className="hover:text-amber-500 transition-colors">
              <FaTwitter />
            </Link>
            <Link to="/##" className="hover:text-amber-500 transition-colors">
              <CgMail />
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Navigation</h2>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <Link to="/" className="hover:text-amber-500 transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/Explorer"
                className="hover:text-amber-500 transition-colors"
              >
                Explorer
              </Link>
            </li>
            <li>
              <Link
                to="/form"
                className="hover:text-amber-500 transition-colors"
              >
                Publier
              </Link>
            </li>
            <li>
              <Link
                to="/favoris"
                className="hover:text-amber-500 transition-colors"
              >
                Favoris
              </Link>
            </li>
            <li>
              <Link
                to="/a-propos"
                className="hover:text-amber-500 transition-colors"
              >
                À propos
              </Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-xl  font-semibold text-gray-800 mb-4">Catégories</h2>
          <ul className="flex flex-col  gap-2 text-gray-600">
            <li>
              <Link
                to="/Explorer"
                className="hover:text-amber-500 transition-colors"
              >
                Artisanat
              </Link>
            </li>
            <li>
              <Link
                to="/Explorer"
                className="hover:text-amber-500 transition-colors"
              >
                Gastronomie
              </Link>
            </li>
            <li>
              <Link
                to="/Explorer"
                className="hover:text-amber-500 transition-colors"
              >
                Habits
              </Link>
            </li>
            <li>
              <Link
                to="/Explorer"
                className="hover:text-amber-500 transition-colors"
              >
                Architecture
              </Link>
            </li>
            <li>
              <Link
                to="/Explorer"
                className="hover:text-amber-500 transition-colors"
              >
                Musique et danse
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Séparateur */}
      <div className="bg-black/20 h-0.5 mt-8 mb-4"></div>

      {/* Copyright */}
      <p className="text-center text-gray-400 text-sm">
        © 2024 ArtConnect Maroc. Tous droits réservés. Fait avec ❤️ pour la
        culture marocaine.
      </p>
    </div>
  );
}

export default Footer;
