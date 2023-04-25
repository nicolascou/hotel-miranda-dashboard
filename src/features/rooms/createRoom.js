import { createAsyncThunk } from "@reduxjs/toolkit";

export const createRoom = createAsyncThunk(
  'room/createRoomStatus',
  async(room) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(room);
      }, 200);
    });
  }
)