import { createSlice } from '@reduxjs/toolkit'
import { getBookingList, deleteBookingById, createBooking, updateBooking } from './bookingThunks';
import { Booking, Status } from '../../types/features';

interface BookingState {
  data: Booking[];
  status: Status;
  error: Error | undefined;
}

const initialState = {
  data: [],
  status: 'idle',
  error: undefined
} as BookingState;

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getBookingList.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(getBookingList.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(getBookingList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'fulfilled';
    })

    .addCase(deleteBookingById.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(deleteBookingById.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(deleteBookingById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'fulfilled';
    })

    .addCase(createBooking.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(createBooking.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(createBooking.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.status = 'fulfilled';
    })
    
    .addCase(updateBooking.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(updateBooking.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(updateBooking.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'fulfilled';
    })
  }
})

export const bookingReducer = bookingSlice.reducer