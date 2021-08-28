import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../RootStore';

export interface CounterState {
  value: number;
}

const initialState : CounterState = {
  value: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment(state: CounterState, action: PayloadAction<any>) {
        const payloadValue = action.payload;
        state.value += payloadValue
      },
      decrement(state: CounterState, action: PayloadAction<any>) {
        const payloadValue = action.payload;
        state.value -= payloadValue
      },
    }
  })

export const CounterReducers = counterSlice.reducer;
  
export const { increment, decrement } = counterSlice.actions

export const incrementCounter = (incrementBy: number) : AppThunk => async dispatch => {
  try {
    dispatch(increment(incrementBy));
  } catch(err) {
    console.log("Error: ", err);
  }
};

export const decrementCounter = (decrementBy: number) : AppThunk => async dispatch => {
  try {
    dispatch(decrement(decrementBy));
  } catch(err) {
    console.log("Error: ", err);
  }
};