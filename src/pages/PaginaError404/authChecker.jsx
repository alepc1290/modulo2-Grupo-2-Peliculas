import React from 'react';
import { Navigate } from 'react-router-dom';
import { getLSItems } from '../../utils/function';

function AuthChecker({ children }) {
    const isAdmin = getLSItems("isAdmin");
    if (!isAdmin) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default AuthChecker;