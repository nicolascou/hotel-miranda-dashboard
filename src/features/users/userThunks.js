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

export const getUser = createAsyncThunk(
  'user/getUserStatus',
  async(userId, {getState}) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const { userList } = getState().user.data.userList;
          const loggedUser = userList.find(({ id }) => id === userId);
          resolve(loggedUser);
        }, 200); 
      })
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
            getState().user.data.userList.filter(({ id }) => id !== userId)
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
          user.id = getState().user.data.userList.length + 1;
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
  async(user) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(user);
        }, 200);
      });
    } catch (error) {
      return error;
    }
  }
)