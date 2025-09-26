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
import Artisans from './Admin/Artisans/Artisans.jsx';
import Evenements from './Admin/Evenements/Evenements.jsx';

// ✅ Importer ton context
import { AppProvider } from './context/AppContext';

function App() {
  return (
    // On englobe toutes les routes avec AppProvider
    <AppProvider>
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

        {/* Admin pages */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Oeuvres />} />
          <Route path="/admin/oeuvres" element={<Oeuvres />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/artisans" element={<Artisans />} />
          <Route path="/admin/evenements" element={<Evenements />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
