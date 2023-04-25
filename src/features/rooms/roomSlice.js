import { createSlice } from '@reduxjs/toolkit'
import { getRoomList } from './getRoomList';
import { deleteRoomById } from './deleteRoomById';
import { createRoom } from './createRoom';

const initialState = {
  data: [],
  loading: false
}

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getRoomList.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getRoomList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    })
    .addCase(deleteRoomById.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(deleteRoomById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    })
    .addCase(createRoom.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(createRoom.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.loading = false;
    })
  }
})

export const roomReducer = roomSlice.reducer