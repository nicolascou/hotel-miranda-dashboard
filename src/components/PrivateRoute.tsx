import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom';
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';
import { UserContext } from '../context/UserContext';

interface IPrivateRoute {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<IPrivateRoute> = ({ children }) => {
  const [hideSidebar, setHideSidebar] = useState(false);
  const { user } = useContext(UserContext);

  if (!user.isAuthenticated) {
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