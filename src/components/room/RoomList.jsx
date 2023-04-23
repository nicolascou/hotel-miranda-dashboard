import React, { useEffect, useState } from 'react'
import { roomsJson } from '../../data/rooms';
import { useNavigate } from 'react-router-dom';
import sortBookingsBy from '../../utils/sortBookingsBy';
import Pagination from '../partials/Pagination';
import RemoveRow from '../partials/RemoveRow';

const RoomList = () => {
  const [rooms, setRooms] = useState(roomsJson);
  const [sliceRooms, setSliceRooms] = useState(rooms.slice(0, 7));
  const [pagination, setPagination] = useState(1);
  const [orderBy, setOrderBy] = useState('order_date');

  const navigate = useNavigate();

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
          <p className='bookings__table__row__item'>Room Name</p>
          <p className='bookings__table__row__item'>Room Type</p>
          <p className='bookings__table__row__item'>Amenities</p>
          <p className='bookings__table__row__item'>Price</p>
          <p className='bookings__table__row__item'>Offer</p>
          <p className='bookings__table__row__item'>Status</p>
        </div>
        <ul style={{ listStyle: 'none' }}>
          {sliceRooms.map((room) => {
            let statusClassMap = {
              'Check In': 'bookings__table__row__item__status--green',
              'Check Out': 'bookings__table__row__item__status--red',
              'In Progress': 'bookings__table__row__item__status--yellow'
            }
        
            return (  
              <div key={room.id} onClick={() => navigate(`/rooms/${room.id}`)} className='bookings__table__row'>
                <div className='bookings__table__row__item'>
                  <img className='rooms__photo' src={room.photo} alt="fdsa" />
                  <div>
                    <p className='bookings__table__row__item__id'>#0001</p>
                    <p className='weight-500'>{room.name}</p>
                  </div>
                </div>
                <p className='bookings__table__row__item weight-500'>{room.bed_type}</p>
                <p className='bookings__table__row__item weight-500'>
                  {room.amenities.map((a) => a + ', ')} Coffee Set, AC, Extra Pillows
                </p>
                <p className='bookings__table__row__item weight-500'>{room.rate}</p>
                <p className='bookings__table__row__item weight-500'>{Math.floor(room.rate / 1.5)}</p>
                <p className='bookings__table__row__item weight-500'>{room.status}</p>
                <RemoveRow id={room.id} />
              </div> 
            )})}
        </ul>
      </div>
      <div className='bookings__bottom'>
        <p className='bookings__bottom__text'>Showing 7 of 102 Data</p>
        <Pagination pagination={pagination} setPagination={setPagination} bookingsLength={rooms.length} />
      </div>
    </div>
  )
}

export default RoomList