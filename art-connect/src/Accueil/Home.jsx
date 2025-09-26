import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Catégorie from "./Catégorie";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [oeuvres, setOeuvres] = useState([]);
  const [filteredOeuvres, setFilteredOeuvres] = useState([]);
  const navigate = useNavigate();

  // Charger les catégories depuis l'API
  async function getCategories() {
    try {
      const res = await axios.get("http://localhost:3000/categories");
      setCategories(res.data);
    } catch (e) {
      console.log("Erreur lors du chargement des catégories :", e);
    }
  }

  // Charger les oeuvres
  async function getOeuvres() {
    try {
      const res = await axios.get("http://localhost:3000/oeuvres");
      setOeuvres(res.data);
      setFilteredOeuvres(res.data.slice(0, 6)); // max 6 œuvres
    } catch (e) {
      console.log("Erreur lors du chargement des œuvres :", e);
    }
  }

  useEffect(() => {
    getCategories();
    getOeuvres();
  }, []);

  // Ajouter aux favoris
  const ajouterAuxFavoris = async (oeuvre) => {
    try {
      await axios.post("http://localhost:3000/favoris", {
        ...oeuvre,
        type: "oeuvre",
      });
      alert("✅ Ajouté aux favoris !");
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  // Filtrage dynamique
  useEffect(() => {
    if (searchTerm || selectedCategory) {
      const filtered = oeuvres.filter((oeuvre) => {
        const matchSearch = oeuvre.titre
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchCategory =
          selectedCategory === "" || oeuvre.categorieId === selectedCategory;
        return matchSearch && matchCategory;
      });
      setFilteredOeuvres(filtered.slice(0, 6));
    } else {
      setFilteredOeuvres(oeuvres.slice(0, 6));
    }
  }, [searchTerm, selectedCategory, oeuvres]);

  // Recherche Explorer
  const handleSearch = () => {
    if (searchTerm.trim() || selectedCategory) {
      const params = new URLSearchParams();
      if (searchTerm.trim()) params.append("q", searchTerm.trim());
      if (selectedCategory) params.append("category", selectedCategory);

      navigate(`/explorer?${params.toString()}`);
    } else {
      navigate("/explorer");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
  };

  return (
    <div>
      {/* Hero */}
      <div className="bg-gray-100 min-h-96 flex flex-col items-center justify-center text-center px-6 py-12 mb-8">
        <h1 className="text-5xl font-extrabold text-black mb-4">
          Découvrez le Patrimoine Marocain
        </h1>
        <p className="text-gray-500 max-w-xl mb-8 text-center">
          Explorez, partagez et célébrez la richesse culturelle du Maroc. Une
          plateforme immersive pour connecter les passionnés d'art, les artisans
          et les amateurs de culture.
        </p>

        {/* Barre de recherche */}
        <div className="flex flex-col sm:flex-row gap-4 bg-white shadow-lg p-4 rounded-xl w-full max-w-2xl mb-8">
          <input
            type="text"
            placeholder="Rechercher une œuvre, un artisan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
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
          <button
            onClick={handleSearch}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Rechercher
          </button>
          {(searchTerm || selectedCategory) && (
            <button
              onClick={clearFilters}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Effacer
            </button>
          )}
        </div>

        {/* Résultats de recherche */}
        {(searchTerm || selectedCategory) && (
          <div className="w-full max-w-6xl">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <p className="text-amber-800 font-semibold">
                {filteredOeuvres.length} résultat(s) trouvé(s)
                {searchTerm && ` pour "${searchTerm}"`}
              </p>
            </div>

            {filteredOeuvres.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {filteredOeuvres.map((oeuvre) => (
                  <div
                    key={oeuvre.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4"
                  >
                    <img
                      src={oeuvre.img}
                      alt={oeuvre.titre}
                      className="w-full h-32 object-cover rounded mb-3"
                    />
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {oeuvre.titre}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {oeuvre.desc}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 flex items-center">
                        <FaLocationDot className="text-amber-500 mr-1" />
                        {oeuvre.lieu?.ville}
                      </span>
                      <button
                        onClick={() => ajouterAuxFavoris(oeuvre)}
                        className="bg-gray-800 text-white px-3 py-1 rounded text-xs hover:bg-black transition"
                      >
                        <FaHeart className="inline mr-1" /> Favoris
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">
                  Aucun résultat trouvé sur la page d'accueil
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition"
                >
                  Voir les œuvres récentes
                </button>
              </div>
            )}
          </div>
        )}

        {/* Statistiques */}
        <div className="flex gap-10 pt-6">
          <div>
            <h2 className="font-extrabold text-2xl">200+</h2>
            <p className="text-gray-500">Traditions référencées</p>
          </div>
          <div>
            <h2 className="font-extrabold text-2xl">50+</h2>
            <p className="text-gray-500">Artisans partenaires</p>
          </div>
          <div>
            <h2 className="font-extrabold text-2xl">12+</h2>
            <p className="text-gray-500">Régions couvertes</p>
          </div>
        </div>
      </div>

      {/* Section Catégorie (seulement si pas de recherche) */}
      {!searchTerm && !selectedCategory && <Catégorie />}
    </div>
  );
}

export default Home;
