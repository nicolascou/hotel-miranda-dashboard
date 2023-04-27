import { createSlice } from '@reduxjs/toolkit'
import { getRoomList, createRoom, deleteRoomById, updateRoom } from './roomThunks';

const initialState = {
  data: [],
  loading: false,
  error: null
}

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getRoomList.pending, (state) => {
      state.loading = true;
    })
    .addCase(getRoomList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    })

    .addCase(deleteRoomById.pending, (state) => {
      state.loading = true;
    })
    .addCase(deleteRoomById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    })

    .addCase(createRoom.pending, (state) => {
      state.loading = true;
    })
    .addCase(createRoom.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.loading = false;
    })
    
    .addCase(updateRoom.pending, (state) => {
      state.loading = true;
    })
    .addCase(updateRoom.fulfilled, (state, action) => {
      state.data = state.data.map((room) => {
        if (room.id === action.payload.id) {
          return action.payload;
        } else {
          return room;
        }
      });
      state.loading = false;
    })
  }
})

export const roomReducer = roomSlice.reducer