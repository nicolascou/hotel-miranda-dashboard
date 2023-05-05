import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createBooking } from '../../features/bookings/bookingThunks';
import moment from 'moment';

const BookingCreate = () => {
  const formRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const booking = {
      "guest": formData.get('full_name'),
      "guest_id": Math.floor(Math.random() * 100000000).toString().padStart(8, '0'),
      "photo": formData.get('photo'),
      "order_date": moment().format('MMM Do, YYYY'),
      "check_in": formData.get('check_in'),
      "check_out": formData.get('check_out'),
      "room_type": formData.get('room_type'),
      "special_request": formData.get('special_request'),
      "status": "In Progress"
    }
    dispatch(createBooking(booking))
    navigate('/bookings');
  }
  
  return (
    <div className='create'>
      <h2 className='create__title'>Add New Booking</h2>
      <form ref={formRef} className='create__form' onSubmit={(e) => handleSubmit(e)}>
        <div className='create__form__grid'>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="full_name">Full name</label>
              <input name='full_name' type="text" id='full_name' />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="photo">Photo Url</label>
              <input name='photo' type="text" id='photo' />
            </div>
          </div>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="check_in">Check In</label>
              <input name='check_in' type="date" id='check_in' />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="check_out">Check Out</label>
              <input name='check_out' type="date" id='check_out' />
            </div>
          </div>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="room_type">Room Type</label>
              <select name='room_type' id='room_type' className='weight-600'>
                <option value="Single Bed">Single Bed</option>
                <option value="Double Bed">Double Bed</option>
                <option value="Double Luxury">Double Luxury</option>
              </select>
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="special_request">Special Request</label>
              <textarea name='special_request' id="special_request" cols="30" rows="5"></textarea>
            </div>
          </div>
        </div>
        <button type='submit' className='create__form__btn'>Create Booking</button>
      </form>
    </div>
  )
}

export default BookingCreate