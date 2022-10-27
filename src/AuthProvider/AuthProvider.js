import React, { useEffect, useState } from 'react';
import app from '../firebase/Firebase.init'
import { createContext } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const gitProvider = new GithubAuthProvider();



const AuthProvider = ({ children }) => {

    const [loading ,setLoading]=useState(true)

    const [user, setUser] = useState(null);

    const registerWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        setLoading(true)
    }
    const loginWithEmailAndPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const loginWithGit = ()=>{
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }

    const updateUserName = (name, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }

    const verifyEmail = ()=>{
        setLoading(true)
        return sendEmailVerification(auth.currentUser);
    }

    const userLogOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.uid) {
                setLoading(false)
                setUser(currentUser)
            }
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        registerWithEmailAndPassword,
        loginWithEmailAndPassword,
        user,
        loginWithGoogle,
        loginWithGit,
        updateUserName,
        userLogOut,
        verifyEmail,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;