import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaLocationDot, FaHeart } from "react-icons/fa6";
import Footer from "../Footer";

function Favoris() {
  const [favoris, setFavoris] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getFavoris() {
    try {
      const res = await axios.get("http://localhost:3000/favoris");
      setFavoris(res.data);
    } catch (e) {
      console.log("Erreur lors de la récupération des favoris :", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getFavoris();
  }, []);

  const supprimerFavori = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/favoris/${id}`);
      setFavoris(favoris.filter(item => item.id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  };

  // Statistiques simples
  const stats = {
    totalOeuvres: favoris.length,
    totalCategories: new Set(favoris.map(f => f.categorieId)).size,
    totalRegions: new Set(favoris.map(f => f.lieu?.region || f.ville)).size
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white shadow-md flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement de vos favoris...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* En-tête aligné à gauche */}
        <div className="text-left mb-12">
          <h2 className="text-3xl font-semibold text-black mb-3">
            Mes Œuvres Favorites
          </h2>
          <p className="text-gray-600 max-w-3xl">
            Retrouvez ici toutes les œuvres et traditions que vous avez ajoutées à vos favoris
          </p>
        </div>

        {/* Statistiques en noir et blanc */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-black mb-2">{stats.totalOeuvres}</div>
            <div className="text-gray-700">Œuvres favorites</div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-black mb-2">{stats.totalCategories}</div>
            <div className="text-gray-700">Catégories différentes</div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-black mb-2">{stats.totalRegions}</div>
            <div className="text-gray-700">Régions représentées</div>
          </div>
        </div>

        {/* Contenu principal - CHANGEMENT ICI : grid au lieu de liste */}
        {favoris.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-lg p-8 text-center py-16">
            <FaHeart className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-black mb-2">Aucun favori</h3>
            <p className="text-gray-500 mb-6">
              Vous n'avez pas encore ajouté d'œuvres à vos favoris.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoris.map((favori) => (
              <div key={favori.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                
      
                <div className="h-64 overflow-hidden">
                  <img 
                    src={favori.image || favori.img} 
                    alt={favori.titre || favori.nom}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-black flex-1">
                      {favori.titre || favori.nom}
                    </h3>
                    <button 
                      onClick={() => supprimerFavori(favori.id)}
                      className="text-black hover:text-gray-700 transition ml-2"
                      title="Supprimer des favoris"
                    >
                      <FaTrash />
                    </button>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {favori.description || favori.desc || favori.metier}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    {(favori.ville || favori.lieu) && (
                      <div className="flex items-center gap-2">
                        <FaLocationDot className="text-black" />
                        <span>
                          {favori.lieu ? `${favori.lieu.ville}, ${favori.lieu.region}` : favori.ville}
                        </span>
                      </div>
                    )}
                    
                    {favori.auteur && (
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Par {favori.auteur}</span>
                      </div>
                    )}
                    
                    {favori.date && (
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{favori.date}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Favoris;