import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Leasing from './pages/Leasing';
import Mall from './pages/Mall';
import ProductDetail from './pages/ProductDetail';
import SupplierDetail from './pages/SupplierDetail';
import PersonalCenter from './pages/PersonalCenter';
import UserInfo from './pages/UserInfo';
import ContentDetail from './pages/ContentDetail';
import Discovery from './pages/Discovery';
import Login from './pages/Login';
import HelpCenter from './pages/HelpCenter';
import ContactService from './pages/ContactService';
import InquiryChat from './pages/InquiryChat';
import CrossBorder from './pages/CrossBorder';
import LayoutEn from './components/LayoutEn';
import HomeEn from './pages/HomeEn';
import LoginEn from './pages/LoginEn';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/en/login" element={<LoginEn />} />
          <Route path="/cross-border" element={<CrossBorder />} />
          
          {/* English Site Routes */}
          <Route path="/en" element={<LayoutEn />}>
            <Route index element={<HomeEn />} />
            <Route path="login" element={<LoginEn />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="discovery" element={<Discovery />} />
            <Route path="leasing" element={<Leasing />} />
            <Route path="mall" element={<Mall />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="supplier/:id" element={<SupplierDetail />} />
            <Route path="profile" element={<PersonalCenter />} />
            <Route path="user-info" element={<UserInfo />} />
            <Route path="content/:id" element={<ContentDetail />} />
            <Route path="help" element={<HelpCenter />} />
            <Route path="contact" element={<ContactService />} />
            <Route path="inquiry/:id" element={<InquiryChat />} />
          </Route>

          {/* Chinese Site Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="leasing" element={<Leasing />} />
            <Route path="mall" element={<Mall />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="supplier/:id" element={<SupplierDetail />} />
            <Route path="profile" element={<PersonalCenter />} />
            <Route path="user-info" element={<UserInfo />} />
            <Route path="content/:id" element={<ContentDetail />} />
            <Route path="discovery" element={<Discovery />} />
            <Route path="help" element={<HelpCenter />} />
            <Route path="contact" element={<ContactService />} />
            <Route path="inquiry/:id" element={<InquiryChat />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;