import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OeuvresTraditions from './OeuvresTraditions';

function Catégorie() {
  const [categories, setCategories] = useState([]);

  async function getCategorie() {
    try {
      const res = await axios.get('http://localhost:3000/categories');
      setCategories(res.data);
    } catch (e) {
      console.log("Erreur lors de la récupération des catégories :", e);
    }
  }

  useEffect(() => {
    getCategorie();
  }, []);

  return (
    <div>
      <div>
        <h1 className='text-center text-black text-2xl font-extrabold pb-5'>Explorez par Catégorie</h1>
        <p className='text-center text-sm text-gray-500'>Découvrez la diversité du patrimoine marocain à travers nos différentes catégories</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center p-6">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-white shadow-lg rounded-2xl p-6 w-52 text-center hover:shadow-2xl transition-shadow duration-300">
            <img src={cat.image} alt={cat.titre} className="mx-auto mb-4 w-16 h-16" />
            <h3 className="text-lg font-bold text-gray-800">{cat.titre}</h3>
            <p className="text-gray-600 text-sm mt-2">{cat.description}</p>
          </div>
        ))}
      </div>

      <OeuvresTraditions />
    </div>
  );
}

export default Catégorie;
