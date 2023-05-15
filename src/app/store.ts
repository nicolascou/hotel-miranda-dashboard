import { configureStore } from '@reduxjs/toolkit';
import { bookingReducer } from '../features/bookings/bookingSlice';
import { roomReducer } from '../features/rooms/roomSlice';
import { userReducer } from '../features/users/userSlice';
import { contactReducer } from '../features/contact/contactSlice';

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    room: roomReducer,
    user: userReducer,
    contact: contactReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;