import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, updateProfile } from 'firebase/auth';
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

    const updateUserProfile = (information) => {
        return updateProfile(auth.currentUser, information);
    }

    const authInfo = {
        user,
        createUser,
        googleSignIn,
        githubSignIn,
        updateUserProfile
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => unsubscribe();
    })

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;