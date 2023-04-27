import { createSlice } from '@reduxjs/toolkit'
import { getContactList, deleteContactById, createContact, updateContact } from './contactThunks';

const initialState = {
  data: [],
  loading: false,
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
      state.loading = false;
    })
    .addCase(getContactList.pending, (state) => {
      state.loading = true;
    })
    .addCase(getContactList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    })

    .addCase(deleteContactById.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
    .addCase(deleteContactById.pending, (state) => {
      state.loading = true;
    })
    .addCase(deleteContactById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    })
   
    .addCase(createContact.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
    .addCase(createContact.pending, (state) => {
      state.loading = true;
    })
    .addCase(createContact.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.loading = false;
    })

    .addCase(updateContact.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
    .addCase(updateContact.pending, (state) => {
      state.loading = true;
    })
    .addCase(updateContact.fulfilled, (state, action) => {
      state.data = state.data.map((contact) => {
        if (contact.id === action.payload.id) {
          return action.payload;
        } else {
          return contact;
        }
      });
      state.loading = false;
    })
  }
})

export const contactReducer = contactSlice.reducer