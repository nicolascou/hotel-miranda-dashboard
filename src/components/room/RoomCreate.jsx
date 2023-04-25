import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createRoom } from '../../features/rooms/createRoom';
import room3 from '../../img/rooms-3.jpg';
import { useNavigate } from 'react-router-dom';

const RoomCreate = () => {
  const [offer, setOffer] = useState(false);
  const [roomName, setRoomName] = useState('default');
  const [roomType, setRoomType] = useState("Single Bed");
  const [roomPrice, setRoomPrice] = useState(100);
  const [roomDiscount, setRoomDiscount] = useState(10);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const room = {
      "name": roomName,
      "bed_type": roomType,
      "photo": room3,
      "rate": roomPrice,
      "offer": roomPrice * (1 - roomDiscount / 100),
      "amenities": ["Wifi", "Towels", "LED TV"],
      "status": "Available"
    }
    dispatch(createRoom(room))
    navigate('/rooms');
  }
  
  return (
    <div className='room-create'>
      <h2 className='room-create__title'>Add New Room</h2>
      <form className='room-create__form' onSubmit={(e) => handleSubmit(e)}>
        <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
          <option value="Single Bed">Single Bed</option>
          <option value="Double Bed">Double Bed</option>
          <option value="Double Luxury">Double Luxury</option>
        </select>
        <div>
          <label htmlFor="name">Room name</label>
          <input type="name" id='name' value={roomName} onChange={(e) => setRoomName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" cols="30" rows="10"></textarea>
        </div>
        <div>
          <label htmlFor="offerYes">Yes</label>
          <input type="radio" name='offer' id='offerYes' onChange={() => setOffer(true)} checked={offer} />
          <label htmlFor="offerNo">No</label>
          <input type="radio" name='offer' id='offerNo' onChange={() => setOffer(false)} checked={!offer} />
        </div>
        {
          offer &&
          <div>
            <label htmlFor="discount">Discount</label>
            <input type="number" id='discount' value={roomDiscount} onChange={(e) => setRoomDiscount(e.target.value)} />
          </div>
        }
        <div>
          <label htmlFor="price">Price</label>
          <input type="number" value={roomPrice} onChange={(e) => setRoomPrice(e.target.value)} />
        </div>
        <div>
          <label htmlFor="cancel">Cancellation Policy</label>
          <textarea cols="30" rows="10" id='cancel'></textarea>
        </div>
        <div>
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
        <button type='submit'>Create Room</button>
      </form>
    </div>
  )
}

export default RoomCreate