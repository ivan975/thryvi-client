import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from '../components/Contexts/UserContext';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;