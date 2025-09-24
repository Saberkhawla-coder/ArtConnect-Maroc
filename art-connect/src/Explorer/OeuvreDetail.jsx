import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function OeuvreDetail() {
  const { id } = useParams();
  const [oeuvre, setOeuvre] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(`http://localhost:3000/oeuvres/${id}`)
      .then((res) => setOeuvre(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!oeuvre) return (
    <div className="flex justify-center items-center min-h-screen">
      <p className="text-xl text-gray-600">Chargement...</p>
    </div>
  );

  return (
    <div>
        <div className="flex items-center justify-center p-5 my-20">
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[60vh] flex flex-col md:flex-row">
          <div className="md:w-1/2 h-full">
            <img
              src={oeuvre.img}
              alt={oeuvre.titre}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:p-8 md:w-1/2 flex flex-col  overflow-y-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{oeuvre.titre}</h1>
            <p className="text-gray-600 mb-6 leading-relaxed">{oeuvre.desc}</p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <strong className="text-amber-600">Auteur:</strong> {oeuvre.auteur}
              </p>
              <p className="text-gray-700">
                <strong className="text-amber-600">Lieu:</strong> {oeuvre.lieu.ville}, {oeuvre.lieu.region}
              </p>
            </div>
            <div className="flex justify-end">
                <Link
                to="/Explorer"
                className="mt-6 w-20 text-center bg-amber-500 text-white px-3 py-3 rounded-xl font-semibold shadow hover:bg-amber-600 transition-colors"
                >
                Retour
                </Link>
            </div>
            

          </div>
          
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default OeuvreDetail;