import { createSlice } from '@reduxjs/toolkit'
import { getRoomList, createRoom, deleteRoomById, updateRoom } from './roomThunks';

const initialState = {
  data: [],
  status: 'idle',
  error: null
}

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getRoomList.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(getRoomList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'fulfilled';
    })

    .addCase(deleteRoomById.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(deleteRoomById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'fulfilled';
    })

    .addCase(createRoom.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(createRoom.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.status = 'fulfilled';
    })
    
    .addCase(updateRoom.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(updateRoom.fulfilled, (state, action) => {
      state.data = state.data.map((room) => {
        if (room.id === action.payload.id) {
          return action.payload;
        } else {
          return room;
        }
      });
      state.status = 'fulfilled';
    })
  }
})

export const roomReducer = roomSlice.reducer