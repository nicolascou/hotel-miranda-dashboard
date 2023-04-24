import { createSlice } from '@reduxjs/toolkit'
import { getRoomList } from './getRoomList';
import { deleteRoomById } from './deleteRoomById';

const initialState = {
  data: [],
  loading: 'idle'
}

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    reorderRooms: (state, action) => {
      state.data = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getRoomList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = 'fulfilled';
    })
    .addCase(deleteRoomById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = 'fulfilled';
    });
  }
})

export const { reorderRooms } = roomSlice.actions
export const roomReducer = roomSlice.reducer