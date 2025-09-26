import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import axios from "axios";
import { FaHeart } from "react-icons/fa6";

function Artisans() {
  const [artisans, setArtisans] = useState([]);

  async function getArtisans() {
    try {
      const res = await axios.get("http://localhost:3000/artisans");
      setArtisans(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getArtisans();
  }, []);

  const ajouterArtisanFavori = async (artisan) => {
    try {
      await axios.post('http://localhost:3000/favoris', {
        ...artisan,
        type: 'artisan'
      });
      alert('✅ Artisan ajouté aux favoris !');
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-12 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Artisans Marocains
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Découvrez le savoir-faire de nos artisans, véritables ambassadeurs
            des traditions marocaines.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {artisans.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <div className="flex justify-center mt-6">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-amber-400 shadow-sm">
                  <img
                    src={art.image}
                    alt={art.nom}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center px-4 py-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  {art.nom}
                </h2>
                <p className="text-amber-600 font-medium">{art.metier}</p>
                <p className="text-sm text-gray-500">{art.ville}</p>
                
                {/* BOUTON AJOUTER AUX FAVORIS - AJOUTÉ ICI */}
                <button 
                  onClick={() => ajouterArtisanFavori(art)}
                  className="mt-4 bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition flex items-center justify-center gap-2 w-full text-sm"
                >
                  <FaHeart /> Ajouter aux favoris
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Artisans;