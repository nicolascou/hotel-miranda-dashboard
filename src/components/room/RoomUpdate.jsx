import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateRoom } from '../../features/rooms/roomThunks';
import room3 from '../../img/rooms-3.jpg';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../partials/Loading';

const RoomUpdate = () => {
  const params = useParams();
  const { data, loading } = useSelector(state => state.room);
  const room = data.find(b => b.id === Number(params.id));
  
  // if (!room) {
  //   return (
  //     <>
  //       { loading ? <Loading /> : <h2>This room does not exist</h2> }
  //     </>
  //   )
  // }
  const [roomName, setRoomName] = useState(room.name);
  const [roomType, setRoomType] = useState(room.bed_type);
  const [roomPrice, setRoomPrice] = useState(room.rate);
  const [roomOffer, setRoomOffer] = useState(room.offer || Math.floor(room.rate / 1.5));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const room = {
      "name": roomName,
      "bed_type": roomType,
      "photo": room3,
      "rate": roomPrice,
      "offer": roomOffer,
      "amenities": ["Wifi", "Towels", "LED TV"],
      "status": "Available"
    }
    dispatch(updateRoom(room))
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
          <label htmlFor="price">Price</label>
          <input type="number" value={roomPrice} onChange={(e) => setRoomPrice(e.target.value)} />
        </div>
        <div>
          <label htmlFor="offer">Offer Price</label>
          <input type="number" id='offer' value={roomOffer} onChange={(e) => setRoomOffer(e.target.value)} />
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

export default RoomUpdate