import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';

const PrivateRoute = ({ auth, children }) => {
  const [hideSidebar, setHideSidebar] = useState(false);
  
  if (!auth) {
    return <Navigate to="/login" replace={true} />
  } 
  return (
    <>
      <Sidebar hideSidebar={hideSidebar} />
      <div className={`page-content ${hideSidebar ? 'page-content--100w' : ''}`}> 
        <Header hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />
        <div style={{ padding: '50px' }}>
          { children }
        </div>
      </div>
    </>
  );
}

export default PrivateRoute