import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import Footer from "../Footer";


function Apropos() {
  return (
    <div className="min-h-screen bg-white pt-12"> {/* Réduit l'espace top */}
      {/* Container principal */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Section Mission */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">
            Préserver et Valoriser le Patrimoine Marocain
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            ArtConnect Maroc est né de la volonté de créer un pont numérique entre les traditions 
            ancestrales et les nouvelles générations, en offrant une plateforme moderne pour 
            découvrir, partager et célébrer la richesse culturelle du Royaume du Maroc.
          </p>
        </div>

        {/* Section Vision + Stats */}
        <div className="bg-gray-50 p-10 rounded-xl mb-16 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Vision */}
            <div>
              <h3 className="text-xl font-bold text-black mb-4">Notre Vision</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nous imaginons un monde où le patrimoine culturel marocain est accessible à tous, 
                où chaque tradition, chaque savoir-faire et chaque œuvre d'art trouve sa place 
                dans l'écosystème numérique moderne.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Notre plateforme permet aux artisans de partager leur expertise, aux passionnés 
                de découvrir de nouveaux horizons culturels, et aux nouvelles générations de 
                se reconnecter avec leurs racines.
              </p>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="text-2xl font-bold text-black">200+</div>
                <p className="text-gray-600 text-sm">Traditions référencées</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="text-2xl font-bold text-black">50+</div>
                <p className="text-gray-600 text-sm">Artisans partenaires</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="text-2xl font-bold text-black">12</div>
                <p className="text-gray-600 text-sm">Régions couvertes</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="text-2xl font-bold text-black">5</div>
                <p className="text-gray-600 text-sm">Catégories principales</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Valeurs */}
        <div className="bg-gray-100 py-12 px-6 rounded-xl mb-16">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">Nos Valeurs</h2>
          <p className="text-gray-600 text-center mb-12">
            Les principes qui guident notre action quotidienne pour la valorisation 
            du patrimoine culturel marocain
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-2">Passion Culturelle</h3>
              <p className="text-gray-600 text-sm">
                Nous sommes animés par l'amour du patrimoine marocain et sa préservation 
                pour les générations futures.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-2">Communauté</h3>
              <p className="text-gray-600 text-sm">
                Nous créons des liens entre artisans, passionnés et amateurs de culture 
                pour enrichir notre patrimoine commun.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-2">Rayonnement</h3>
              <p className="text-gray-600 text-sm">
                Nous œuvrons pour faire connaître la richesse culturelle du Maroc 
                au niveau national et international.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                Nous nous engageons à maintenir la haute qualité dans la préservation 
                et la présentation de notre patrimoine.
              </p>
            </div>
          </div>
        </div>

        {/* Section Rejoignez Notre Mission */}
        <div className="bg-gradient-to-r from-black via-gray-800 to-gray-600 text-white py-16 px-6 rounded-xl mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Rejoignez Notre Mission</h2>
          <p className="max-w-2xl mx-auto mb-6 text-gray-200">
            Vous êtes artisan, passionné de culture, chercheur ou simplement amoureux du patrimoine
            marocain ? Rejoignez-nous dans cette belle aventure !
          </p>
          <div className="flex justify-center gap-8 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-lg" />
              <span>Maroc, toutes régions</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-lg" />
              <span>Depuis 2024</span>
            </div>
          </div>
        </div>

      </div>

   <Footer />
    </div>
  );
}

export default Apropos;
