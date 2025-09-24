import React, { useEffect, useState } from "react";
import { RiImageAddFill } from "react-icons/ri";
import axios from "axios";
import Footer from "../Footer";

function Form() {
  const [form, setForm] = useState({
    titre: "",
    categorie: "",
    region: "",
    ville: "",
    auteur: "",
    desc: "",
    img: "" 
  });
  const [submitting, setSubmitting] = useState(false);
  async function postOeuvres(e) {
    e.preventDefault();


    if (!form.titre.trim() || !form.ville.trim() || !form.region.trim() || !form.desc.trim()) {
      alert("Veuillez remplir les champs obligatoires : Titre, Région, Ville et Description.");
      return;
    }

    const payload = {
      titre: form.titre,
      categorie: form.categorie,
      lieu: {
        region: form.region,
        ville: form.ville
      },
      auteur: form.auteur,
      desc: form.desc,
      img: form.img 
    };

    try {
      setSubmitting(true);
      await axios.post("http://localhost:3000/oeuvres", payload);
      alert("Œuvre publiée avec succès ✅");
      setForm({
        titre: "",
        categorie: "",
        region: "",
        ville: "",
        auteur: "",
        desc: "",
        img: ""
      });
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la publication. Regarder la console pour plus de détails.");
    } finally {
      setSubmitting(false);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="py-10 px-4">
        <div>
          <div className="mb-8">
            <h1 className="text-3xl text-center font-extrabold text-gray-900">
              Publier une Œuvre ou Tradition
            </h1>
            <p className="w-xl mx-auto text-gray-600 mt-2 text-center">
              Partagez votre contribution culturelle avec la communauté{" "}
              <span className="font-semibold text-gray-800">ArtConnect Maroc</span>.
            </p>
          </div>

          <form onSubmit={postOeuvres} className="space-y-6 max-w-3xl mx-auto border-1 border-gray-400 shadow-xl rounded-2xl p-8">
            <h1 className="text-xl font-semibold text-gray-800 mb-4">Informations sur l'œuvre</h1>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Titre *</label>
              <input
                type="text"
                value={form.titre}
                onChange={(e) => setForm({ ...form, titre: e.target.value })}
                placeholder="Ex: Tapis Berbère de l'Atlas"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Catégorie *</label>
                <input
                  type="text"
                  value={form.categorie}
                  onChange={(e) => setForm({ ...form, categorie: e.target.value })}
                  placeholder="Sélectionner une catégorie"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Région *</label>
                <input
                  type="text"
                  value={form.region}
                  onChange={(e) => setForm({ ...form, region: e.target.value })}
                  placeholder="Sélectionner une région"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Ville *</label>
                <input
                  type="text"
                  value={form.ville}
                  onChange={(e) => setForm({ ...form, ville: e.target.value })}
                  placeholder="Ex: Ouarzazate"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Auteur / Artisan *</label>
                <input
                  type="text"
                  value={form.auteur}
                  onChange={(e) => setForm({ ...form, auteur: e.target.value })}
                  placeholder="Ex: Fatima Amellal"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Description *</label>
              <textarea
                value={form.desc}
                onChange={(e) => setForm({ ...form, desc: e.target.value })}
                placeholder="Décrivez l'œuvre..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-black resize-none"
              />
            </div>

            <div>
            <label className="block text-gray-700 font-medium mb-2">Image *</label>
            <div className="flex items-center justify-center w-full">
                <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full border-1 border-b-gray-300 border-gray-400 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 p-6"
                >
                <RiImageAddFill className="text-4xl text-gray-500 mb-2" />
                <span className="text-sm font-extrabold text-black mt-1">Télécharger une image</span>
                <span className="text-sm text-gray-500 my-3">Glissez-déposez ou cliquez</span>
                <span className="text-gray-700 font-medium border-1 px-4 py-2 rounded-2xl">Choisir un fichier</span>
                <span className="text-sm text-gray-500 mt-1">Formats: JPG, PNG, GIF (max 5MB)</span>

                <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const previewUrl = URL.createObjectURL(file);
                        setForm({ ...form, img: previewUrl }); 
                    }
                    }}
                />
                </label>
            </div>

            {form.img && (
                <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 mb-2">Aperçu :</p>
                <img src={form.img} alt="preview" className="mx-auto max-h-48 rounded-lg" />
                </div>
            )}
            </div>


            <div className="text-end">
              <button
                type="submit"
                disabled={submitting}
                className="bg-black text-white rounded-xl px-6 py-3 font-semibold hover:bg-gray-800 transition disabled:opacity-60"
              >
                {submitting ? "Publication..." : "Publier l'œuvre"}
              </button>
            </div>
          </form>
        </div>

        <div className="border border-gray-300 shadow-md shadow-gray-500/10 rounded-2xl my-6 w-3xl mx-auto p-10 bg-white">
          <h1 className="font-bold mb-4 text-gray-800">Conseils pour une bonne publication</h1>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ps-4">
            <li>Utilisez un titre descriptif et accrocheur</li>
            <li>Choisissez une image de haute qualité</li>
            <li>Rédigez une description détaillée</li>
            <li>Mentionnez l'origine géographique précise</li>
            <li>Respectez les droits d'auteur</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Form;
