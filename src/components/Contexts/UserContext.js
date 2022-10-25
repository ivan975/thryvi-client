import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const UserContext = ({ children }) => {
    const [user, setUser] = useState('');

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const authInfo = { user, createUser, googleSignIn, githubSignIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;