import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {loading, user} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }

    if(user){
        return children;
    }

    return(
        <div>
            <Navigate to='/authentication/register'></Navigate>
        </div>
    )
    
};

export default PrivateRoute;