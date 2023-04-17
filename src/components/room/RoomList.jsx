import React from 'react'
import rooms from '../../data/rooms.json';

const RoomList = () => {

  return (
    <ul>
      {
        rooms.map((room) => (
          <li key={room.id}>{room.room_name}, { room.bed_type }, {room.amenities}, {room.room_floor}, {room.rate}, {room.status}</li>
        ))
      }
    </ul>
  )
}

export default RoomList