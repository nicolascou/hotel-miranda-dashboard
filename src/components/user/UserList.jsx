import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../partials/Pagination';
import RemoveRow from '../partials/RemoveRow';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList, deleteUserById } from '../../features/users/userThunks';
import Loading from '../partials/Loading';
import { changeRoomsBy } from '../../utils/changeRoomsBy';

const UserList = () => {
  const { data, loading } = useSelector(state => state.user);
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [changeBy, setChangeBy] = useState('all');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getUserList());
    }
    setUsers(changeRoomsBy(changeBy, [...data]));
    setPagination(1);
    // eslint-disable-next-line
  }, [data, changeBy])

  useEffect(() => {
    let index = pagination === 1 ? 0 : (pagination-1)*10;
    setShowUsers(users.slice(index, index+10));
  }, [pagination, users])

  const handleDelete = (e, userId) => {
    dispatch(deleteUserById(userId));
    e.stopPropagation(e);
  }

  return (
    <div className='list'>
      <div className='list__top'>
        <ul className='list__top__menu'>
          <li className={`list__top__menu__item ${changeBy !== 'available' && changeBy !== 'booked' ? 'list__top__menu__item--active' : ''}`} 
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
          <p className='list__table__row__item weight-700'>Name</p>
          <p className='list__table__row__item weight-700'>Job Desk</p>
          <p className='list__table__row__item weight-700'>Schedule</p>
          <p className='list__table__row__item weight-700'>Contact</p>
          <p className='list__table__row__item weight-700'>Status</p>
        </div>
        <ul style={{ listStyle: 'none' }}>
          { loading && <Loading /> }
          {showUsers.map((user) => {
            return (
              <div key={user.id} onClick={() => navigate(`/rooms/${user.id}`)} className='list__table__row'>
                <div className='list__table__row__item'>
                  <img className='list__table__row__item__photo' src={user.photo} alt="" />
                  <div className='rooms__name'>
                    <p className='list__table__row__item__id'>#{user.id.toString().padStart(2, '0')}</p>
                    <p className='weight-500'>{user.name}</p>
                  </div>
                </div>
                <p className='list__table__row__item'>
                  AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi
                </p>
                <RemoveRow handleDelete={handleDelete} id={user.id} />
              </div> 
            )})}
        </ul>
      </div>
      <div className='list__bottom'>
        <p className='list__bottom__text'>Showing {showUsers.length} of 20 Data</p>
        <Pagination pagination={pagination} setPagination={setPagination} maxPage={users.length / 10 + .99} />
      </div>
    </div>
  )
}

export default UserList