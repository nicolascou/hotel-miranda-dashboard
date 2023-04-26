import { createSlice } from '@reduxjs/toolkit'
import { getBookingList } from './getBookingList';
import { deleteBookingById } from './deleteBookingById';

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
    });
  }
})

export const bookingReducer = bookingSlice.reducer