import React from 'react'
import { Navigate } from 'react-router-dom'


const ProtectedAdmin= ({ user, children }) => {
    if (user && user.email === 'snacksbettina@gmail.com') {
        return children;
    }
    return <Navigate to="/" replace />;
  
  };
export default ProtectedAdmin