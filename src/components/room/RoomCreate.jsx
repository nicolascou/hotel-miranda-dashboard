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
    const room = {
      "name": formData.get('name'),
      "bed_type": formData.get('bed_type'),
      "photo": room3,
      "description": formData.get('description'),
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
        <div className='create__form__grid'>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="name">Room name</label>
              <input name='name' type="text" id='name' />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="price">Price</label>
              <input name='price' type="number" />
            </div>
            <div className='create__form__radio'>
              <i>Discount?</i>
              <label htmlFor="offerYes">Yes</label>
              <input type="radio" name='offer' id='offerYes' onChange={() => setOffer(true)} checked={offer} />
              <label htmlFor="offerNo">No</label>
              <input type="radio" name='offer' id='offerNo' onChange={() => setOffer(false)} checked={!offer} />
            </div>
            {
              offer &&
              <div className='create__form__column__cell'>
                <label className='weight-600' htmlFor="discount">Discount</label>
                <input name='discount' type="number" id='discount' />
              </div>
            }
            <select name='bed_type' className='create__form__column__cell weight-600'>
              <option value="Single Bed">Single Bed</option>
              <option value="Double Bed">Double Bed</option>
              <option value="Double Luxury">Double Luxury</option>
            </select>
            <div className='create__form__column__cell create__form__amenities'>
              <label className='weight-600' htmlFor="amenities">Amenities</label>
              <div>
                <div className='create__form__amenities__box'>
                  <label htmlFor="shower">Shower</label>
                  <input type="checkbox" id="shower" />
                </div>
                <div className='create__form__amenities__box'>
                  <label htmlFor="ac">AC</label>
                  <input type="checkbox" id="ac" />
                </div>
                <div className='create__form__amenities__box'>
                  <label htmlFor="wifi">Wifi</label>
                  <input type="checkbox" id="wifi" />
                </div>
                <div className='create__form__amenities__box'>
                  <label htmlFor="ledtv">LED TV</label>
                  <input type="checkbox" id="ledtv" />
                </div>
              </div>
            </div>
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

export default RoomCreate