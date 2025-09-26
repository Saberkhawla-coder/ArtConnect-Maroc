import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext.jsx";
import { FaLocationDot, FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Footer from "../Footer";

function Explorer() {
  const { oeuvres, categories } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Ajouter aux favoris
  const ajouterAuxFavoris = async (oeuvre) => {
    try {
      await fetch("http://localhost:3000/favoris", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...oeuvre, type: "oeuvre" }),
      });
      alert("✅ Ajouté aux favoris !");
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  // Vider les filtres
  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("");
  };

  // Filtrer les œuvres
  const filteredOeuvres = oeuvres.filter((oeuvre) => {
    const matchSearch = oeuvre.titre
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory =
      selectedCategory === "" ||
      oeuvre.categorieId === parseInt(selectedCategory);
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-gray-100 to-gray-300 h-48 shadow-md text-center px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Explorer le Patrimoine
        </h2>
        <p className="text-gray-700 max-w-2xl">
          Découvrez la richesse culturelle du Maroc à travers notre collection
          d'œuvres et traditions
        </p>
      </div>

      {/* Barre recherche + filtre */}
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

        {(search || selectedCategory) && (
          <button
            onClick={clearFilters}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition whitespace-nowrap"
          >
            Effacer
          </button>
        )}
      </div>

      {/* Résultats */}
      <div className="max-w-3xl mx-auto px-6 mt-6">
        {(search || selectedCategory) && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <p className="text-amber-800">
              {filteredOeuvres.length > 0 ? (
                <>
                  <span className="font-semibold">{filteredOeuvres.length}</span>{" "}
                  œuvre(s) trouvée(s)
                  {search && ` pour "${search}"`}
                  {selectedCategory &&
                    ` dans ${
                      categories.find(
                        (cat) => cat.id === parseInt(selectedCategory)
                      )?.titre
                    }`}
                </>
              ) : (
                <>
                  Aucune œuvre trouvée
                  {search && ` pour "${search}"`}
                  {selectedCategory &&
                    ` dans ${
                      categories.find(
                        (cat) => cat.id === parseInt(selectedCategory)
                      )?.titre
                    }`}
                </>
              )}
            </p>
          </div>
        )}
      </div>

      {/* Grille œuvres */}
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

                  <div className="flex justify-between items-center gap-2">
                    <Link
                      to={`/oeuvre/${oeuvre.id}`}
                      className="bg-amber-600 px-3 py-2 text-white rounded-lg cursor-pointer hover:bg-amber-700 transition text-sm flex-1 text-center"
                    >
                      En détails
                    </Link>

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
        ) : oeuvres.length > 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg mb-4">
              Aucune œuvre ne correspond à vos critères de recherche
            </p>
            <button
              onClick={clearFilters}
              className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition"
            >
              Voir toutes les œuvres
            </button>
          </div>
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">Chargement des œuvres...</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Explorer;
