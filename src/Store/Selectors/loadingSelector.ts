import { createSelector } from 'reselect';
import { LoadingState } from '../Reducers/LoadingSlice';
import { RootState } from '../RootStore';

export const LoadingSelector = (state: RootState) => state.loading;

export const selectIsLoading = createSelector(
    [LoadingSelector],
    (state: LoadingState) => state.isLoading
);