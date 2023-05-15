import React, { useContext, useState, useEffect } from 'react'
import hotelIcon from '../img/icons/hotel.svg';
import { Button } from './layout/styled';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { getUserList } from '../features/users/userThunks';
import { useAppDispatch, useAppSelector } from '../app/hooks';

const Login: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const navigate = useNavigate();
  const { actions } = useContext(UserContext);
  const { data, status } = useAppSelector(state => state.user);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const user = data.find(({ username }) => username === userInput);
    if (user && passwordInput === user.password) {
      actions?.login(user.username || '', user.email || '');
      navigate('/');
    } else if (status !== 'pending') {
      alert('Invalid Credentials');
    }
  }

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(getUserList());
    }
    // eslint-disable-next-line
  }, [])
  
  return (
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
              type="text" name="user" id="user" placeholder='nico' data-cy="user-test"
            />
          </div> 
          <div className='login__card__form__box'>
            <label htmlFor="password">Password:</label>
            <input className='login__card__form__input' 
              value={passwordInput} onChange={e => setPasswordInput(e.target.value)} 
              type="password" name="password" id="password" placeholder='1234' data-cy="password-test"
            />
          </div> 
          <Button backgroundColor='#E23428' color='white' data-cy="login-test" 
            onClick={(e) => handleSubmit(e)} type='submit'>Log In</Button>
        </form>
      </div>
    </div>
  )
}

export default Login