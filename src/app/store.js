import { configureStore } from '@reduxjs/toolkit';
import { bookingReducer } from '../features/bookings/bookingSlice';
import { roomReducer } from '../features/rooms/roomSlice';

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    room: roomReducer
  },
});
