import { createSlice } from '@reduxjs/toolkit'
import { getContactList, deleteContactById, createContact, updateContact } from './contactThunks';

const initialState = {
  data: [],
  status: 'idle',
  error: null
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getContactList.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(getContactList.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(getContactList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'fulfilled';
    })

    .addCase(deleteContactById.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(deleteContactById.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(deleteContactById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'fulfilled';
    })
   
    .addCase(createContact.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(createContact.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(createContact.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.status = 'fulfilled';
    })

    .addCase(updateContact.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    })
    .addCase(updateContact.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(updateContact.fulfilled, (state, action) => {
      state.data = state.data.map((contact) => {
        if (contact.id === action.payload.id) {
          return action.payload;
        } else {
          return contact;
        }
      });
      state.status = 'fulfilled';
    })
  }
})

export const contactReducer = contactSlice.reducer