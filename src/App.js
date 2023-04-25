import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard';

import BookingList from './components/booking/BookingList';
import BookingDetails from './components/booking/BookingDetails';

import RoomList from './components/room/RoomList';
import RoomDetails from './components/room/RoomDetails';
import RoomCreate from './components/room/RoomCreate';
import RoomUpdate from './components/room/RoomUpdate';

import UserList from './components/user/UserList';
import UserDetails from './components/user/UserDetails';
import UserCreate from './components/user/UserCreate';
import UserUpdate from './components/user/UserUpdate';

import ContactList from './components/contact/ContactList';
import ContactDetails from './components/contact/ContactDetails';

import PrivateRoute from './components/PrivateRoute';

function App() {

  const [auth, setAuth] = useState(localStorage.getItem('auth-miranda') === '1');

  const BASENAME = '/hotel-miranda-dashboard'

  const router = createBrowserRouter([
    { path: '/login', element: <Login setAuth={setAuth} /> },
    { path: '/', 
      element: <PrivateRoute auth={auth}><Dashboard /></PrivateRoute> },
    { path: '/bookings', 
      element: <PrivateRoute auth={auth}><BookingList /></PrivateRoute> },
    { path: '/bookings/:id', 
      element: <PrivateRoute auth={auth}><BookingDetails /></PrivateRoute> },
    { path: '/rooms/', 
      element: <PrivateRoute auth={auth}><RoomList /></PrivateRoute> },
    { path: '/rooms/create', 
      element: <PrivateRoute auth={auth}><RoomCreate /></PrivateRoute> },
    { path: '/rooms/:id', 
      element: <PrivateRoute auth={auth}><RoomDetails /></PrivateRoute> },
    { path: '/rooms/update/:id', 
      element: <PrivateRoute auth={auth}><RoomUpdate /></PrivateRoute> },
    { path: '/users/', 
      element: <PrivateRoute auth={auth}><UserList /></PrivateRoute> },
    { path: '/users/create', 
      element: <PrivateRoute auth={auth}><UserCreate /></PrivateRoute> },
    { path: '/users/:id', 
      element: <PrivateRoute auth={auth}><UserDetails /></PrivateRoute> },
    { path: '/users/update/:id', 
      element: <PrivateRoute auth={auth}><UserUpdate /></PrivateRoute> },
    { path: '/contact/', 
      element: <PrivateRoute auth={auth}><ContactList /></PrivateRoute> },
    { path: '/contact/:id', 
      element: <PrivateRoute auth={auth}><ContactDetails /></PrivateRoute> },
  ], { basename: BASENAME });

  useEffect(() => {
    if (auth) {
      localStorage.setItem('auth-miranda', '1');
    }
  }, [auth])
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
