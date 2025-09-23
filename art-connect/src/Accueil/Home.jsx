import Catégorie from "./Catégorie";
function Home() {
  return (
    <div>
    <div className="bg-gray-100 h-120 flex flex-col items-center justify-center text-center px-6  mb-8">
      
      <h1 className="text-5xl font-extrabold text-black mb-4">
        Découvrez le Patrimoine Marocain
      </h1>

     
      <p className=" text-gray-500 max-w-xl mb-8 text-center">
        Explorez, partagez et célébrez la richesse culturelle du Maroc. Une  plateforme immersive pour connecter les passionnés d'art, les artisans  et les amateurs de culture.
      </p>


      <div className="flex flex-col sm:flex-row gap-4 bg-white shadow-lg p-4 rounded-xl w-full max-w-2xl">
        <input
          type="text"
          placeholder="Rechercher..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />

        <select
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="">Toutes les catégories</option>
          <option value="artisanat">Artisanat</option>
          <option value="gastronomie">Gastronomie</option>
          <option value="musique">Musique & Danse</option>
          <option value="architecture">Architecture</option>
        </select>
        <button className="bg-black text-white w-6xl rounded-2xl">Rechercher</button>

      </div>
      <div className="flex gap-10 pt-10">
        <div>
            <h2 className="font-extrabold text-2xl">200+</h2>
            <p className="text-gray-500">Traditions referencees</p>
        </div>
        <div>
            <h2 className="font-extrabold text-2xl">50+</h2>
            <p className="text-gray-500">Artisans partenaires</p>
        </div>
        <div>
            <h2 className="font-extrabold text-2xl">12+</h2>
            <p className="text-gray-500">Regions couvertes</p>
        </div>
      </div>
     
    </div>
     <Catégorie/>
    </div>
   
  );
}

export default Home;
