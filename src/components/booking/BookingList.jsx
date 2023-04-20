import React, { useEffect, useState } from 'react';
import bookings_json from '../../data/bookings.json';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import Pagination from '../Pagination';

const BookingList = () => {
  const [bookings, setBookings] = useState(bookings_json);
  const [sliceBookings, setSliceBookings] = useState(bookings.slice(0, 7));
  const [pagination, setPagination] = useState(1);
  const [orderBy, setOrderBy] = useState('guest');
  const [filterBy, setFilterBy] = useState('all');

  const navigate = useNavigate();

  const changeOrder = (e) => {
    setOrderBy(e.target.value);
  }

  const showNotes = (e) => {
    e.target.nextElementSibling.style.display = 'block';
    e.stopPropagation();
  }
  const hideNotes = (e) => {
    e.target.style.display = 'none';
    e.stopPropagation(e);
  }

  useEffect(() => {
    if (orderBy === 'guest') {
      setBookings(bookings_json.sort((a, b) => {
        if (a.guest < b.guest) return -1;
        if (a.guest > b.guest) return 1;
        return 0;
      }))

    } else if (orderBy === 'order_date') {
      setBookings(bookings_json.sort((a, b) => {
        const dateA = moment(a.order_date, "MMM Do YYYY hh:mm A").toDate();
        const dateB = moment(b.order_date, "MMM Do YYYY hh:mm A").toDate();
        
        if (dateA < dateB) return -1;
        if (dateA > dateB) return 1;
        return 0;
      }))

    } else if (orderBy === 'check_in') {
      setBookings(bookings_json.sort((a, b) => {
        const dateA = moment(a.check_in, "MMM Do, YYYY").toDate();
        const dateB = moment(b.check_in, "MMM Do, YYYY").toDate();
        
        if (dateA < dateB) return -1;
        if (dateA > dateB) return 1;
        return 0;
      }))
    } else if (orderBy === 'check_out') {
      setBookings(bookings_json.sort((a, b) => {
        const dateA = moment(a.check_out, "MMM Do, YYYY").toDate();
        const dateB = moment(b.check_out, "MMM Do, YYYY").toDate();
        
        if (dateA < dateB) return -1;
        if (dateA > dateB) return 1;
        return 0;
      }))
    }
    setSliceBookings(bookings_json.slice(0, 7))
  }, [orderBy])

  useEffect(() => {
    let index = pagination === 1 ? 0 : (pagination-1)*7+1;
    setSliceBookings(bookings.slice(index, index+7));

    // eslint-disable-next-line
  }, [pagination])

  useEffect(() => {
    if (filterBy === 'all') {
      setOrderBy('guest');
    } else if (filterBy === 'check_in' || filterBy === 'check_out') {
      setOrderBy(filterBy);
    } else {
      setBookings(bookings_json.filter((b) => {
        const dateA = moment(b.check_in, "MMM Do, YYYY").toDate();
        const dateB = moment(b.check_out, "MMM Do, YYYY").toDate();
        
        if (dateA < Date.now() && dateB > Date.now()) return b
      }))
    }
  }, [filterBy])

  useEffect(() => setSliceBookings(bookings.slice(0, 7)), [bookings])

  return (
    <div className='bookings'>
      <div className='bookings__top'>
        <ul className='bookings__top__menu'>
          <li onClick={() => setFilterBy('all')}
            className={`bookings__top__menu__item ${filterBy === 'all' ? 'bookings__top__menu__item--active' : ''}`}
          >All Bookings</li>
          <li onClick={() => setFilterBy('check_in')}
            className={`bookings__top__menu__item ${filterBy === 'check_in' ? 'bookings__top__menu__item--active' : ''}`}
          >Checking In</li>
          <li onClick={() => setFilterBy('check_out')}
            className={`bookings__top__menu__item ${filterBy === 'check_out' ? 'bookings__top__menu__item--active' : ''}`}
          >Checking Out</li>
          <li onClick={() => setFilterBy('progress')}
            className={`bookings__top__menu__item ${filterBy === 'progress' ? 'bookings__top__menu__item--active' : ''}`}
          >In Progress</li>
        </ul>
        <select className='bookings__top__select' value={orderBy} onChange={(e) => changeOrder(e)}>
          <option className='bookings__top__select__text' value="guest">Guest</option>
          <option className='bookings__top__select__text' value="order_date">Order Date</option>
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
                  <p className={`bookings__table__row__item__status ${statusClass}`}>
                    {b.status}
                  </p>
                </div>
                <i onClick={(e) => e.stopPropagation()} className='fa-solid fa-ellipsis-vertical bookings__table__row__ellipsis'></i>
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

export default BookingList