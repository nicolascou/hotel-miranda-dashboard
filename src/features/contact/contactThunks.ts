import { createAsyncThunk } from "@reduxjs/toolkit";
import contactJson from '../../data/contact.json';
import { Contact } from "../../types/features";
import { RootState } from "../../app/store";

export const getContactList = createAsyncThunk<Contact[], void, { rejectValue: Error }>(
  'contact/getContactListStatus',
  async(_, { rejectWithValue }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(contactJson as Contact[]);
        }, 200);
      });
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
)

export const archiveContactById = createAsyncThunk<Contact[], string, { state: RootState, rejectValue: Error }>(
  'contact/archiveContactByIdStatus',
  async(contactId, { getState, rejectWithValue }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            getState().contact.data.map((contact: Contact) => {
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
      return rejectWithValue(error as Error);
    }
  }
)

export const createContact = createAsyncThunk<Contact, Omit<Contact, 'id'>, { state: RootState, rejectValue: Error }>(
  'contact/createContactStatus',
  async(contact, { getState, rejectWithValue }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const contactList = getState().contact.data;
          resolve({
            id: (Number(contactList[contactList.length-1].id) + 1).toString(),
            ...contact
          });
        }, 200);
      });
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
)

export const updateContact = createAsyncThunk<Contact[], Contact, { state: RootState, rejectValue: Error }>(
  'contact/updateContactStatus',
  async(newContact, { getState, rejectWithValue }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const updatedContacts = getState().contact.data.map((contact: Contact) => {
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
      return rejectWithValue(error as Error);
    }
  }
)