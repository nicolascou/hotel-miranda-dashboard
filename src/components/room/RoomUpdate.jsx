import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateRoom } from '../../features/rooms/roomThunks';
import room3 from '../../img/rooms-3.jpg';
import { useNavigate, useParams } from 'react-router-dom';

const RoomUpdate = () => {
  const params = useParams();
  const { data } = useSelector(state => state.room);
  const room = data.roomList.find(({ id }) => id === Number(params.id));
  
  const formRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const room = {
      "id": Number(params.id),
      "name": formData.get('name'),
      "bed_type": formData.get('bed_type'),
      "photo": room3,
      "rate": formData.get('price'),
      "offer": formData.get('offer'),
      "description": formData.get('description'),
      "amenities": ["Wifi", "Towels", "LED TV"],
      "status": "Available",
    }
    dispatch(updateRoom(room))
    navigate('/rooms');
  }
  
  return (
    <div className='create'>
      <h2 className='create__title'>Edit Room</h2>
      <form ref={formRef} className='create__form' onSubmit={(e) => handleSubmit(e)}>
        <div className='create__form__grid'>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="name">Room name</label>
              <input name='name' type="name" id='name' defaultValue={room.name} />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="price">Price</label>
              <input name='price' type="number" defaultValue={room.rate} />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="offer">Offer Price</label>
              <input name='offer' type="number" id='offer' defaultValue={room.offer || Math.floor(room.rate / 1.5)} />
            </div>
            <select name='bed_type' className='create__form__column__cell weight-600' defaultValue={room.bed_type}>
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
              <textarea name='description' id="description" cols="30" rows="10" defaultValue={room.description || ''}></textarea>
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="cancel">Cancellation Policy</label>
              <textarea name='cancellation' cols="30" rows="10" id='cancel'></textarea>
            </div>
          </div>
        </div>
        <button className='create__form__btn' type='submit'>Update Room</button>
      </form>
    </div>
  )
}

export default RoomUpdate