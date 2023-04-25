import { createSlice } from '@reduxjs/toolkit'
import { getRoomList } from './getRoomList';
import { deleteRoomById } from './deleteRoomById';
import { createRoom } from './createRoom';

const initialState = {
  data: [],
  status: 'idle'
}

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getRoomList.fulfilled, (state, action) => {
      state.data = action.payload;
    })
    .addCase(deleteRoomById.fulfilled, (state, action) => {
      state.data = action.payload;
    })
    .addCase(createRoom.fulfilled, (state, action) => {
      state.data.push(action.payload);
    })
  }
})

export const roomReducer = roomSlice.reducer