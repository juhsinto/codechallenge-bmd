import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWeather } from '../../Models/Weather';
import { getWeatherFromLatLonApi } from '../Api/WeatherApi';
import { AppThunk } from '../RootStore';

export interface WeatherState {
  dailyWeather: IWeather[];
}

const initialState : WeatherState = {
  dailyWeather: []
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
     
      setWeather(state: WeatherState, action: PayloadAction<any>) {
        const payloadValue = action.payload;
        state.dailyWeather = payloadValue;
      },
    }
  })

export const WeatherReducers = weatherSlice.reducer;
  
export const { setWeather } = weatherSlice.actions;

export const getWeather = (lat: string, lon: string) : AppThunk => async dispatch => {
  try {
    const result = await getWeatherFromLatLonApi(lat, lon);
    dispatch(setWeatherByDispatch(result));
  }
  catch (err) {
    console.log('Error in getting weather data from openWeatherMap');
  }
}

export const setWeatherByDispatch = (dailyWeather: IWeather[]) : AppThunk => async dispatch => {
  try {
    dispatch(setWeather(dailyWeather));
  } catch(err) {
    console.log("Error: ", err);
  }
};