import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { AiFillEdit } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";

function Oeuvres() {
  const [oeuvres, setOeuvres] = useState([])
  const [editingOeuvre, setEditingOeuvre] = useState(null)
  const [formData, setFormData] = useState({
    id: '',
    img: '',
    titre: '',
    desc: '',
    ville: '',
    region: '',
    auteur: '',
    categorieId: ''
  })

  const getOeuvres = async () => {
    try {
      const res = await axios.get('http://localhost:3000/oeuvres')
      setOeuvres(res.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getOeuvres()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = { ...formData, lieu: { ville: formData.ville, region: formData.region } }
    
    try {
      if (editingOeuvre) {
        await axios.patch(`http://localhost:3000/oeuvres/${editingOeuvre.id}`, payload)
        setEditingOeuvre(null)
      } else {
        await axios.post('http://localhost:3000/oeuvres', payload)
      }
      setFormData({ id: '', img: '', titre: '', desc: '', ville: '', region: '', auteur: '' })
      getOeuvres()
    } catch (e) {
      console.log(e)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/oeuvres/${id}`)
      getOeuvres()
    } catch (e) {
      console.log(e)
    }
  }

  const handleEdit = (oeuvre) => {
    window.scrollTo(0,0)
    setEditingOeuvre(oeuvre)
    setFormData({
      id: oeuvre.id,
      img: oeuvre.img,
      titre: oeuvre.titre,
      desc: oeuvre.desc,
      ville: oeuvre.lieu.ville,
      region: oeuvre.lieu.region,
      auteur: oeuvre.auteur,
      categorieId: oeuvre.categorieId
    })
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Gestion des Oeuvres</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg mb-12 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {[
          { name: "titre", placeholder: "Titre" },
          { name: "img", placeholder: "Image URL" },
          { name: "desc", placeholder: "Description" },
          { name: "ville", placeholder: "Ville" },
          { name: "region", placeholder: "Region" },
          { name: "auteur", placeholder: "Auteur" },
        ].map(field => (
          <input
            key={field.name}
            type="text"
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none w-full transition shadow-sm hover:shadow-md"
            required={field.name === "titre"}
          />
        ))}
        <button
          type="submit"
          className={`col-span-1 md:col-span-2 bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-500 transition shadow-md hover:shadow-lg`}
        >
          {editingOeuvre ? 'Mettre à jour' : 'Ajouter'} Oeuvre
        </button>
      </form>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full bg-white shadow-lg rounded-2xl overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-50">
              <tr>
                {['Image', 'Titre', 'Description', 'Ville', 'Region', 'Auteur', 'Actions'].map((head) => (
                  <th key={head} className="px-6 py-4 text-left text-sm font-semibold text-gray-700">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody className="">
              {oeuvres.map((oeuvre) => (
                <tr key={oeuvre.id} >
                  <td className="px-6 py-4 ">
                    <img src={oeuvre.img} alt={oeuvre.titre} className="w-100 h-20 object-cover rounded-xl border border-gray-300" />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">{oeuvre.titre}</td>
                  <td className="px-6 py-4 text-start">{oeuvre.desc}</td>
                  <td className="px-6 py-4">{oeuvre.lieu.ville}</td>
                  <td className="px-6 py-4">{oeuvre.lieu.region}</td>
                  <td className="px-6 py-4">{oeuvre.auteur}</td>
                 <td className="px-6 py-4 ">
                  <div className="flex justify-center items-center gap-3">
                    <button
                      onClick={() => handleEdit(oeuvre)}
                      className="bg-yellow-100 text-yellow-600 p-2 rounded-lg hover:bg-yellow-200 transition"
                    >
                      <AiFillEdit size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(oeuvre.id)}
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

export default Oeuvres
