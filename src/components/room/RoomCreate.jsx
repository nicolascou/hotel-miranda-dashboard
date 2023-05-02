import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { createRoom } from '../../features/rooms/roomThunks';
import room3 from '../../img/rooms-3.jpg';
import { useNavigate } from 'react-router-dom';

const RoomCreate = () => {
  const [offer, setOffer] = useState(false);
  const formRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    console.log(formData.get('bed_type'));
    const room = {
      "name": formData.get('name'),
      "bed_type": formData.get('bed_type'),
      "photo": room3,
      "rate": formData.get('price'),
      "offer": formData.get('price') * (1 - formData.get('discount') / 100),
      "status": "Available"
    }
    dispatch(createRoom(room))
    navigate('/rooms');
  }
  
  return (
    <div className='create'>
      <h2 className='create__title'>Add New Room</h2>
      <form ref={formRef} className='create__form' onSubmit={(e) => handleSubmit(e)}>
        <div className='create__form__row'>
          <select name='bed_type' className='create__form__row__cell'>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Double Luxury">Double Luxury</option>
          </select>
          <div className='create__form__row__cell'>
            <label htmlFor="name">Room name</label>
            <input name='name' type="name" id='name' />
          </div>
        </div>
        <div className='create__form__row'>
          <div className='create__form__row__cell'>
            <label htmlFor="description">Description</label>
            <textarea name='description' id="description" cols="30" rows="10"></textarea>
          </div>
          <div className='create__form__row__second-col'>
            <div>
              <label htmlFor="offerYes">Yes</label>
              <input type="radio" name='offer' id='offerYes' onChange={() => setOffer(true)} checked={offer} />
              <label htmlFor="offerNo">No</label>
              <input type="radio" name='offer' id='offerNo' onChange={() => setOffer(false)} checked={!offer} />
            </div>
            {
              offer &&
              <div className='create__form__row__cell'>
                <label htmlFor="discount">Discount</label>
                <input name='discount' type="number" id='discount' />
              </div>
            }
            <div className='create__form__row__cell'>
              <label htmlFor="price">Price</label>
              <input name='price' type="number" />
            </div>
          </div>
        </div>
        <div className='create__form__row'>
          <div className='create__form__row__cell'>
            <label htmlFor="cancel">Cancellation Policy</label>
            <textarea name='cancellation' cols="30" rows="10" id='cancel'></textarea>
          </div>
          <div className='create__form__row__cell'>
            <label htmlFor="amenities">Amenities</label>
            <div>
              <div>
                <label htmlFor="shower">Shower</label>
                <input type="checkbox" id="shower" />
              </div>
              <div>
                <label htmlFor="ac">AC</label>
                <input type="checkbox" id="ac" />
              </div>
              <div>
                <label htmlFor="wifi">Wifi</label>
                <input type="checkbox" id="wifi" />
              </div>
              <div>
                <label htmlFor="ledtv">LED TV</label>
                <input type="checkbox" id="ledtv" />
              </div>
            </div>
          </div>
        </div>
        <button type='submit'>Create Room</button>
      </form>
    </div>
  )
}

export default RoomCreate