import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

function Evenements() {
  const [evenements, setEvenements] = useState([]);

  async function GetEvenements() {
    try {
      const response = await axios.get('http://localhost:3000/evenements');
      setEvenements(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des événements :", error);
    }
  }

  useEffect(() => {
    GetEvenements();
  }, []);

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
          {evenements.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={event.image}
                alt={event.alt}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{event.titre}</h3>
                <p className="text-gray-600 mt-2 text-sm">{event.description}</p>
                <div className="flex justify-between items-center mt-4 text-sm font-medium text-gray-700">
                  <span>{event.ville}</span>
                  <span>{event.date}</span>
                </div>
              </div>
            </div>
          ))}
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

      <Footer />
    </div>
  );
}

export default Evenements;
