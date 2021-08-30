import axios from 'axios';

class WeatherService {

    baseUrl: string;
    appid: string;
    units: string;
    exclude: string;

    constructor () {
        this.baseUrl = "https://api.openweathermap.org/data/2.5";
        this.appid = "9fcba578edc6bed9e3f357633bc962b6";
        this.units = "metric";
        this.exclude = "current,minutely,hourly";
    }

    async getWeather(lat: string, lon: string) {
        let responseData = [];

        const weatherUrl = `${this.baseUrl}/onecall?appid=${this.appid}&units=${this.units}&exclude=${this.exclude}&lat=${lat}&lon=${lon}`;
    
        const response = await axios.get(weatherUrl);
        responseData = response.data.daily;
        return responseData;
    }
}

export default WeatherService;