import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { AiFillEdit } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";

function Evenements() {
  const [evenements, setEvenements] = useState([])
  const [editingEvenement, setEditingEvenement] = useState(null)
  const [formData, setFormData] = useState({
    titre: '',
    description: '',
    ville: '',
    date: '',
    image: '',
    alt: ''
  })

  const getEvenements = async () => {
    try {
      const res = await axios.get('http://localhost:3000/evenements')
      setEvenements(res.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getEvenements()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingEvenement) {
        await axios.patch(`http://localhost:3000/evenements/${editingEvenement.id}`, formData)
        setEditingEvenement(null)
      } else {
        await axios.post('http://localhost:3000/evenements', formData)
      }
      setFormData({titre: '', description: '', ville: '', date: '', image: '', alt: '' })
      getEvenements()
    } catch (e) {
      console.log(e)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/evenements/${id}`)
      getEvenements()
    } catch (e) {
      console.log(e)
    }
  }

  const handleEdit = (evenement) => {
    window.scrollTo(0, 0)
    setEditingEvenement(evenement)
    setFormData({
      id: evenement.id,
      titre: evenement.titre,
      description: evenement.description,
      ville: evenement.ville,
      date: evenement.date,
      image: evenement.image,
      alt: evenement.alt
    })
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Gestion des Événements</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg mb-12 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {['titre', 'description', 'ville', 'date', 'image', 'alt'].map(field => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none w-full transition shadow-sm hover:shadow-md"
            required={field === 'titre'}
          />
        ))}
        <button
          type="submit"
          className="col-span-1 md:col-span-2 bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-500 transition shadow-md hover:shadow-lg"
        >
          {editingEvenement ? 'Mettre à jour' : 'Ajouter'} Événement
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full bg-white shadow-lg rounded-2xl overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-50">
              <tr>
                {['Image', 'Titre', 'Description', 'Ville', 'Date', 'Alt', 'Actions'].map((head) => (
                  <th key={head} className="px-6 py-4 text-left text-sm font-semibold text-gray-700">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {evenements.map((event) => (
                <tr key={event.id}>
                  <td className="px-6 py-4">
                    <img src={event.image} alt={event.alt} className="w-20 h-20 object-cover rounded-xl border border-gray-300" />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">{event.titre}</td>
                  <td className="px-6 py-4 text-start">{event.description}</td>
                  <td className="px-6 py-4">{event.ville}</td>
                  <td className="px-6 py-4">{event.date}</td>
                  <td className="px-6 py-4">{event.alt}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center items-center gap-3">
                      <button
                        onClick={() => handleEdit(event)}
                        className="bg-yellow-100 text-yellow-600 p-2 rounded-lg hover:bg-yellow-200 transition"
                      >
                        <AiFillEdit size={20} />
                      </button>
                      <button
                        onClick={() => handleDelete(event.id)}
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
  )
}

export default Evenements
