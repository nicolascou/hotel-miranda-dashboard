import React from 'react'
import hotelIcon from '../../img/icons/hotel.svg';
import { Button } from './styled';
import profilePic from '../../img/profile-pic.jpg';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ hideSidebar }) => { 
  const location = useLocation();
  const route = location.pathname.split('/')[1];
  
  return (
    <>
      <div className={`sidebar ${hideSidebar ? 'sidebar--hidden' : ''}`}>
        <div className='sidebar__logo'>
          <img width={45} height={45} src={hotelIcon} alt="" />
          <div style={{ textAlign: 'left', marginLeft: '20px' }}>
            <h1>travl</h1>
            <p>Hotel Admin Dashboard</p>
          </div>
        </div>
        <div style={{ padding: '30px' }}>
          <div className='sidebar__nav'>
            <div className={`sidebar__nav__box ${!route ? 'sidebar__nav__box--active' : ''}`}>
              <i className="fa-solid fa-table-columns"></i>
              <Link to='/'>Dashboard</Link>
            </div>
            <div className={`sidebar__nav__box ${route === 'rooms' ? 'sidebar__nav__box--active' : ''}`}>
              <i className='fa-solid fa-key'></i>
              <Link to='/rooms'>Room</Link>
            </div>
            <div className={`sidebar__nav__box ${route === 'bookings' ? 'sidebar__nav__box--active' : ''}`}>
              <i className="fa-regular fa-calendar-check"></i>
              <Link to='/bookings'>Bookings</Link>
            </div>
            <div className={`sidebar__nav__box ${route === 'users' ? 'sidebar__nav__box--active' : ''}`}>
              <i className="fa-solid fa-user"></i>
              <Link to='/users'>Users</Link>
            </div>
            <div className={`sidebar__nav__box ${route === 'contact' ? 'sidebar__nav__box--active' : ''}`}>
              <i className="fa-solid fa-puzzle-piece"></i>
              <Link to='/contact'>Contact</Link>
            </div>
          </div>
          <div className='sidebar__card'>
            <img className='sidebar__card__img' src={profilePic} alt="" />
            <p className='sidebar__card__name'>Nicolás Cousillas</p>
            <p className='sidebar__card__mail'>nicolascousillas1@gmail.com</p>
            <Button className='sidebar__card__btn'>Contact us</Button>
          </div>
          <div className='sidebar__rights'>
            <p className='sidebar__rights__bold'>Travl Hotel Admin Dashboard</p>
            <p>© 2020 All Rights Reserved</p>
            <p className='sidebar__rights__bottom-text'>Made with ♥ by Peterdraw</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar