import React from 'react';
import bookings from '../../data/bookings.json';

const BookingList = () => {
  return (
    <div className='bookings'>
      <div className='bookings__top'>
        <ul className='bookings__top__menu'>
          <li className='bookings__top__menu__item bookings__top__menu__item--active'>All Guest</li>
          <li className='bookings__top__menu__item'>Order Date</li>
          <li className='bookings__top__menu__item'>Check In</li>
          <li className='bookings__top__menu__item'>Check Out</li>
        </ul>
        <select className='bookings__top__select' name="orderby">
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
      <div className='bookings__table'>
        <div className='bookings__table__row bookings__table__row--first'>
          <p className='bookings__table__row__item'>Guest</p>
          <p className='bookings__table__row__item'>Order Date</p>
          <p className='bookings__table__row__item'>Check In</p>
          <p className='bookings__table__row__item'>Check Out</p>
          <p className='bookings__table__row__item'>Special Request</p>
          <p className='bookings__table__row__item'>Room type</p>
          <p className='bookings__table__row__item'>Status</p>
        </div>
        <ul style={{ listStyle: 'none' }}>
          {bookings.slice(0, 8).map((b) => (
            <div key={b.id} className='bookings__table__row'>
              <div className='bookings__table__row__item'>
                <div className='bookings__table__row__item__photo'></div>
                <div>
                  <p className='weight-500'>{b.guest}</p>
                  <p className='bookings__table__row__item__id'>{b.guest_id}</p>
                </div>
              </div>
              <p className='bookings__table__row__item'>{b.order_date}</p>
              <div className='bookings__table__row__item' style={{ flexDirection: 'column' }}>
                <p className='weight-500'>{b.check_in}</p>
                <p className='small-text'>12.00 PM</p>
              </div>
              <div className='bookings__table__row__item' style={{ flexDirection: 'column' }}>
                <p className='weight-500'>{b.check_out}</p>
                <p className='small-text'>9.00AM</p>
              </div>
              <div className='bookings__table__row__item'>
                <button className='bookings__table__row__item__btn'>View Notes</button>
              </div>
              <p className='bookings__table__row__item weight-500'>{b.room_type}</p>
              <p className='bookings__table__row__item'>{b.status}</p>
              <i className='fa-solid fa-ellipsis-vertical bookings__table__row__ellipsis'></i>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BookingList