import React, { createContext, useState } from 'react';
import { auth } from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
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