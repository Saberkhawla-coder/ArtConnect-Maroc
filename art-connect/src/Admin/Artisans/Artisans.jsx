import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AiFillEdit } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";

function Artisans() {
  const [artisans, setArtisans] = useState([]);
  const [editingArtisan, setEditingArtisan] = useState(null);
  const [formData, setFormData] = useState({
    nom: '',
    metier: '',
    ville: '',
    experience: '',
    telephone: '',
    email: '',
    image: ''
  });

  // Fetch artisans
  const getArtisans = async () => {
    try {
      const res = await axios.get('http://localhost:3000/artisans');
      setArtisans(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getArtisans();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingArtisan) {
        await axios.patch(`http://localhost:3000/artisans/${editingArtisan.id}`, formData);
        setEditingArtisan(null);
      } else {
        await axios.post('http://localhost:3000/artisans', formData);
      }
      setFormData({ nom: '', metier: '', ville: '', experience: '', telephone: '', email: '' });
      getArtisans();
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/artisans/${id}`);
      getArtisans();
    } catch (e) {
      console.log(e);
    }
  };

  const handleEdit = (artisan) => {
    window.scrollTo(0, 0);
    setEditingArtisan(artisan);
    setFormData({
      id: artisan.id,
      nom: artisan.nom,
      metier: artisan.metier,
      ville: artisan.ville,
      experience: artisan.experience,
      telephone: artisan.telephone,
      email: artisan.email,
    });
  };

  return (
    <div className=" bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 pt-6 text-gray-800 text-center">Gestion des Artisans</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white m-3 p-3 rounded-2xl shadow-lg mb-12 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {[
          { name: "nom", placeholder: "Nom" },
          { name: "metier", placeholder: "Métier" },
          { name: "ville", placeholder: "Ville" },
          { name: "experience", placeholder: "Expérience" },
          { name: "telephone", placeholder: "Téléphone" },
          { name: "email", placeholder: "Email" }
        ].map(field => (
          <input
            key={field.name}
            type="text"
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none w-full transition shadow-sm hover:shadow-md"
            required={field.name === "nom" || field.name === "metier"}
          />
        ))}
        <button
          type="submit"
          className="col-span-1 md:col-span-2 bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-500 transition shadow-md hover:shadow-lg"
        >
          {editingArtisan ? 'Mettre à jour' : 'Ajouter'} Artisan
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full bg-white shadow-lg rounded-2xl overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-50">
              <tr>
                {[ 'Nom', 'Métier', 'Ville', 'Expérience', 'Téléphone', 'Email', 'Actions'].map(head => (
                  <th key={head} className="px-6 py-4 text-left text-sm font-semibold text-gray-700">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {artisans.map(artisan => (
                <tr key={artisan.id}>
                 
                  <td className="px-6 py-4 font-medium text-gray-800">{artisan.nom}</td>
                  <td className="px-6 py-4">{artisan.metier}</td>
                  <td className="px-6 py-4">{artisan.ville}</td>
                  <td className="px-6 py-4">{artisan.experience}</td>
                  <td className="px-6 py-4">{artisan.telephone}</td>
                  <td className="px-6 py-4">{artisan.email}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center items-center gap-3">
                      <button
                        onClick={() => handleEdit(artisan)}
                        className="bg-yellow-100 text-yellow-600 p-2 rounded-lg hover:bg-yellow-200 transition"
                      >
                        <AiFillEdit size={20} />
                      </button>
                      <button
                        onClick={() => handleDelete(artisan.id)}
                        className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition"
                      >
                        <HiOutlineXMark size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Artisans;
