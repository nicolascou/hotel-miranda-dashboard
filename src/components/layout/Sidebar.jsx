import React from 'react'
import hotelIcon from '../../img/icons/hotel.svg';
import { Button } from './styled';

const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <div className='sidebar__logo'>
          <img width={45} height={45} src={hotelIcon} alt="" />
          <div style={{ textAlign: 'left', marginLeft: '20px' }}>
            <h1>travl</h1>
            <p>Hotel Admin Dashboard</p>
          </div>
        </div>
        <div className='sidebar__nav'>
          <div className='sidebar__nav__box'>

            <p>Dashboard</p>
          </div>
          <div className='sidebar__nav__box'>

            <p>Room</p>
          </div>
          <div className='sidebar__nav__box'>

            <p>Bookings</p>
          </div>
          <div className='sidebar__nav__box'>

            <p>Users</p>
          </div>
          <div className='sidebar__nav__box'>

            <p>Contact</p>
          </div>
        </div>
        <div className='sidebar__card'>
          <div className='sidebar__card__img'></div>
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
    </>
  )
}

export default Sidebar