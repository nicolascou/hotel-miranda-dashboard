import { createSlice } from '@reduxjs/toolkit'
import { getBookingList, deleteBookingById, createBooking, updateBooking } from './bookingThunks';

const initialState = {
  data: [],
  loading: false,
  error: null
}

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getBookingList.pending, (state) => {
      state.loading = true;
    })
    .addCase(getBookingList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    })

    .addCase(deleteBookingById.pending, (state) => {
      state.loading = true;
    })
    .addCase(deleteBookingById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    })

    .addCase(createBooking.pending, (state) => {
      state.loading = true;
    })
    .addCase(createBooking.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.loading = false;
    })
    
    .addCase(updateBooking.pending, (state) => {
      state.loading = true;
    })
    .addCase(updateBooking.fulfilled, (state, action) => {
      state.data = state.data.map((booking) => {
        if (booking.id === action.payload.id) {
          return action.payload;
        } else {
          return booking;
        }
      });
      state.loading = false;
    })
  }
})

export const bookingReducer = bookingSlice.reducer