import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';
import { useDispatch } from 'react-redux';
import { getRoomList } from '../features/rooms/getRoomList';
import { getBookingList } from '../features/bookings/getBookingList';

const PrivateRoute = ({ auth, children }) => {
  const [hideSidebar, setHideSidebar] = useState(false);

  const dispatch = useDispatch();
  
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