import { createSlice } from '@reduxjs/toolkit'
import { getBookingList } from './getBookingList';
import { deleteBookingById } from './deleteBookingById';

const initialState = {
  data: [],
  status: 'idle'
}

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getBookingList.pending, (state, action) => {
      state.status = 'pending';
    })
    .addCase(getBookingList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'fulfilled';
    })
    .addCase(deleteBookingById.pending, (state, action) => {
      state.status = 'pending';
    })
    .addCase(deleteBookingById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'fulfilled';
    });
  }
})

export const bookingReducer = bookingSlice.reducer