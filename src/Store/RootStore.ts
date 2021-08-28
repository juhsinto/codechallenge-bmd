import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { CounterReducers } from './Reducers/CounterSlice';


export const RootStore = configureStore({
  reducer: combineReducers({
      counter : CounterReducers,
  })
});

export type RootState = ReturnType<typeof RootStore.getState>;
export type AppDispatch = typeof RootStore.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;