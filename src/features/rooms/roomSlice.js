import { createSlice } from '@reduxjs/toolkit'
import { getRoomList } from './getRoomList';
import { deleteRoomById } from './deleteRoomById';
import { createRoom } from './createRoom';

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
      state.data = action.payload;
      state.loading = 'fulfilled';
    })
    .addCase(deleteRoomById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = 'fulfilled';
    })
    .addCase(createRoom.fulfilled, (state, action) => {
      state.data.push(action.payload);
    })
  }
})

export const roomReducer = roomSlice.reducer