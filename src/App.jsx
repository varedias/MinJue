import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Leasing from './pages/Leasing';
import Mall from './pages/Mall';
import ProductDetail from './pages/ProductDetail';
import SupplierDetail from './pages/SupplierDetail';
import PersonalCenter from './pages/PersonalCenter';
import ContentDetail from './pages/ContentDetail';
import Discovery from './pages/Discovery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="leasing" element={<Leasing />} />
          <Route path="mall" element={<Mall />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="supplier/:id" element={<SupplierDetail />} />
          <Route path="profile" element={<PersonalCenter />} />
          <Route path="content/:id" element={<ContentDetail />} />
          <Route path="discovery" element={<Discovery />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;