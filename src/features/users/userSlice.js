import { createSlice } from '@reduxjs/toolkit'
import { deleteUserById, getUserList } from './userThunks'

const initialState = {
  data: [],
  loading: false,
  error: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getUserList.rejected, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    })
    .addCase(getUserList.pending, (state) => {
      state.loading = true;
    })
    .addCase(getUserList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    })

    .addCase(deleteUserById.rejected, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    })
    .addCase(deleteUserById.pending, (state) => {
      state.loading = true;
    })
    .addCase(deleteUserById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    })
  }
})

export const userReducer = userSlice.reducer