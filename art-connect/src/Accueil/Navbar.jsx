import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex justify-around p-5 bg-white text-dark allContentNav'>
      <div className='title'>
        <h1>ArtConnect Maroc</h1>
      </div>
      <div  className='flex gap-8  '>
        <Link to="/" className='hover:text-amber-500'>Accueil</Link>  
         <Link to="/Explorer" className='hover:text-amber-500'>Explorer</Link>
        <Link to="/form" className='hover:text-amber-500'>Publier</Link>
        <Link to="/favoris" className='hover:text-amber-500 '> Favoris</Link> 
        <Link to="/a propos" className='hover:text-amber-500'>A propos</Link>
         

      </div>
      <div  className='flex gap-5'>
        <Link to="/favoris" className='hover:text-amber-500 '>Admin</Link> 
      </div>
      
    </nav>
  )
}

export default Navbar
