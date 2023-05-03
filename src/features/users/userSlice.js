import { createSlice } from '@reduxjs/toolkit'
import { updateUser, deleteUserById, createUser, getUserList, getUser } from './userThunks'

const initialState = {
  data: [],
  status: 'idle',
  error: null
}

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
      state.data.userList = action.payload;
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
      state.data.userList = action.payload;
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
      state.data.userList.push(action.payload);
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
      state.data.userList = state.data.userList.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        } else {
          return user;
        }
      });
      state.status = 'fulfilled';
    })
  }
})

export const userReducer = userSlice.reducer