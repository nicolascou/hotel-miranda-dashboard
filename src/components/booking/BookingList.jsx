import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../partials/Pagination';
import RemoveRow from '../partials/RemoveRow';
import sortBookingsBy from '../../utils/sortBookingsBy';
import { useDispatch, useSelector } from 'react-redux';
import { getBookingList, deleteBookingById } from '../../features/bookings/bookingThunks';
import Loading from '../partials/Loading';

const BookingList = () => {
  const { data, status } = useSelector(state => state.booking);
  const [bookings, setBookings] = useState([]);
  const [showBookings, setShowBookings] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [orderBy, setOrderBy] = useState('order_date');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getBookingList());
    }
    setBookings(sortBookingsBy(orderBy, [...data]));
    setPagination(1);
    // eslint-disable-next-line
  }, [data, orderBy])

  useEffect(() => {
    let index = pagination === 1 ? 0 : (pagination-1)*10;
    setShowBookings(bookings.slice(index, index+10));
  }, [pagination, bookings])

  const showNotes = (e) => {
    e.target.nextElementSibling.style.display = 'block';
    e.stopPropagation();
  }
  const hideNotes = (e) => {
    e.target.style.display = 'none';
    e.stopPropagation(e);
  }

  const handleDelete = (e, bookingId) => {
    dispatch(deleteBookingById(bookingId));
    e.stopPropagation(e);
  }
  
  return (
    <div className='list'>
      <div className='list__top'>
        <ul className='list__top__menu'>
          <li onClick={() => setOrderBy('order_date')}
            className={`list__top__menu__item ${orderBy === 'order_date' || orderBy === 'guest' ? 'list__top__menu__item--active' : ''}`}
          >All Bookings</li>
          <li onClick={() => setOrderBy('check_in')}
            className={`list__top__menu__item ${orderBy === 'check_in' ? 'list__top__menu__item--active' : ''}`}
          >Checking In</li>
          <li onClick={() => setOrderBy('check_out')}
            className={`list__top__menu__item ${orderBy === 'check_out' ? 'list__top__menu__item--active' : ''}`}
          >Checking Out</li>
          <li onClick={() => setOrderBy('progress')}
            className={`list__top__menu__item ${orderBy === 'progress' ? 'list__top__menu__item--active' : ''}`}
          >In Progress</li>
        </ul>
        <div className='d-flex-center'>
          <Link to='/bookings/create' className='list__top__new-room'>New Booking +</Link>
          <select className='list__top__select' value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
            <option className='list__top__select__text' value="order_date">Order Date</option>
            <option className='list__top__select__text' value="guest">Guest</option>
            <option className='list__top__select__text' value="check_in">Check In</option>
            <option className='list__top__select__text' value="check_out">Check Out</option>
          </select>
        </div>
      </div>
      <div className='list__table'>
        <div className='list__table__row list__table__row--first'>
          <p className='list__table__row__item'>Guest</p>
          <p className='list__table__row__item'>Order Date</p>
          <p className='list__table__row__item'>Check In</p>
          <p className='list__table__row__item'>Check Out</p>
          <p className='list__table__row__item'>Special Request</p>
          <p className='list__table__row__item'>Room type</p>
          <p className='list__table__row__item'>Status</p>
        </div>
        <ul style={{ listStyle: 'none' }}>
          { status === 'pending' && <Loading /> }
          { 
            showBookings.length === 0 && <p className='list__table__nothing'>Nothing to show here</p>
          }
          { showBookings.map((b) => {
            let statusClassMap = {
              'Check In': 'list__table__row__item__status--green',
              'Check Out': 'list__table__row__item__status--red',
              'In Progress': 'list__table__row__item__status--yellow'
            }
        
            return (  
              <div key={b.id} onClick={() => navigate(`/bookings/${b.id}`)} className='list__table__row'>
                <div className='list__table__row__item'>
                  <img src={b.photo} alt='' className='list__table__row__item__photo'></img>
                  <div>
                    <p className='weight-500'>{b.guest}</p>
                    <p className='list__table__row__item__id'>{b.guest_id}</p>
                  </div>
                </div>
                <p className='list__table__row__item'>{b.order_date}</p>
                <div className='list__table__row__item' style={{ flexDirection: 'column' }}>
                  <p className='weight-500'>{b.check_in}</p>
                  <p className='small-text'>12.00 PM</p>
                </div>
                <div className='list__table__row__item' style={{ flexDirection: 'column' }}>
                  <p className='weight-500'>{b.check_out}</p>
                  <p className='small-text'>9.00AM</p>
                </div>
                <div className='list__table__row__item'>
                  <button onClick={(e) => showNotes(e)} className='list__table__row__item__btn'>View Notes</button>
                  <div className='list__notes-modal-wrapper' onClick={(e) => hideNotes(e)}>
                    <div className='list__notes-modal' onClick={(e) => e.stopPropagation() }>
                      <p>{b.special_request || 'No special requests'}</p>
                    </div>
                  </div>
                </div>
                <p className='list__table__row__item weight-500'>{b.room_type}</p>
                <div className='list__table__row__item'>
                  <p className={`list__table__row__item__status ${statusClassMap[b.status]}`}>
                    {b.status}
                  </p>
                </div>
                <RemoveRow handleDelete={handleDelete} id={b.id} />
              </div> 
            )})}
        </ul>
      </div>
      <div className='list__bottom'>
        <p className='list__bottom__text'>Showing {showBookings.length} of {data.length} Data</p>
        <Pagination pagination={pagination} setPagination={setPagination} maxPage={bookings.length / 10 + 1} />
      </div>
    </div>
  )
}

export default BookingList