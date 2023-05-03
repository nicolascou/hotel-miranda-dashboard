import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../../features/users/userThunks';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const UserCreate = () => {
  const formRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const user = {
      "full_name": formData.get('full_name'),
      "username": formData.get('username'),
      "position": formData.get('position'),
      "email": formData.get('email'),
      "phone": formData.get('phone'),
      "description": formData.get('description'),
      "start_date": moment().format('YYYY-MM-DD'),
      "state": formData.get('state'),
      "password": formData.get('password')
    }
    dispatch(createUser(user))
    navigate('/users');
  }
  
  return (
    <div className='create'>
      <h2 className='create__title'>Add New Room</h2>
      <form ref={formRef} className='create__form' onSubmit={(e) => handleSubmit(e)}>
        <div className='create__form__grid'>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="name">Room name</label>
              <input name='name' type="name" id='name' />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="price">Price</label>
              <input name='price' type="number" />
            </div>
            <select name='bed_type' className='create__form__column__cell weight-600'>
              <option value="Single Bed">Single Bed</option>
              <option value="Double Bed">Double Bed</option>
              <option value="Double Luxury">Double Luxury</option>
            </select>
          </div>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="description">Description</label>
              <textarea name='description' id="description" cols="30" rows="10"></textarea>
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="cancel">Cancellation Policy</label>
              <textarea name='cancellation' cols="30" rows="10" id='cancel'></textarea>
            </div>
          </div>
        </div>
        <button type='submit' className='create__form__btn'>Create Room</button>
      </form>
    </div>
  )
}

export default UserCreate