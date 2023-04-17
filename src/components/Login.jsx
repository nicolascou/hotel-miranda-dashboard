import React, { useState } from 'react'
import Dashboard from '../components/Dashboard';
import hotelIcon from '../img/icons/hotel.svg';

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
          <img width={100} height={100} src={hotelIcon} alt="" />
          <form method='post'>
            <input 
              value={userInput} onChange={e => setUserInput(e.target.value)} 
              type="text" name="user" id="user" 
            />
            <input 
              value={passwordInput} onChange={e => setPasswordInput(e.target.value)} 
              type="password" name="password" id="password" 
            />
            <button onClick={(e) => handleSubmit(e)} type='submit'>Log In</button>
          </form>
        </div>
      }
    </>
  )
}

export default Login