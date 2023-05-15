import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { updateBooking } from '../../features/bookings/bookingThunks';
import moment from 'moment';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Booking } from '../../types/features';

const BookingUpdate = () => {
  const { data } = useAppSelector(state => state.booking);
  const params = useParams();
  const booking = data.find((booking) => booking.id === Number(params.id));
  const formRef = useRef(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current && booking?.id) {
      const formData = new FormData(formRef.current);
      const newBooking: Booking = {
        ...booking,
        "guest": formData.get('full_name')?.toString(),
        "photo": formData.get('photo')?.toString(),
        "check_in": moment(formData.get('check_in')?.toString()).format('MMM Do, YYYY'),
        "check_out": moment(formData.get('check_out')?.toString()).format('MMM Do, YYYY'),
        "room_type": formData.get('room_type')?.toString(),
        "special_request": formData.get('special_request')?.toString(),
      }
      dispatch(updateBooking(newBooking))
      navigate('/bookings');
    }
  }
  
  return (
    <div className='create'>
      <h2 className='create__title'>Edit Booking</h2>
      <form ref={formRef} className='create__form' onSubmit={(e) => handleSubmit(e)}>
        <div className='create__form__grid'>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="full_name">Full name</label>
              <input name='full_name' type="text" id='full_name' defaultValue={booking?.guest} />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="photo">Photo Url</label>
              <input name='photo' type="text" id='photo' defaultValue={booking?.photo} />
            </div>
          </div>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="check_in">Check In</label>
              <input name='check_in' type="date" id='check_in' defaultValue={moment(booking?.check_in, 'MMM Do, YYYY').format('YYYY-MM-DD')} />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="check_out">Check Out</label>
              <input name='check_out' type="date" id='check_out' defaultValue={moment(booking?.check_out, 'MMM Do, YYYY').format('YYYY-MM-DD')} />
            </div>
          </div>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="room_type">Room Type</label>
              <select name='room_type' id='room_type' className='weight-600' defaultValue={booking?.room_type}>
                <option value={booking?.room_type}>{booking?.room_type}</option>
                <option value="Single Bed">Single Bed</option>
                <option value="Double Bed">Double Bed</option>
                <option value="Double Luxury">Double Luxury</option>
              </select>
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="special_request">Special Request</label>
              <textarea name='special_request' id="special_request" defaultValue={booking?.special_request} cols={30} rows={5}></textarea>
            </div>
          </div>
        </div>
        <button type='submit' className='create__form__btn'>Update Booking</button>
      </form>
    </div>
  )
}

export default BookingUpdate