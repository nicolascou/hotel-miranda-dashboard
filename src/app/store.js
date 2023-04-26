import { configureStore } from '@reduxjs/toolkit';
import { bookingReducer } from '../features/bookings/bookingSlice';
import { roomReducer } from '../features/rooms/roomSlice';
import { userReducer } from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    room: roomReducer,
    user: userReducer
  },
});
