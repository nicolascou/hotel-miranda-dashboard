import { createSlice } from '@reduxjs/toolkit'
import { getRoomList } from './getRoomList';

const initialState = {
  data: [],
  loading: 'idle'
}

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRoomList.fulfilled, (state, action) => {
        state.data = [...action.payload];
        state.loading = 'fulfilled';
      })
  }
})

export const roomReducer = roomSlice.reducer