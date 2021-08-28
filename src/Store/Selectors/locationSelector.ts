import { createSelector } from 'reselect';
import { LocationState } from '../Reducers/LocationSlice';
import { RootState } from '../RootStore';

export const LocationSelector = (state: RootState) => state.locations;

export const selectLocations = createSelector(
    [LocationSelector],
    (state: LocationState) => state.location
);