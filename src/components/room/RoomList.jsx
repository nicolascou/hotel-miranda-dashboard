import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Pagination from '../partials/Pagination';
import RemoveRow from '../partials/RemoveRow';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomList } from '../../features/rooms/getRoomList';
import { reorderRooms } from '../../features/rooms/roomSlice';

const RoomList = () => {
  const data = useSelector(state => state.room.data);
  const [showRooms, setShowRooms] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [orderBy, setOrderBy] = useState('number');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setShowRooms(data.slice(0, 10));

  }, [data])

  useEffect(() => {
    dispatch(getRoomList());
  }, [])

  useEffect(() => {
    let sortedRooms = [...data];
    if (orderBy === 'number') {
      sortedRooms = sortedRooms.sort((a, b) => a.id - b.id);
    } else if (orderBy === 'status') {
      sortedRooms = sortedRooms.sort((a, b) => {
        if (a.status === 'Available' && b.status === 'Booked') return -1;
        else if (a.status === 'Booked' && b.status === 'Available') return 1; 
        else return 0;
      })
    } else if (orderBy === 'price') {
      sortedRooms = sortedRooms.sort((a, b) => a.rate - b.rate);
    }
    dispatch(reorderRooms(sortedRooms));
    setPagination(1);
  }, [orderBy])

  useEffect(() => {
    let index = pagination === 1 ? 0 : (pagination-1)*10;
    setShowRooms(data.slice(index, index+10));

    // eslint-disable-next-line
  }, [pagination])

  return (
    <div className='list'>
      <div className='list__top'>
        <ul className='list__top__menu'>
          <li className={`list__top__menu__item list__top__menu__item--active`}
          >All Rooms</li>
          <li className={`list__top__menu__item`}
          >Available</li>
          <li className={`list__top__menu__item`}
          >Booked</li>
        </ul>
        <select className='list__top__select' value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
          <option className='list__top__select__text' value="number">Room number</option>
          <option className='list__top__select__text' value="status">Status</option>
          <option className='list__top__select__text' value="price">Price</option>
        </select>
      </div>
      <div className='list__table'>
        <div className='list__table__row list__table__row--first'>
          <p className='list__table__row__item weight-700'>Photo</p>
          <p className='list__table__row__item weight-700'>Room Name</p>
          <p className='list__table__row__item weight-700'>Room Type</p>
          <p className='list__table__row__item weight-700'>Amenities</p>
          <p className='list__table__row__item weight-700' style={{ justifyContent: 'center' }}>Price</p>
          <p className='list__table__row__item weight-700' style={{ justifyContent: 'center' }}>Offer</p>
          <p className='list__table__row__item weight-700'>Status</p>
        </div>
        <ul style={{ listStyle: 'none' }}>
          {showRooms.map((room) => {
            return (
              <div key={room.id} onClick={() => navigate(`/rooms/${room.id}`)} className='list__table__row'>
                <div className='list__table__row__item'>
                  <img className='rooms__photo' src={room.photo} alt="" />
                </div>
                <div className='list__table__row__item rooms__name'>
                  <p className='list__table__row__item__id'>#{room.id.toString().padStart(2, '0')}</p>
                  <p className='weight-500'>{room.name}</p>
                </div>
                <p className='list__table__row__item weight-500'>{room.bed_type}</p>
                <p className='list__table__row__item'>
                  AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi
                </p>
                <p className='list__table__row__item weight-500' style={{ justifyContent: 'center' }}>{room.rate}$<span className='rooms__night'>/night</span></p>
                <p className='list__table__row__item weight-500' style={{ justifyContent: 'center' }}>{Math.floor(room.rate / 1.5)}$<span className='rooms__night'>/night</span></p>
                <div className='list__table__row__item'>
                  <p className={`rooms__status 
                    ${room.status === 'Available' ? 'rooms__status--green' : 'rooms__status--red'}`}
                  >{room.status}</p>
                </div>
                <RemoveRow id={room.id} />
              </div> 
            )})}
        </ul>
      </div>
      <div className='list__bottom'>
        <p className='list__bottom__text'>Showing 10 of 20 Data</p>
        <Pagination pagination={pagination} setPagination={setPagination} maxPage={2} />
      </div>
    </div>
  )
}

export default RoomList