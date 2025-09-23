import React from 'react'
import OeuvresTraditions from './OeuvresTraditions'
function Catégorie() {
  return (
    <div>
        <div>
            <h1 className='text-center text-black text-2xl font-extrabold pb-5'>Explorez par Catégorie</h1>
            <p className='text-center text-sm text-gray-500'>Découvrez la diversité du patrimoine marocain à travers nos différentes catégories</p>
        </div>
       <div className="flex flex-wrap gap-10 justify-center items-center p-6">
  <div className="bg-white shadow-lg rounded-2xl p-6 w-64 text-center hover:shadow-2xl transition-shadow duration-300">
    <img src="../imgsCategories/cat1.png" alt="Artisanat" className="mx-auto mb-4 w-16 h-16" />
    <h3 className="text-lg font-bold text-gray-800">Artisanat</h3>
    <p className="text-gray-600 text-sm mt-2">
      Objets artisanaux traditionnels marocains
    </p>
  </div>

  <div className="bg-white shadow-lg rounded-2xl p-6 w-64 text-center hover:shadow-2xl transition-shadow duration-300">
    <img src="../imgsCategories/cat2.png" alt="Artisanat" className="mx-auto mb-4 w-16 h-16" />
    <h3 className="text-lg font-bold text-gray-800">Artisanat</h3>
    <p className="text-gray-600 text-sm mt-2">
      Objets artisanaux traditionnels marocains
    </p>
  </div>

  <div className="bg-white shadow-xl rounded-2xl p-6 w-64 text-center hover:shadow-2xl transition-shadow duration-300">
    <img src="../imgsCategories/cat3.png" alt="Artisanat" className="mx-auto mb-4 w-16 h-16" />
    <h3 className="text-lg font-bold text-gray-800">Artisanat</h3>
    <p className="text-gray-600 text-sm mt-2">
      Objets artisanaux traditionnels marocains
    </p>
  </div>

  <div className="bg-white shadow-lg rounded-2xl p-6 w-64 text-center hover:shadow-2xl transition-shadow duration-300">
    <img src="../imgsCategories/cat4.png" alt="Artisanat" className="mx-auto mb-4 w-16 h-16" />
    <h3 className="text-lg font-bold text-gray-800">Artisanat</h3>
    <p className="text-gray-600 text-sm mt-2">
      Objets artisanaux traditionnels marocains
    </p>
  </div>
  
</div>
<OeuvresTraditions/>
    </div>
  )
}

export default Catégorie