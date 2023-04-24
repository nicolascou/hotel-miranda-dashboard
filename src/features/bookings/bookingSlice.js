import { createSlice } from '@reduxjs/toolkit'
import { getBookingList } from './getBookingList';

const initialState = {
  data: [],
  loading: 'idle'
}

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookingList.fulfilled, (state, action) => {
        state.data = [...action.payload];
        state.loading = 'fulfilled';
      })
      .addCase(deleteBookingById.fulfilled, (state, action) => {
        state.data = [...action.payload];
        state.loading = 'fulfilled';
      });
  }
})

export const bookingReducer = bookingSlice.reducer