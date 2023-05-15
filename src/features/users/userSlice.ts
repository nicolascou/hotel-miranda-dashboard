import { createSlice } from '@reduxjs/toolkit'
import { updateUser, deleteUserById, createUser, getUserList } from './userThunks'
import { Status, User } from '../../types/features';

interface UserState {
  data: User[];
  status: Status;
  error: Error | undefined;
}

const initialState = {
  data: [],
  status: 'idle',
  error: undefined
} as UserState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getUserList.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(getUserList.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(getUserList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'fulfilled';
    })

    .addCase(deleteUserById.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(deleteUserById.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(deleteUserById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'fulfilled';
    })
   
    .addCase(createUser.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(createUser.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(createUser.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.status = 'fulfilled';
    })

    .addCase(updateUser.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(updateUser.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(updateUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'fulfilled';
    })
  }
})

export const userReducer = userSlice.reducer