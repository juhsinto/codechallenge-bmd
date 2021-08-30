import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../RootStore';

export interface LoadingState {
  isLoading: boolean;
}

const initialState : LoadingState = {
  isLoading: false
};

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
     
      setLoading(state: LoadingState, action: PayloadAction<any>) {
        const payloadValue = action.payload;
        state.isLoading = payloadValue;
      },
    }
  })

export const LoadingReducers = loadingSlice.reducer;
  
export const { setLoading } = loadingSlice.actions;

export const setLoadingByDispatch = (isActive: boolean) : AppThunk => async dispatch => {
  try {
    dispatch(setLoading(isActive));
  } catch(err) {
    console.log("Error: error setting isActive", err);
  }
};