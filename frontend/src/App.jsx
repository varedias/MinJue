import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
// Auth
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import LoginEn from './pages/auth/LoginEn';
import RegisterEn from './pages/auth/RegisterEn';
import ForgotPassword from './pages/auth/ForgotPassword';
import ForgotPasswordEn from './pages/auth/ForgotPasswordEn';

// Home
import Home from './pages/home/Home';
import HomeEn from './pages/home/HomeEn';
import CrossBorder from './pages/home/CrossBorder';

// Product
import Mall from './pages/product/Mall';
import Leasing from './pages/product/Leasing';
import ProductDetail from './pages/product/ProductDetail';
import SelectEquipment from './pages/product/SelectEquipment';
import ProcurementDetail from './pages/product/ProcurementDetail';
import SearchResults from './pages/product/SearchResults';

// Supplier
import Suppliers from './pages/supplier/Suppliers';
import SupplierDetail from './pages/supplier/SupplierDetail';

// User
import PersonalCenter from './pages/user/PersonalCenter';
import UserInfo from './pages/user/UserInfo';

// Content
import Discovery from './pages/content/Discovery';
import ContentDetail from './pages/content/ContentDetail';

// Support
import HelpCenter from './pages/support/HelpCenter';
import ContactService from './pages/support/ContactService';
import InquiryChat from './pages/support/InquiryChat';

// Admin
import AdminLayout from './admin/layouts/AdminLayout';
import RequireAdmin from './admin/components/RequireAdmin';
import AdminDashboard from './admin/pages/Dashboard';
import AdminUserList from './admin/pages/UserList';
import AdminSupplierList from './admin/pages/SupplierList';
import AdminProductList from './admin/pages/ProductList';

import LayoutEn from './components/LayoutEn';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/en/login" element={<LoginEn />} />
          <Route path="/en/register" element={<RegisterEn />} />
          <Route path="/en/forgot-password" element={<ForgotPasswordEn />} />
          <Route path="/cross-border" element={<CrossBorder />} />

          {/* English Site Routes */}
          <Route path="/en" element={<LayoutEn />}>
            <Route index element={<HomeEn />} />
            <Route path="login" element={<LoginEn />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="suppliers" element={<Suppliers />} />
            <Route path="procurement/:id" element={<ProcurementDetail />} />
            <Route path="select-equipment" element={<SelectEquipment />} />
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
            <Route path="suppliers" element={<Suppliers />} />
            <Route path="procurement/:id" element={<ProcurementDetail />} />
            <Route path="select-equipment" element={<SelectEquipment />} />
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

          {/* Admin Routes */}
          <Route path="/admin" element={
            <RequireAdmin>
              <AdminLayout />
            </RequireAdmin>
          }>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<AdminUserList />} />
            <Route path="suppliers" element={<AdminSupplierList />} />
            <Route path="products" element={<AdminProductList />} />
          </Route>

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;