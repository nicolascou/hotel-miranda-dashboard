import { createAsyncThunk } from "@reduxjs/toolkit";
import contactJson from '../../data/contact.json';

export const getContactList = createAsyncThunk(
  'contact/getContactListStatus',
  async() => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(contactJson);
        }, 200);
      });
    } catch (error) {
      return error;
    }
  }
)

export const deleteContactById = createAsyncThunk(
  'contact/deleteContactByIdStatus',
  async(contactId, { getState }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            getState().contact.data.filter(({ id }) => id !== contactId)
          );
        }, 200);
      });
    } catch (error) {
      return error;
    }
  }
)

export const createContact = createAsyncThunk(
  'contact/createContactStatus',
  async(contact, { getState }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          contact.id = getState().contact.data.length + 1;
          resolve(contact);
        }, 200);
      });
    } catch (error) {
      return error;
    }
  }
)

export const updateContact = createAsyncThunk(
  'contact/updateContactStatus',
  async(contact) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(contact);
        }, 200);
      });
    } catch (error) {
      return error;
    }
  }
)