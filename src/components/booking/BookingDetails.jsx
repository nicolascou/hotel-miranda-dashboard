import React from 'react'
import allBookings from '../../data/bookings.json';
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
        {booking.guest}
      </div>
      <div className='booking-details__right'>
        <i className='fa-solid fa-user booking-details__right__i'></i>
        <div className='booking-details__right__text'>
          <h3 className='booking-details__right__text__title'>Bed Room</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facere earum expedita dolore, fuga nobis debitis sint illo. Nisi recusandae eveniet dolor adipisci quod sapiente accusantium sunt fugit ipsum molestias?</p>
        </div>
      </div>
    </div>
  )
}

export default BookingDetails