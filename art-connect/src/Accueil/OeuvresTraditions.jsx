import React,{useState,useEffect} from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
import Evénements from './Evénements';
import axios from 'axios'
function OeuvresTraditions() {
 
  const [oeuvres, setOeuvres] = useState([]);
  
  async function getOeuvres(){
    try{
       const response= await axios.get('http://localhost:3000/oeuvres')
       setOeuvres(response.data)

    }catch(e){
      console.log(e)
    }
   
  }
  useEffect(()=>{
    getOeuvres()
  },[])

  return (
    <div>
       <div className="px-8 py-12 bg-gray-50 mt-8 ">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Derniers Ajouts</h1>
        <p className="text-gray-600 mt-2">
          Découvrez les dernières œuvres et traditions ajoutées à notre collection
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
        {oeuvres.map((oeuvre) => (
          <div
            key={oeuvre.id}
            className="bg-red shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >

            <img
              src={oeuvre.img}
              alt={oeuvre.titre}
              className="w-full h-40 object-cover"
            />


            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {oeuvre.titre}
                </h2>
                <p className="text-gray-600 text-sm mb-3">{oeuvre.desc}</p>
              </div>
              <div className="text-xs text-gray-500">
                <p  className='flex gap-2  items-center'><FaLocationDot className='text-amber-500'/> {oeuvre.lieu}</p>
                <p >
                 Par<span className="font-medium text-gray-700"> {oeuvre.auteur}</span>
                </p>
              </div>
              
            </div>
           
          </div>
        ))}
         <div >
        <Link to="/Explorer"   className="absolute -right-10 top-1/2 -translate-x-1/2 -translate-y-1/2
        bg-gray-400/50 rounded-3xl shadow-2xl p-4 z-50 hover:bg-amber-500/60 "><IoArrowForwardOutline className='text-white text-2xl'/>
        </Link>        
      </div>
      </div>
     
    </div>
     <Evénements/>
    </div>
   
  )
}

export default OeuvresTraditions
