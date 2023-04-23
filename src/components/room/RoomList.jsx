import React, { useEffect, useState } from 'react'
import rooms from '../../data/rooms.json';
import { useNavigate } from 'react-router-dom';
import sortBookingsBy from '../../utils/sortBookingsBy';
import Pagination from '../partials/Pagination';
import RemoveRow from '../partials/RemoveRow';

const RoomList = () => {
  const [bookings, setBookings] = useState(rooms);
  const [sliceBookings, setSliceBookings] = useState(bookings.slice(0, 7));
  const [pagination, setPagination] = useState(1);
  const [orderBy, setOrderBy] = useState('order_date');

  const navigate = useNavigate();

  const showNotes = (e) => {
    e.target.nextElementSibling.style.display = 'block';
    e.stopPropagation();
  }
  const hideNotes = (e) => {
    e.target.style.display = 'none';
    e.stopPropagation(e);
  }

  const handleDelete = (e, bookingId) => {
    let newBookings = bookings.filter(({ id }) => id !== bookingId);
    setBookings(newBookings);
    setSliceBookings(newBookings.slice(0, 7));
    e.stopPropagation(e);
  }

  useEffect(() => {
    const sortedBookings = sortBookingsBy(orderBy);
    setBookings(sortedBookings);
    setSliceBookings(sortedBookings.slice(0, 7));
    setPagination(1);
  }, [orderBy])

  useEffect(() => {
    let index = pagination === 1 ? 0 : (pagination-1)*7+1;
    setSliceBookings(bookings.slice(index, index+7));

    // eslint-disable-next-line
  }, [pagination])

  return (
    <div className='bookings'>
      <div className='bookings__top'>
        <ul className='bookings__top__menu'>
          <li onClick={() => setOrderBy('order_date')}
            className={`bookings__top__menu__item ${orderBy === 'order_date' || orderBy === 'guest' ? 'bookings__top__menu__item--active' : ''}`}
          >All Bookings</li>
          <li onClick={() => setOrderBy('check_in')}
            className={`bookings__top__menu__item ${orderBy === 'check_in' ? 'bookings__top__menu__item--active' : ''}`}
          >Checking In</li>
          <li onClick={() => setOrderBy('check_out')}
            className={`bookings__top__menu__item ${orderBy === 'check_out' ? 'bookings__top__menu__item--active' : ''}`}
          >Checking Out</li>
          <li onClick={() => setOrderBy('progress')}
            className={`bookings__top__menu__item ${orderBy === 'progress' ? 'bookings__top__menu__item--active' : ''}`}
          >In Progress</li>
        </ul>
        <select className='bookings__top__select' value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
          <option className='bookings__top__select__text' value="order_date">Order Date</option>
          <option className='bookings__top__select__text' value="guest">Guest</option>
          <option className='bookings__top__select__text' value="check_in">Check In</option>
          <option className='bookings__top__select__text' value="check_out">Check Out</option>
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
          {sliceBookings.map((b) => {
            let statusClassMap = {
              'Check In': 'bookings__table__row__item__status--green',
              'Check Out': 'bookings__table__row__item__status--red',
              'In Progress': 'bookings__table__row__item__status--yellow'
            }
        
            return (  
              <div key={b.id} onClick={() => navigate(`/bookings/${b.id}`)} className='bookings__table__row'>
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
                  <button onClick={(e) => showNotes(e)} className='bookings__table__row__item__btn'>View Notes</button>
                  <div className='bookings__notes-modal-wrapper' onClick={(e) => hideNotes(e)}>
                    <div className='bookings__notes-modal' onClick={(e) => e.stopPropagation() }>
                      <p>{b.special_request || 'No special requests'}</p>
                    </div>
                  </div>
                </div>
                <p className='bookings__table__row__item weight-500'>{b.room_type}</p>
                <div className='bookings__table__row__item'>
                  <p className={`bookings__table__row__item__status ${statusClassMap[b.status]}`}>
                    {b.status}
                  </p>
                </div>
                <RemoveRow handleDelete={handleDelete} id={b.id} />
              </div> 
            )})}
        </ul>
      </div>
      <div className='bookings__bottom'>
        <p className='bookings__bottom__text'>Showing 7 of 102 Data</p>
        <Pagination pagination={pagination} setPagination={setPagination} bookingsLength={bookings.length} />
      </div>
    </div>
  )
}

export default RoomList