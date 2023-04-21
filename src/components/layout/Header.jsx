import React from 'react'
import profilePic from '../../img/profile-pic.jpg';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = ({ hideSidebar, setHideSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('auth-miranda');
    navigate('/login');
  }
  
  return (
    <header className='header'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <i onClick={() => setHideSidebar(!hideSidebar)} className="fa-solid fa-bars-staggered header__hamburger"></i>
        <h2 className='header__title'>{location.pathname.split('/')[1] || 'Dashboard'}</h2>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className='header__search'>
          <input type="text" />
          <i className='fa-solid fa-search'></i>
        </div>
        <i className='header__icon fa-regular fa-envelope'></i>
        <i className='header__icon fa-regular fa-bell'></i>
        <img className='header__img' src={profilePic} alt="profile" />
        <div className='header__bar'></div>
        <i onClick={handleLogout} className='header__icon fa-solid fa-right-from-bracket'></i>
      </div>
    </header>
  )
}

export default Header