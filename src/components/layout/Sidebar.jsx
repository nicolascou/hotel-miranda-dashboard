import React from 'react'
import hotelIcon from '../../img/icons/hotel.svg';
import { Button } from './styled';
import profilePic from '../../img/profile-pic.jpg';

const Sidebar = ({ hideSidebar }) => { 
  const route = window.location.pathname.split('/')[1];
  
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
              <a href='/'>Dashboard</a>
            </div>
            <div className={`sidebar__nav__box ${route === 'rooms' ? 'sidebar__nav__box--active' : ''}`}>
              <i className='fa-solid fa-key'></i>
              <a href='/rooms'>Room</a>
            </div>
            <div className={`sidebar__nav__box ${route === 'bookings' ? 'sidebar__nav__box--active' : ''}`}>
              <i className="fa-regular fa-calendar-check"></i>
              <a href='/bookings'>Bookings</a>
            </div>
            <div className={`sidebar__nav__box ${route === 'users' ? 'sidebar__nav__box--active' : ''}`}>
              <i className="fa-solid fa-user"></i>
              <a href='/users'>Users</a>
            </div>
            <div className={`sidebar__nav__box ${route === 'contact' ? 'sidebar__nav__box--active' : ''}`}>
              <i className="fa-solid fa-puzzle-piece"></i>
              <a href='/contact'>Contact</a>
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