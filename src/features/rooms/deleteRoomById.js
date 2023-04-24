import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteRoomById = createAsyncThunk(
  'booking/deleteRoomByIdStatus',
  async(bookingId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          bookingsJson.filter(({ id }) => id !== bookingId)
        );
      }, 200);
    });
  }
)