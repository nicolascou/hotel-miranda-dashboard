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
          getState().room.data.filter(({ id }) => id !== roomId)
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
        room.id = getState().room.data[getState().room.data.length-1].id + 1;
        resolve(room);
      }, 200);
    });
  }
)

export const updateRoom = createAsyncThunk(
  'room/updateRoomStatus',
  async(room) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(room);
      }, 200);
    });
  }
)