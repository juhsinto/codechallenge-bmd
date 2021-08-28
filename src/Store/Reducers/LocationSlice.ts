import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILocation } from '../../Models/Location';
import { getLocationFromApi } from '../Api/LocationApi';
import { AppThunk } from '../RootStore';

export interface LocationState {
  location: ILocation[];
}

const initialState : LocationState = {
  location: []
};

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
     
      setLocations(state: LocationState, action: PayloadAction<any>) {
        const payloadValue = action.payload;
        state.location = payloadValue;
      },
    }
  })

export const LocationReducers = locationSlice.reducer;
  
export const { setLocations } = locationSlice.actions;

export const getLocations = (location: string) : AppThunk => async dispatch => {
  try {
    const result = await getLocationFromApi(location);
    dispatch(setLocationsByDispatch(result));
  }
  catch (err) {
    console.log('Error in getting location data from locationIQ');
  }
}

export const setLocationsByDispatch = (locations: ILocation[]) : AppThunk => async dispatch => {
  try {
    dispatch(setLocations(locations));
  } catch(err) {
    console.log("Error: ", err);
  }
};