import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Accueil/Home.jsx';
import Favoris from './Favoris/Favoris.jsx';
import Apropos from './Apropos/Apropos.jsx';
import Explorer from './Explorer/Explorer.jsx';
import OeuvreDetail from './Explorer/OeuvreDetail.jsx';
import Form from './Publier/Form.jsx';
import Oeuvres from './Admin/Oeuvres/Oeuvres.jsx';
import Categories from './Admin/Categories/Categories.jsx';

import MainLayout from './Layouts/MainLayout.jsx';
import AdminLayout from './Admin/AdminLayout.jsx';

function App() {
  return (
    <Routes>
      {/* Main layout routes (Navbar visible) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/oeuvre/:id" element={<OeuvreDetail />} />
      </Route>

      {/* Admin layout routes (Sidebar visible, Navbar hidden) */}
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<Oeuvres />} /> {/* default admin page */}
        <Route path="/admin/oeuvres" element={<Oeuvres />} />
        <Route path="/admin/categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default App;
