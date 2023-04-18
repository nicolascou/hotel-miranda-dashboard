import React, { useEffect, useState } from 'react';
import allBookings from '../../data/bookings.json';

const BookingList = () => {
  const [bookings, setBookings] = useState(allBookings.slice(0, 8));
  const [pagination, setPagination] = useState(1);

  const handlePagination = (page) => {
    setPagination(page);
    if (pagination <= 0) {
      setPagination(1);
    } else if (pagination > 4) {
      setPagination(4);
    } 
  }

  useEffect(() => {
    console.log(pagination)
    let index = pagination === 1 ? 0 : (pagination-1)*7+1;
    setBookings(allBookings.slice(index, index+8));
    
  }, [pagination])
  
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
          {bookings.map((b) => {
            let statusClass;
            if (b.status === 'Booked') {
              statusClass = 'bookings__table__row__item__status--green';
            } else if (b.status === 'Refund') {
              statusClass  = 'bookings__table__row__item__status--red'
            } else if (b.status === 'Pending') {
              statusClass  = 'bookings__table__row__item__status--gray'
            } else if (b.status === 'Canceled') {
              statusClass  = 'bookings__table__row__item__status--black'
            }
              
            return (  
              <div key={b.id} className='bookings__table__row'>
                <div className='bookings__table__row__item'>
                  <div className='bookings__table__row__item__photo'>
                    <i className='fa-solid fa-user'></i>
                  </div>
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
                <div className='bookings__table__row__item'>
                  <p className={`bookings__table__row__item__status ${statusClass}`}>
                    {b.status}
                  </p>
                </div>
                <i className='fa-solid fa-ellipsis-vertical bookings__table__row__ellipsis'></i>
              </div> 
            )})}
        </ul>
      </div>
      <div className='bookings__bottom'>
        <p className='bookings__bottom__text'>Showing 8 of 102 Data</p>
        <div className='bookings__bottom__pagination'>
          <button onClick={() => handlePagination(pagination-1)} className='bookings__bottom__pagination__btn1'>Prev</button>
          <button onClick={() => handlePagination(1)} className={`bookings__bottom__pagination__btn2 
            ${pagination === 1 ? 'bookings__bottom__pagination__btn2--active' : ''}`}
          >1</button>
          <button onClick={() => handlePagination(2)} className={`bookings__bottom__pagination__btn2 
            ${pagination === 2 ? 'bookings__bottom__pagination__btn2--active' : ''}`}
          >2</button>
          <button onClick={() => handlePagination(3)} className={`bookings__bottom__pagination__btn2 
            ${pagination === 3 ? 'bookings__bottom__pagination__btn2--active' : ''}`}
          >3</button>
          <button onClick={() => handlePagination(4)} className={`bookings__bottom__pagination__btn2 
            ${pagination === 4 ? 'bookings__bottom__pagination__btn2--active' : ''}`}
          >4</button>
          <button onClick={() => handlePagination(pagination+1)} className='bookings__bottom__pagination__btn1'>Next</button>
        </div>
      </div>
    </div>
  )
}

export default BookingList