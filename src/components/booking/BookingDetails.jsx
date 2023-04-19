import React from 'react'
import allBookings from '../../data/bookings.json';
import room1 from '../../img/rooms-3.jpg';
import { useParams } from 'react-router-dom';

const BookingDetails = () => {
  const params = useParams();
  const booking = allBookings.find(b => b.id === Number(params.id));

  if (!booking) {
    return <h2>This booking does not exist</h2>
  }
  
  return (
    <div className='booking-details'>
      <div className='booking-details__left'>
        <div className='booking-details__row'>
          <div className='booking-details__left__photo'>
            <i className='fa-solid fa-user'></i>
          </div>
          <div className='booking-details__left__main'>
            <h2>{booking.guest}</h2>
            <p>ID {booking.guest_id}</p>
            <div style={{ display: 'flex' }}>
              <button className='booking-details__left__main__phone-btn'>
                <i className='fa-solid fa-phone'></i>
              </button>
              <button className='booking-details__left__main__message-btn'>
                <i className='fa-solid fa-message'></i>
                Send message
              </button>
            </div>
          </div>
        </div>
        <div className='booking-details__row'>
          <div className='booking-details__left__check'>
            <p>Check In</p>
            <p>{booking.check_in}</p>
          </div>
          <div className='booking-details__left__check'>
            <p>Check Out</p>
            <p>{booking.check_out}</p>
          </div>
        </div>
        <div className='booking-details__left__bar'></div>
        <div className='booking-details__row'>
          <div className='booking-details__left__room'>
            <p>Room Info</p>
            <p>{booking.room_type}</p>
          </div>
          <div className='booking-details__left__room'>
            <p>Price</p>
            <p>$145<span> /night</span></p>
          </div>
        </div>
        <p className='booking-details__left__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>  
      <div className='booking-details__right'>
        <img className='booking-details__right__img' src={room1} alt="" />
        <div className='booking-details__right__text'>
          <h3 className='booking-details__right__text__title'>Bed Room</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facere earum expedita dolore, fuga nobis debitis sint illo. Nisi recusandae eveniet dolor adipisci quod sapiente accusantium sunt fugit ipsum molestias?</p>
        </div>
      </div>
    </div>
  )
}

export default BookingDetails