import React, { useEffect, useState } from 'react';
import bookings_json from '../../data/bookings.json';
import { useNavigate } from 'react-router-dom';
import sort from 'array-sort';

const BookingList = () => {
  const [bookings, setBookings] = useState(bookings_json);
  const [sliceBookings, setSliceBookings] = useState(bookings.slice(0, 8));
  const [pagination, setPagination] = useState(1);
  const [orderBy, setOrderBy] = useState('guest');
  const [filterBy, setFilterBy] = useState('all');

  const navigate = useNavigate();

  const handlePagination = (page) => {
    if (page <= 0 || bookings.length < page*8) {
      return
    } else {
      setPagination(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
    let index = pagination === 1 ? 0 : (pagination-1)*7+1;
    setSliceBookings(bookings.slice(index, index+8));
  }, [pagination])

  useEffect(() => {
    if (orderBy === 'guest') {
      setBookings(sort(bookings_json, 'guest'));
    } else if (orderBy === 'order_date') {
      setBookings(sort(bookings_json, 'order_date'));
    } else if (orderBy === 'check_in') {
      setBookings(sort(bookings_json, 'check_in'));
    }
    
  }, [orderBy])

  useEffect(() => setSliceBookings(bookings.slice(0, 8)), []); 
  
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