import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import wordsSlice from './wordSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    words: wordsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
