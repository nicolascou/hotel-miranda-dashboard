import { createAsyncThunk } from "@reduxjs/toolkit";

export const createRoom = createAsyncThunk(
  'room/createRoomStatus',
  async(room, { getState }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        room.id = getState().room.data.length + 1;
        resolve(room);
      }, 200);
    });
  }
)