// App.jsx
import { Routes, Route } from 'react-router-dom';
import './App.css'
import MainLayout from './Layouts/MainLayout.jsx';
import AdminLayout from './Admin/AdminLayout.jsx';
import Home from './Accueil/Home.jsx';
import Form from './Publier/Form.jsx';
import Favoris from './Favoris/Favoris.jsx';
import Apropos from './Apropos/Apropos.jsx';
import Explorer from './Explorer/Explorer.jsx';
import OeuvreDetail from './Explorer/OeuvreDetail.jsx';
import Oeuvres from './Admin/Oeuvres/Oeuvres.jsx';
import Categories from './Admin/Categories/Categories.jsx';

function App() {
  return (
    <Routes>
      {/* Public pages with Navbar */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Explorer" element={<Explorer />} />
        <Route path="/oeuvre/:id" element={<OeuvreDetail />} />
      </Route>

      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<Oeuvres />} />
        <Route path="/admin/oeuvres" element={<Oeuvres />} />
        <Route path="/admin/categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default App;
