import React, { useState } from 'react'
import Dashboard from '../components/Dashboard';
import hotelIcon from '../img/icons/hotel.svg';
import { Button } from './layout/styled';

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(localStorage.getItem('miranda-auth') === '1'));
  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput === 'hola' && passwordInput === '1234') {
      setIsAuthenticated(true);
      localStorage.setItem('miranda-auth', '1');
    }
  }
  
  return (
    <>
      {
      isAuthenticated ? <Dashboard /> :
        <div className='login'>
          <div className='login__card'>
            <div className='login__card__logo'>
              <img width={50} height={50} src={hotelIcon} alt="" />
              <div style={{ textAlign: 'left', marginLeft: '20px' }}>
                <h1>travl</h1>
                <p>Hotel Admin Dashboard</p>
              </div>
            </div>
            <form method='post' className='login__card__form'>
              <div className='login__card__form__box'>
                <label htmlFor="user">User:</label>
                <input className='login__card__form__input' 
                  value={userInput} onChange={e => setUserInput(e.target.value)} 
                  type="text" name="user" id="user" placeholder='hola'
                />
              </div> 
              <div className='login__card__form__box'>
                <label htmlFor="password">Password:</label>
                <input className='login__card__form__input' 
                  value={passwordInput} onChange={e => setPasswordInput(e.target.value)} 
                  type="password" name="password" id="password" placeholder='1234'
                />
              </div>    
              <Button onClick={(e) => handleSubmit(e)} type='submit'>Log In</Button>
            </form>
          </div>
        </div>
      }
    </>
  )
}

export default Login