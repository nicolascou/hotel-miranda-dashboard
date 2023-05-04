import { createSlice } from '@reduxjs/toolkit'
import { getRoomList, createRoom, deleteRoomById, updateRoom, getRoom } from './roomThunks';

const initialState = {
  data: {
    roomList: [],
    selectedRoom: null
  },
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
      state.data.roomList = action.payload;
      state.status = 'fulfilled';
    })

    .addCase(getRoom.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(getRoom.fulfilled, (state, action) => {
      state.data.selectedRoom = action.payload;
      state.status = 'fulfilled';
    })

    .addCase(deleteRoomById.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(deleteRoomById.fulfilled, (state, action) => {
      state.data.roomList = action.payload;
      state.status = 'fulfilled';
    })

    .addCase(createRoom.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(createRoom.fulfilled, (state, action) => {
      state.data.roomList.push(action.payload);
      state.status = 'fulfilled';
    })
    
    .addCase(updateRoom.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(updateRoom.fulfilled, (state, action) => {
      state.data.roomList = action.payload;
      state.status = 'fulfilled';
    })
  }
})

export const roomReducer = roomSlice.reducer