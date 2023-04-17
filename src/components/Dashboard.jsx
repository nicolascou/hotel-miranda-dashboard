import React from 'react'
import hotelIcon from '../img/icons/hotel.svg';

const Dashboard = () => {
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
        <ul className='sidebar__nav'>
          <li>Dashboard</li>
          <li>Room</li>
          <li>Bookings</li>
          <li>Users</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  )
}

export default Dashboard