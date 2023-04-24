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