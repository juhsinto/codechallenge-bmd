import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { LocationReducers } from './Reducers/LocationSlice';


export const RootStore = configureStore({
  reducer: combineReducers({
      
      locations: LocationReducers
  })
});

export type RootState = ReturnType<typeof RootStore.getState>;
export type AppDispatch = typeof RootStore.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;