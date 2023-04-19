import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ auth, children }) => {
  if (!auth) {
    return <Navigate to="/login" replace={true} />
  } 
  return children;
}

export default PrivateRoute