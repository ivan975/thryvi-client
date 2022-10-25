import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import { app } from '../../firebase/firebase.init';

const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;