import { createAsyncThunk } from "@reduxjs/toolkit";
import bookingsJson from '../../data/bookings.json';
import { Booking } from "../../types/features";

export const getBookingList = createAsyncThunk<Booking[], void, { rejectValue: Error }>(
  'booking/getBookingListStatus',
  async(_, { rejectWithValue }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(bookingsJson as Booking[]);
        }, 200);
      });
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
)

export const deleteBookingById = createAsyncThunk<Booking[], number, { state: any, rejectValue: Error }>(
  'booking/deleteBookingByIdStatus',
  async(bookingId, { getState, rejectWithValue }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            getState().booking.data.filter((booking: Booking) => booking.id !== bookingId)
          );
        }, 200);
      });
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
)

export const createBooking = createAsyncThunk<Booking, Booking, { state: any, rejectValue: Error }>(
  'booking/createBooking',
  async(booking, { getState, rejectWithValue }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          booking.id = getState().booking.data[getState().booking.data.length-1].id + 1;
          resolve(booking);
        }, 200);
      });
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
)

export const updateBooking = createAsyncThunk<Booking[], Booking, { state: any, rejectValue: Error }>(
  'booking/updateBooking',
  async(updatedBooking, { getState, rejectWithValue }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const updatedBookings = getState().booking.data.map((booking: Booking) => {
            if (booking.id === updatedBooking.id) {
              return updatedBooking;
            } else {
              return booking;
            }
          })
          resolve(updatedBookings);
        }, 200);
      });
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
)