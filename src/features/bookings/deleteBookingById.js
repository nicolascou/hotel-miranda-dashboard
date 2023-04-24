import { createAsyncThunk } from "@reduxjs/toolkit";
import bookingsJson from '../../data/bookings.json';

export const deleteBookingById = createAsyncThunk(
  'booking/deleteBookingByIdStatus',
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