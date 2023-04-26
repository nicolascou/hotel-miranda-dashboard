import { createAsyncThunk } from "@reduxjs/toolkit";
import bookingsJson from '../../data/bookings.json';

export const getBookingList = createAsyncThunk(
  'booking/getBookingListStatus',
  async() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(bookingsJson);
      }, 200);
    });
  }
)