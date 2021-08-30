import { Action, getDefaultMiddleware, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { LoadingReducers } from './Reducers/LoadingSlice';

import { LocationReducers } from './Reducers/LocationSlice';
import { WeatherReducers } from './Reducers/WeatherSlice';


export const RootStore = configureStore({
  reducer: combineReducers({
    weather: WeatherReducers,
    locations: LocationReducers,
    loading: LoadingReducers
  }),
  middleware: getDefaultMiddleware(),
  devTools: true
});

export type RootState = ReturnType<typeof RootStore.getState>;
export type AppDispatch = typeof RootStore.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;