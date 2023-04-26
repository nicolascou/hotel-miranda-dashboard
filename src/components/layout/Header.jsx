import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Header = ({ hideSidebar, setHideSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { actions } = useContext(UserContext);
  
  const handleLogout = () => {
    actions.logout();
    navigate('/login');
  }
  
  
  return (
    <header className='header'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <i onClick={() => setHideSidebar(!hideSidebar)} className="fa-solid fa-bars-staggered header__hamburger"></i>
        <h2 className='header__title'>{location.pathname.split('/')[1] || 'Dashboard'}</h2>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <i className='header__icon fa-regular fa-envelope'></i>
        <i className='header__icon fa-regular fa-bell'></i>
        <div className='header__bar'></div>
        <i onClick={handleLogout} className='header__icon fa-solid fa-right-from-bracket'></i>
      </div>
    </header>
  )
}

export default Header