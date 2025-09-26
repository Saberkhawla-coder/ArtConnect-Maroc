import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaLocationDot, FaHeart } from "react-icons/fa6"; 
import { Link } from "react-router-dom";
import Footer from "../Footer";

function Explorer() {
  const [oeuvres, setOeuvres] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Charger les catégories
  async function getCategorie() {
    try {
      const res = await axios.get("http://localhost:3000/categories");
      setCategories(res.data);
    } catch (e) {
      console.log("Erreur lors de la récupération des catégories :", e);
    }
  }

  // Charger les oeuvres
  async function getOeuvres() {
    try {
      const res = await axios.get("http://localhost:3000/oeuvres"); 
      setOeuvres(res.data);
    } catch (e) {
      console.log("Erreur :", e);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getOeuvres();
    getCategorie();
  }, []);

  // Fonction pour ajouter aux favoris
  const ajouterAuxFavoris = async (oeuvre) => {
    try {
      await axios.post('http://localhost:3000/favoris', {
        ...oeuvre,
        type: 'oeuvre'
      });
      alert('✅ Ajouté aux favoris !');
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  // Filtrage des oeuvres
  const filteredOeuvres = oeuvres.filter((oeuvre) => {
    const matchSearch = oeuvre.titre.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      selectedCategory === "" || oeuvre.categorieId === parseInt(selectedCategory);
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-gray-100 to-gray-300 h-48 shadow-md text-center px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Explorer le Patrimoine
        </h2>
        <p className="text-gray-700 max-w-2xl">
          Découvrez la richesse culturelle du Maroc à travers notre collection d'œuvres et traditions
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 bg-white shadow-lg p-4 rounded-xl w-full max-w-3xl mx-auto -mt-8">
        <input
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="">Toutes les catégories</option>
          {categories.map((categorie) => (
            <option key={categorie.id} value={categorie.id}>
              {categorie.titre}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 my-12 px-6 lg:px-16">
        {filteredOeuvres.length > 0 ? (
          filteredOeuvres.map((oeuvre) => (
            <div
              key={oeuvre.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 flex flex-col"
            >
              <img
                src={oeuvre.img}
                alt={oeuvre.titre}
                className="w-full h-44 object-cover"
              />

              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2">
                    {oeuvre.titre}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {oeuvre.desc}
                  </p>
                </div>
                
                <div className="text-xs text-gray-500 border-t pt-2">
                  <div className="flex justify-between items-center mb-2">
                    <p className="flex gap-2 items-center">
                      <FaLocationDot className="text-amber-600" /> 
                      {oeuvre.lieu.ville}, {oeuvre.lieu.region}
                    </p>
                  </div>
                  
                  {/* NOUVEAU : Boutons en ligne */}
                  <div className="flex justify-between items-center gap-2">
                    <Link 
                      to={`/oeuvre/${oeuvre.id}`} 
                      className="bg-amber-600 px-3 py-2 text-white rounded-lg cursor-pointer hover:bg-amber-700 transition text-sm flex-1 text-center"
                    >
                      En détails
                    </Link>
                    
                    {/* BOUTON FAVORIS AJOUTÉ */}
                    <button 
                      onClick={() => ajouterAuxFavoris(oeuvre)}
                      className="bg-gray-800 px-3 py-2 text-white rounded-lg hover:bg-black transition flex items-center justify-center gap-1 text-sm flex-1"
                    >
                      <FaHeart className="text-sm" /> Favoris
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center text-lg">
            Aucune œuvre trouvée
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Explorer;