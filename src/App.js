import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Login from './components/Login';

import BookingList from './components/booking/BookingList';
import BookingDetails from './components/booking/BookingDetails';
import BookingCreate from './components/booking/BookingCreate';
import BookingUpdate from './components/booking/BookingUpdate';

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
import ContactCreate from './components/contact/ContactCreate';
import ContactUpdate from './components/contact/ContactUpdate';

import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/bookings', element: <BookingList /> },
    { path: '/bookings/create', element: <BookingCreate /> },
    { path: '/bookings/:id', element: <BookingDetails /> },
    { path: '/bookings/update/:id', element: <BookingUpdate /> },
    { path: '/rooms/', element: <RoomList /> },
    { path: '/rooms/create', element: <RoomCreate /> },
    { path: '/rooms/:id', element: <RoomDetails /> },
    { path: '/rooms/update/:id', element: <RoomUpdate /> },
    { path: '/users/', element: <UserList /> },
    { path: '/users/create', element: <UserCreate /> },
    { path: '/users/:id', element: <UserDetails /> },
    { path: '/users/update/:id', element: <UserUpdate /> },
    { path: '/contact/', element: <ContactList /> },
    { path: '/contact/create', element: <ContactCreate /> },
    { path: '/contact/:id', element: <ContactDetails /> },
    { path: '/contact/update/:id', element: <ContactUpdate /> },
  ]);

  const [hideSidebar, setHideSidebar] = useState(false);
  const isAuthenticated = Boolean(localStorage.getItem('miranda-auth') === '1');
  
  return (
    <>
      {
        isAuthenticated ? 
        <>
          <Sidebar hideSidebar={hideSidebar} />
          <div className={`page-content ${hideSidebar ? 'page-content--100w' : ''}`}> 
            <Header hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />
            <div className='animate__animated animate__fadeIn' style={{ padding: '50px' }}>
              <RouterProvider router={router} />
            </div>
          </div>
        </> :
        <RouterProvider router={router} />
      }
    </>
  );
}

export default App;
