import React from 'react';
import bookings from '../../data/bookings.json';

const BookingList = () => {
  return (
    <ul>
      {
        bookings.map((booking) => (
          <li key={booking.id}>{booking.guest}, { booking.order_date }, {booking.check_in}, {booking.check_out}, {booking.room_type}, {booking.status}</li>
        ))
      }
    </ul>
  )
}

export default BookingList