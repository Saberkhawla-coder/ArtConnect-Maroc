import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
function Evenements() {
  return (
    <div>
         <section className="px-8 py-12 bg-white">
      
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Événements à venir</h1>
        <p className="text-gray-600 mt-2">
          Découvrez les prochains rendez-vous culturels au Maroc
        </p>
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
    
        <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
          <img className="w-full h-48 object-cover" src="/Evénements/Marrakech.jpg" alt="Festival Film Marrakech" />
          <div className="p-4">
            <h3 className="text-lg font-bold">Festival International du Film</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Projection de films internationaux et marocains, masterclass et rencontres avec des réalisateurs.
            </p>
            <div className="flex justify-between items-center mt-4 text-sm font-medium text-gray-700">
              <span>Marrakech</span>
              <span>22 - 30 nov. 2025</span>
            </div>
          </div>
        </div>


        <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
          <img className="w-full h-48 object-cover" src="/Evénements/Mawazine.jpg" alt="Mawazine Rabat" />
          <div className="p-4">
            <h3 className="text-lg font-bold">Festival Mawazine</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Concerts de stars internationales et marocaines à Rabat.
            </p>
            <div className="flex justify-between items-center mt-4 text-sm font-medium text-gray-700">
              <span>Rabat</span>
              <span>Juin 2026</span>
            </div>
          </div>
        </div>


        <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
          <img className="w-full h-48 object-cover" src="/Evénements/Moussem.jpg" alt="Moussem Tan-Tan" />
          <div className="p-4">
            <h3 className="text-lg font-bold">Moussem de Tan-Tan</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Célébration du patrimoine nomade sahraoui : fantasia, musique et artisanat.
            </p>
            <div className="flex justify-between items-center mt-4 text-sm font-medium text-gray-700">
              <span>Tan-Tan</span>
              <span>Mai 2026</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
          <img className="w-full h-48 object-cover" src="/Evénements/festival-fes.jpg" alt="Festival Fès" />
          <div className="p-4">
            <h3 className="text-lg font-bold">Musiques Sacrées du Monde</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Un voyage spirituel à travers les musiques sacrées de différentes cultures.
            </p>
            <div className="flex justify-between items-center mt-4 text-sm font-medium text-gray-700">
              <span>Fès</span>
              <span>Juin 2026</span>
            </div>
          </div>
        </div>

      </div>
    </section>
   <div className="bg-gradient-to-r from-black to-gray-300 flex flex-col justify-center items-center text-center py-12 rounded-xl w-6xl mx-auto mb-5 shadow-lg">
  <h3 className="text-2xl font-bold text-white">Partagez votre Patrimoine</h3>
  <p className="mt-4 text-white max-w-xl">
    Vous êtes artisan, passionné de culture ou simple amateur ?
    Contribuez à la préservation du patrimoine marocain en partageant vos œuvres et traditions.
  </p>

  <div className="flex gap-6 mt-6">
    <Link
      to="/form"
      className="bg-white text-black px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition"
    >
      Publier une œuvre
    </Link>
    <button className="bg-transparent border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition">
      En savoir plus
    </button>
  </div>
</div>
<Footer/>
    </div>
   
  )
}

export default Evenements
