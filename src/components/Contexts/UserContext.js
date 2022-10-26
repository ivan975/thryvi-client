import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { app } from '../../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, githubProvider)
    }

    const updateUserProfile = (information) => {
        setLoader(true);
        return updateProfile(auth.currentUser, information);
    }

    const login = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const emailVerify = () => {
        setLoader(true);
        return sendEmailVerification(auth.currentUser);
    }
    const resetPassword = (email) => {
        setLoader(true);
        return sendPasswordResetEmail(auth, email);
    }

    const logout = () => {
        setLoader(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        createUser,
        googleSignIn,
        githubSignIn,
        updateUserProfile,
        login,
        loader,
        resetPassword,
        emailVerify,
        logout
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
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