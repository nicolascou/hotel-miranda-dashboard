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
          <div className='booking-details__check'>
            <p>Check In</p>
            <p>{booking.check_in}</p>
          </div>
          <div className='booking-details__check'>
            <p>Check Out</p>
            <p>{booking.check_out}</p>
          </div>
        </div>
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