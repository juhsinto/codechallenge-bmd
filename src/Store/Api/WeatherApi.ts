import { IWeather } from "../../Models/Weather";
import WeatherService from "../../Services/WeatherService";

const weatherService = new WeatherService();

export const getWeatherFromLatLonApi = async (lat: string, lon: string) : Promise<IWeather[]> => {
    return await weatherService.getWeather(lat, lon);
};