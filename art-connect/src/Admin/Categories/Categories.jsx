import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { AiFillEdit } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";

function Catégories() {
  const [categories, setCategories] = useState([])
  const [editingCategory, setEditingCategory] = useState(null)
  const [formData, setFormData] = useState({
    titre: '',
    description: '',
    image: ''
  })

  const getCategories = async () => {
    try {
      const res = await axios.get('http://localhost:3000/categories')
      setCategories(res.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingCategory) {
        await axios.patch(`http://localhost:3000/categories/${editingCategory.id}`, formData)
        setEditingCategory(null)
      } else {
        await axios.post('http://localhost:3000/categories', formData)
      }
      setFormData({titre: '', description: '', image: '' })
      getCategories()
    } catch (e) {
      console.log(e)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/categories/${id}`)
      getCategories()
    } catch (e) {
      console.log(e)
    }
  }

  const handleEdit = (category) => {
    window.scrollTo(0,0)
    setEditingCategory(category)
    setFormData({
      id: category.id,
      titre: category.titre,
      description: category.description,
      image: category.image
    })
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Gestion des Catégories</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg mb-12 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {['titre', 'description', 'image'].map(field => (
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
          className={`col-span-1 md:col-span-2 bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-500 transition shadow-md hover:shadow-lg`}
        >
          {editingCategory ? 'Mettre à jour' : 'Ajouter'} Catégorie
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full bg-white shadow-lg rounded-2xl overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-50">
              <tr>
                {['Image', 'Titre', 'Description', 'Actions'].map((head) => (
                  <th key={head} className="px-6 py-4 text-left text-sm font-semibold text-gray-700">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => (
                <tr key={cat.id}>
                  <td className="px-6 py-4">
                    <img src={cat.image} alt={cat.titre} className="w-20 h-20 object-cover rounded-xl border border-gray-300" />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">{cat.titre}</td>
                  <td className="px-6 py-4">{cat.description}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center items-center gap-3">
                      <button
                        onClick={() => handleEdit(cat)}
                        className="bg-yellow-100 text-yellow-600 p-2 rounded-lg hover:bg-yellow-200 transition"
                      >
                        <AiFillEdit size={20} />
                      </button>
                      <button
                        onClick={() => handleDelete(cat.id)}
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

export default Catégories
