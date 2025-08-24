import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (updatedData) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, updatedData)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false)
        })

        return () => unsubscribe()
    },[])

    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        signOutUser,
        updateUserProfile
    }
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;