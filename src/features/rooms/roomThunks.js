import { createAsyncThunk } from "@reduxjs/toolkit";
import { roomsJson } from '../../data/rooms.js';

export const getRoomList = createAsyncThunk(
  'bookings/getRoomListStatus',
  async() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(roomsJson);
      }, 200);
    });
  }
)

export const getRoom = createAsyncThunk(
  'bookings/getRoomStatus',
  async(roomId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const room = roomsJson.find(({ id }) => id === roomId);
        resolve(room);
      }, 200);
    })
  }
)

export const deleteRoomById = createAsyncThunk(
  'booking/deleteRoomByIdStatus',
  async(roomId, { getState }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          getState().room.data.roomList.filter(({ id }) => id !== roomId)
        );
      }, 200);
    });
  }
)

export const createRoom = createAsyncThunk(
  'room/createRoomStatus',
  async(room, { getState }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const { roomList } = getState().room.data;
        room.id = roomList[roomList.length-1].id + 1;
        resolve(room);
      }, 200);
    });
  }
)

export const updateRoom = createAsyncThunk(
  'room/updateRoomStatus',
  async(updatedRoom, { getState }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const updatedRooms = getState().room.data.roomList.map((room) => {
          if (room.id === updatedRoom.id) {
            return updatedRoom;
          } else {
            return room;
          }
        });
        resolve(updatedRooms);
      }, 200);
    });
  }
)