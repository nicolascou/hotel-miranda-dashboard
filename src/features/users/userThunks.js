import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersJson } from '../../data/users.js';

export const getUserList = createAsyncThunk(
  'user/getUserListStatus',
  async() => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(usersJson);
        }, 200);
      });
    } catch (error) {
      return error;
    }
  }
)

export const deleteUserById = createAsyncThunk(
  'user/deleteUserByIdStatus',
  async(userId, { getState }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            getState().user.data.filter(({ id }) => id !== userId)
          );
        }, 200);
      });
    } catch (error) {
      return error;
    }
  }
)

export const createUser = createAsyncThunk(
  'user/createUserStatus',
  async(user, { getState }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          user.id = getState().user.data.length + 1;
          resolve(user);
        }, 200);
      });
    } catch (error) {
      return error;
    }
  }
)

export const updateUser = createAsyncThunk(
  'user/updateUserStatus',
  async(newUser, { getState }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(newUser);
          const updatedUsers = getState().user.data.map((user) => {
            if (user.id === newUser.id) {
              return newUser;
            } else {
              return user;
            }
          });
          resolve(updatedUsers);
        }, 200);
      });
    } catch (error) {
      return error;
    }
  }
)