import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Login from './components/Login';
import BookingList from './components/booking/BookingList';
import BookingDetails from './components/booking/BookingDetails';
import RoomList from './components/room/RoomList';
import RoomDetails from './components/room/RoomDetails';
import UserList from './components/user/UserList';
import UserDetails from './components/user/UserDetails';
import ContactList from './components/contact/ContactList';
import ContactDetails from './components/contact/ContactDetails';

function App() {
  const router = createBrowserRouter([
  ]);
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
