import React, { useEffect, useReducer, useState } from 'react';
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
import { userContextReducer } from './context/userContextReducer';
import { UserContext } from './context/UserContext';

const userInitialState = {
  isAuthenticated: false,
  username: '',
  email: ''
}

function App() {
  const [user, dispatch] = useReducer(userContextReducer, userInitialState);

  const BASENAME = '/hotel-miranda-dashboard'

  const router = createBrowserRouter([
    { path: '/login', element: <Login /> },
    { path: '/', 
      element: <PrivateRoute><Dashboard /></PrivateRoute> },
    { path: '/bookings', 
      element: <PrivateRoute><BookingList /></PrivateRoute> },
    { path: '/bookings/:id',
      element: <PrivateRoute><BookingDetails /></PrivateRoute> },
    { path: '/rooms/',
      element: <PrivateRoute><RoomList /></PrivateRoute> },
    { path: '/rooms/create',
      element: <PrivateRoute><RoomCreate /></PrivateRoute> },
    { path: '/rooms/:id', 
      element: <PrivateRoute><RoomDetails /></PrivateRoute> },
    { path: '/rooms/update/:id', 
      element: <PrivateRoute><RoomUpdate /></PrivateRoute> },
    { path: '/users/', 
      element: <PrivateRoute><UserList /></PrivateRoute> },
    { path: '/users/create', 
      element: <PrivateRoute><UserCreate /></PrivateRoute> },
    { path: '/users/:id', 
      element: <PrivateRoute><UserDetails /></PrivateRoute> },
    { path: '/users/update/:id', 
      element: <PrivateRoute><UserUpdate /></PrivateRoute> },
    { path: '/contact/', 
      element: <PrivateRoute><ContactList /></PrivateRoute> },
    { path: '/contact/:id', 
      element: <PrivateRoute><ContactDetails /></PrivateRoute> },
  ], { basename: BASENAME });

  const actions = {
    login: function(username, email) {
      dispatch({ type: 'login', payload: {username, email} });
    },
    logout: function() {
      dispatch({ type: 'logout'});
    },
    updateUser: function(username, email) {
      dispatch({ type: 'updateUser', payload: {username, email} });
    }
  }
  
  return (
    <>
      <UserContext.Provider value={{ user, actions }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
}

export default App;
