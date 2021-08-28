import { createSelector } from 'reselect';
import { CounterState } from '../Reducers/CounterSlice';
import { RootState } from '../RootStore';

export const CounterSelector = (state: RootState) => state.counter;

export const selectCurrentCounterValue = createSelector(
    [CounterSelector],
    (state: CounterState) => state.value
);