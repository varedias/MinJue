import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const RequireAdmin = ({ children }) => {
    const { user, isAdmin } = useAuth();
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!isAdmin) {
        return <div className="p-8 text-center text-red-500">Access Denied: Admins Only</div>;
    }

    return children;
};

export default RequireAdmin;
