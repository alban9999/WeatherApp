import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import weatherReducer from './reducers/weatherReducer';

export const store = configureStore({
  reducer: {
    weather: weatherReducer
  }
});

// Export a type for the dispatch function that knows how to handle thunks
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// This is useful for typing thunks when creating them
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
