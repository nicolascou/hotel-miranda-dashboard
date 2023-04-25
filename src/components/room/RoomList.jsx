import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../partials/Pagination';
import RemoveRow from '../partials/RemoveRow';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomList } from '../../features/rooms/getRoomList';
import { deleteRoomById } from '../../features/rooms/deleteRoomById';
import { changeRoomsBy } from '../../utils/changeRoomsBy';

const RoomList = () => {
  const data = useSelector(state => state.room.data);
  const [rooms, setRooms] = useState([]);
  const [showRooms, setShowRooms] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [changeBy, setChangeBy] = useState('all');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getRoomList());
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setRooms(changeRoomsBy(changeBy, [...data]));
    setPagination(1);
  }, [data, changeBy])

  useEffect(() => {
    let index = pagination === 1 ? 0 : (pagination-1)*10;
    setShowRooms(rooms.slice(index, index+10));
  }, [pagination, rooms])

  const handleDelete = (e, roomId) => {
    dispatch(deleteRoomById(roomId));
    e.stopPropagation(e);
  }

  return (
    <div className='list'>
      <div className='list__top'>
        <ul className='list__top__menu'>
          <li className={`list__top__menu__item ${changeBy === 'all' ? 'list__top__menu__item--active' : ''}`} 
            onClick={() => setChangeBy('all')}
          >All Rooms</li>
          <li className={`list__top__menu__item ${changeBy === 'available' ? 'list__top__menu__item--active' : ''}`} 
            onClick={() => setChangeBy('available')}
          >Available</li>
          <li className={`list__top__menu__item ${changeBy === 'booked' ? 'list__top__menu__item--active' : ''}`} 
            onClick={() => setChangeBy('booked')}
          >Booked</li>
        </ul>
        <div className='d-flex-center'>
          <Link to='/rooms/create' className='rooms__new-room'>New Room +</Link>
          <select className='list__top__select' value={changeBy} onChange={(e) => setChangeBy(e.target.value)}>
            <option className='list__top__select__text' value="number">Room number</option>
            <option className='list__top__select__text' value="status">Status</option>
            <option className='list__top__select__text' value="price">Price</option>
          </select>
        </div>
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
                <p className='list__table__row__item weight-500 rooms__price'>
                  {room.rate}$
                  <span className='rooms__night'>/night
                  </span>
                </p>
                <p className='list__table__row__item weight-500 rooms__offer'>
                  {room.discount / 100 * room.rate || Math.floor(room.rate / 1.5)}$
                  <span className='rooms__night'>/night
                  </span>
                </p>
                <div className='list__table__row__item'>
                  <p className={`rooms__status 
                    ${room.status === 'Available' ? 'rooms__status--green' : 'rooms__status--red'}`}
                  >{room.status}</p>
                </div>
                <RemoveRow handleDelete={handleDelete} id={room.id} />
              </div> 
            )})}
        </ul>
      </div>
      <div className='list__bottom'>
        <p className='list__bottom__text'>Showing {showRooms.length} of 20 Data</p>
        <Pagination pagination={pagination} setPagination={setPagination} maxPage={rooms.length / 10 + .99} />
      </div>
    </div>
  )
}

export default RoomList