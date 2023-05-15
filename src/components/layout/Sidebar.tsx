import React, { useContext, useEffect, useState } from 'react';
import hotelIcon from '../../img/icons/hotel.svg';
import { Button } from './styled';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useAppSelector } from '../../app/hooks';
import { User } from '../../types/features';

interface ISidebar {
  hideSidebar: boolean;
}

const Sidebar: React.FC<ISidebar> = ({ hideSidebar }) => { 
  const location = useLocation();
  const route = location.pathname.split('/')[1];

  const { user, actions } = useContext(UserContext);

  const data = useAppSelector(state => state.user.data);
  useEffect(() => {
    const foundUser: User | undefined = data.find(({ username }) => username === user.username);
    setPhoto(foundUser?.photo || '');
    // eslint-disable-next-line
  }, [])

  const [name, setName] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [photo, setPhoto] = useState('');

  const [showEditUser, setShowEditUser] = useState(false);
  
  const handleEditUser = () => {
    actions?.updateUser(name, email);
    setShowEditUser(false);
  }
  
  return (
    <>
      <div className={`sidebar ${hideSidebar ? 'sidebar--hidden' : ''}`}>
        <div className='sidebar__logo'>
          <img width={45} height={45} src={hotelIcon} alt="" />
          <div style={{ textAlign: 'left', marginLeft: '20px' }}>
            <h1>travl</h1>
            <p>Hotel Admin Dashboard</p>
          </div>
        </div>
        <div style={{ padding: '30px' }}>
          <div className='sidebar__nav'>
            <div className={`sidebar__nav__box ${!route ? 'sidebar__nav__box--active' : ''}`}>
              <i className="fa-solid fa-table-columns"></i>
              <Link to='/'>Dashboard</Link>
            </div>
            <div className={`sidebar__nav__box ${route === 'rooms' ? 'sidebar__nav__box--active' : ''}`}>
              <i className='fa-solid fa-key'></i>
              <Link to='/rooms'>Room</Link>
            </div>
            <div className={`sidebar__nav__box ${route === 'bookings' ? 'sidebar__nav__box--active' : ''}`}>
              <i className="fa-regular fa-calendar-check"></i>
              <Link to='/bookings'>Bookings</Link>
            </div>
            <div className={`sidebar__nav__box ${route === 'users' ? 'sidebar__nav__box--active' : ''}`}>
              <i className="fa-solid fa-user"></i>
              <Link to='/users'>Users</Link>
            </div>
            <div className={`sidebar__nav__box ${route === 'contact' ? 'sidebar__nav__box--active' : ''}`}>
              <i className="fa-solid fa-puzzle-piece"></i>
              <Link to='/contact'>Contact</Link>
            </div>
          </div>
          <div className='sidebar__card'>
            <img className='sidebar__card__img' src={photo} alt="" />
            {
              showEditUser ? 
              <>
                <input type="text" className='sidebar__card__input' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" className='sidebar__card__input' value={email} onChange={(e) => setEmail(e.target.value)} />
                <Button onClick={() => handleEditUser() } className='sidebar__card__btn'>Save</Button>
              </>
              :
              <>
                <p className='sidebar__card__name'>{name}</p>
                <p className='sidebar__card__mail'>{email}</p>
                <Button onClick={() => setShowEditUser(true)} className='sidebar__card__btn'>Edit</Button>
              </>
            }
          </div>
          <div className='sidebar__rights'>
            <p className='sidebar__rights__bold'>Travl Hotel Admin Dashboard</p>
            <p>© 2020 All Rights Reserved</p>
            <p className='sidebar__rights__bottom-text'>Made with ♥ by Nicolás Cousillas</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar