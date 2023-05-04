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

export const createBooking = createAsyncThunk(
  'booking/createBooking',
  async(booking, { getState }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        booking.id = getState().booking.data[getState().booking.data.length-1].id + 1;
        resolve(booking);
      }, 200);
    });
  }
)

export const updateBooking = createAsyncThunk(
  'booking/updateBooking',
  async(updatedBooking, { getState }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const updatedBookings = getState().booking.data.map((booking) => {
          if (booking.id === updatedBooking.id) {
            return updatedBooking;
          } else {
            return booking;
          }
        })
        resolve(updatedBookings);
      }, 200);
    });
  }
)