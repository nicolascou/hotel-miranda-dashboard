import React, { useReducer } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard';

import BookingList from './components/booking/BookingList.jsx';
import BookingDetails from './components/booking/BookingDetails';
import BookingCreate from './components/booking/BookingCreate';
import BookingUpdate from './components/booking/BookingUpdate';

import RoomList from './components/room/RoomList';
import RoomDetails from './components/room/RoomDetails';
import RoomCreate from './components/room/RoomCreate';
import RoomUpdate from './components/room/RoomUpdate';

import UserList from './components/user/UserList';
import UserCreate from './components/user/UserCreate';
import UserUpdate from './components/user/UserUpdate';
import UserDetails from './components/user/UserDetails';

import ContactList from './components/contact/ContactList';
import ContactCreate from './components/contact/ContactCreate';
import ContactUpdate from './components/contact/ContactUpdate';

import PrivateRoute from './components/PrivateRoute';
import { IUserState, userContextReducer } from './context/userContextReducer';
import { UserContext } from './context/UserContext';

const userInitialState: IUserState = {
  isAuthenticated: false,
  username: '',
  email: ''
}

const App: React.FC = () => {
  const BASENAME = '/hotel-miranda-dashboard'

  const router = createBrowserRouter([
    { path: '/login', element: <Login /> },
    { path: '/', 
      element: <PrivateRoute><Dashboard /></PrivateRoute> },
      { path: '/bookings', 
      element: <PrivateRoute><BookingList /></PrivateRoute> },
      { path: '/bookings/:id',
      element: <PrivateRoute><BookingDetails /></PrivateRoute> },
      { path: '/bookings/create',
      element: <PrivateRoute><BookingCreate /></PrivateRoute> },
      { path: '/bookings/update/:id',
      element: <PrivateRoute><BookingUpdate /></PrivateRoute> },
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
      { path: '/users/:id', 
      element: <PrivateRoute><UserDetails /></PrivateRoute> },
      { path: '/users/create', 
      element: <PrivateRoute><UserCreate /></PrivateRoute> },
      { path: '/users/update/:id', 
      element: <PrivateRoute><UserUpdate /></PrivateRoute> },
      { path: '/contact/', 
      element: <PrivateRoute><ContactList /></PrivateRoute> },
      { path: '/contact/create', 
      element: <PrivateRoute><ContactCreate /></PrivateRoute> },
      { path: '/contact/:id', 
      element: <PrivateRoute><ContactUpdate /></PrivateRoute> },
    ], { basename: BASENAME });
    
  const [userState, dispatchUserAciton] = useReducer(userContextReducer, userInitialState);
  
  const actions = {
    login: function(username: string, email: string) {
      dispatchUserAciton({ type: 'login', payload: {username, email} });
    },
    logout: function() {
      dispatchUserAciton({ type: 'logout' });
    },
    updateUser: function(username: string, email: string) {
      dispatchUserAciton({ type: 'updateUser', payload: {username, email} });
    }
  }
  
  return (
    <>
      <UserContext.Provider value={{ user: userState, actions }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
}

export default App;
