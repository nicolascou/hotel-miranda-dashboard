import { createAsyncThunk } from "@reduxjs/toolkit";
import { roomsJson } from '../../data/rooms.js';
import { Room } from "../../types/features.js";
import { RootState } from "../../app/store.js";

export const getRoomList = createAsyncThunk<Room[], void, { rejectValue: Error }>(
  'bookings/getRoomListStatus',
  async(_, { rejectWithValue }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(roomsJson as Room[]);
        }, 200);
      });
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
)

export const getRoom = createAsyncThunk<Room, number, { rejectValue: Error}>(
  'bookings/getRoomStatus',
  async(roomId, { rejectWithValue }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const room = roomsJson.find(({ id }) => id === roomId);
          resolve(room as Room);
        }, 200);
      })
    } catch(error) {
      return rejectWithValue(error as Error);
    }
  }
)

export const deleteRoomById = createAsyncThunk<Room[], number, { state: RootState, rejectValue: Error }>(
  'booking/deleteRoomByIdStatus',
  async(roomId, { getState, rejectWithValue }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            getState().room.data.roomList.filter((room: Room) => room.id !== roomId)
          );
        }, 200);
      });
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
)

export const createRoom = createAsyncThunk<Room, Omit<Room, 'id'>, { state: RootState, rejectValue: Error }>(
  'room/createRoomStatus',
  async(room, { getState, rejectWithValue }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const { roomList } = getState().room.data;
          resolve({
            id: roomList[roomList.length-1].id + 1,
            ...room
          });
        }, 200);
      });
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
)

export const updateRoom = createAsyncThunk<Room[], Room, { state: RootState, rejectValue: Error }>(
  'room/updateRoomStatus',
  async(updatedRoom, { getState, rejectWithValue }) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const updatedRooms = getState().room.data.roomList.map((room: Room) => {
            if (room.id === updatedRoom.id) {
              return updatedRoom;
            } else {
              return room;
            }
          });
          resolve(updatedRooms);
        }, 200);
      });
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
)