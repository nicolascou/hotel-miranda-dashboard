import { createAsyncThunk } from "@reduxjs/toolkit";

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