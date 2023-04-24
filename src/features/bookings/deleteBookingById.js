import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteBookingById = createAsyncThunk(
  'booking/deleteBookingByIdStatus',
  async(bookingId, { getState }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          getState().booking.data.filter(({ id }) => id !== bookingId)
        );
      }, 200);
    });
  }
)