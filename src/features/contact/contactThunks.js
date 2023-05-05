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

export const archiveContactById = createAsyncThunk(
  'contact/archiveContactByIdStatus',
  async(contactId, { getState }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            getState().contact.data.map((contact) => {
              if (contact.id === contactId) {
                return {
                  ...contact,
                  archived: true
                }
              } else {
                return contact;
              }
            })
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
  async(newContact, { getState }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const updatedContacts = getState().contact.data.map((contact) => {
            if (contact.id === newContact.id) {
              return newContact;
            } else {
              return contact;
            }
          })
          resolve(updatedContacts);
        }, 200);
      });
    } catch (error) {
      return error;
    }
  }
)