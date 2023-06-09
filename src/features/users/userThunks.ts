import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersJson } from '../../data/users';
import { User } from "../../types/features";
import { RootState } from "../../app/store";

export const getUserList = createAsyncThunk<User[], void, { rejectValue: Error }>(
  'user/getUserListStatus',
  async(_, { rejectWithValue }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(usersJson as User[]);
        }, 200);
      });
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
)
 
export const deleteUserById = createAsyncThunk<User[], number, { state: RootState, rejectValue: Error }>(
  'user/deleteUserByIdStatus',
  async(userId, { getState, rejectWithValue }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            getState().user.data.filter((user: User) => user.id !== userId) as User[]
          );
        }, 200);
      });
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
)

export const createUser = createAsyncThunk<User, Omit<User, 'id'>, { state: RootState, rejectValue: Error }>(
  'user/createUserStatus',
  async(user, { getState, rejectWithValue }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const userList = getState().user.data;
          resolve({
            id: userList[userList.length-1].id + 1,
            ...user
          });
        }, 200);
      });
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
)

export const updateUser = createAsyncThunk<User[], User, { state: RootState, rejectValue: Error }>(
  'user/updateUserStatus',
  async(newUser, { getState, rejectWithValue }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const updatedUsers = getState().user.data.map((user: User) => {
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
      return rejectWithValue(error as Error);
    }
  }
)