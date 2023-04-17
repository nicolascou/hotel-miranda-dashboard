import React from 'react'
import profilePic from '../../img/profile-pic.jpg';

const Header = () => {
  return (
    <header className='header'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <i className="fa-solid fa-bars-staggered header__hamburger"></i>
        <h2 className='header__title'>Dashboard</h2>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className='header__search'>
          <input type="text" />
          <i className='fa-solid fa-search'></i>
        </div>
        <i className='header__icon fa-regular fa-heart'></i>
        <i className='header__icon fa-regular fa-envelope'></i>
        <i className='header__icon fa-regular fa-bell'></i>
        <i className='header__icon fa-regular fa-comment-dots'></i>
        <img className='header__img' src={profilePic} alt="profile" />
        <div className='header__bar'></div>
        <div className='header__language'>
          <p>EN</p>
          <i className='fa-solid fa-angle-down'></i>
        </div>
      </div>
    </header>
  )
}

export default Header