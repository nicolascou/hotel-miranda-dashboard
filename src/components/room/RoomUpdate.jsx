import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateRoom } from '../../features/rooms/roomThunks';
import room3 from '../../img/rooms-3.jpg';
import { useNavigate, useParams } from 'react-router-dom';

const RoomUpdate = () => {
  const params = useParams();
  const { data } = useSelector(state => state.room);
  const room = data.roomList.find(({ id }) => id === Number(params.id));
  
  const [roomName, setRoomName] = useState(room.name);
  const [roomType, setRoomType] = useState(room.bed_type);
  const [roomPrice, setRoomPrice] = useState(room.rate);
  const [roomOffer, setRoomOffer] = useState(room.offer || Math.floor(room.rate / 1.5));
  const [roomDescription, setRoomDescription] = useState(room.description || '');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const room = {
      "id": Number(params.id),
      "name": roomName,
      "bed_type": roomType,
      "photo": room3,
      "rate": roomPrice,
      "offer": roomOffer,
      "description": roomDescription,
      "amenities": ["Wifi", "Towels", "LED TV"],
      "status": "Available",
    }
    dispatch(updateRoom(room))
    navigate('/rooms');
  }
  
  return (
    <div className='create'>
      <h2 className='create__title'>Edit Room</h2>
      <form className='create__form' onSubmit={(e) => handleSubmit(e)}>
        <div className='create__form__row'>
          <select className='create__form__row__cell' value={roomType} onChange={(e) => setRoomType(e.target.value)}>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Double Luxury">Double Luxury</option>
          </select>
          <div className='create__form__row__cell'>
            <label htmlFor="name">Room name</label>
            <input type="name" id='name' value={roomName} onChange={(e) => setRoomName(e.target.value)} />
          </div>
        </div>
        <div className='create__form__row'>
          <div className='create__form__row'>
            <div className='create__form__row__cell'>
              <label htmlFor="description">Description</label>
              <textarea id="description" cols="30" rows="10" value={roomDescription} onChange={(e) => setRoomDescription(e.target.value)}></textarea>
            </div>
          </div>
          <div className='create__form__row__second-col'>
            <div className='create__form__row__cell'>
              <label htmlFor="price">Price</label>
              <input type="number" value={roomPrice} onChange={(e) => setRoomPrice(e.target.value)} />
            </div>
            <div className='create__form__row__cell'>
              <label htmlFor="offer">Offer Price</label>
              <input type="number" id='offer' value={roomOffer} onChange={(e) => setRoomOffer(e.target.value)} />
            </div>
          </div>
        </div>
        <div className='create__form__row'>
          <div className='create__form__row__cell'>
            <label htmlFor="cancel">Cancellation Policy</label>
            <textarea cols="30" rows="10" id='cancel'></textarea>
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
        <button type='submit'>Update Room</button>
      </form>
    </div>
  )
}

export default RoomUpdate