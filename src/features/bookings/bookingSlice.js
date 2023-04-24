import { createSlice } from '@reduxjs/toolkit'
import { getBookingList } from './getBookingList';
import { deleteBookingById } from './deleteBookingById';

const initialState = {
  data: [],
  loading: 'idle'
}

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    reorderBookings: (state, action) => {
      state.data = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookingList.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = 'fulfilled';
      })
      .addCase(deleteBookingById.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = 'fulfilled';
      });
  }
})

export const { reorderBookings } = bookingSlice.actions
export const bookingReducer = bookingSlice.reducer