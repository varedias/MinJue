import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Leasing from './pages/Leasing';
import SelectEquipment from './pages/SelectEquipment';
import PersonalCenter from './pages/PersonalCenter';
import ContentDetail from './pages/ContentDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="leasing" element={<Leasing />} />
          <Route path="select" element={<SelectEquipment />} />
          <Route path="profile" element={<PersonalCenter />} />
          <Route path="content/:id" element={<ContentDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;