import './App.css'
import Navbar from './Accueil/Navbar.jsx'
import Form from './Publier/Form.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Accueil/Home.jsx'
import Favoris from './Favoris/Favoris.jsx'
import Apropos from './Apropos/Apropos.jsx'
import Explorer from './Explorer/Explorer.jsx'
import OeuvreDetail from './Explorer/OeuvreDetail.jsx'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/form' element={<Form />} />
        <Route path='/favoris' element={<Favoris />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path='/Explorer' element={<Explorer />} />
        <Route path="/oeuvre/:id" element={<OeuvreDetail />} />
      </Routes>
    </>
  )
}

export default App
