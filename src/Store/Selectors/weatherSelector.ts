import { createSelector } from 'reselect';
import { WeatherState } from '../Reducers/WeatherSlice';
import { RootState } from '../RootStore';

export const WeatherSelector = (state: RootState) => state.weather;

export const selectWeather = createSelector(
    [WeatherSelector],
    (state: WeatherState) => state.dailyWeather
);