import { createSlice } from '@reduxjs/toolkit'
import { getBookingList, deleteBookingById, createBooking, updateBooking } from './bookingThunks';

const initialState = {
  data: [],
  status: 'idle',
  error: null
}

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getBookingList.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(getBookingList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'fulfilled';
    })

    .addCase(deleteBookingById.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(deleteBookingById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'fulfilled';
    })

    .addCase(createBooking.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(createBooking.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.status = 'fulfilled';
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