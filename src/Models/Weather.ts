export interface IWeather {
    dt: number;
    temp: ITemperature;
    weather: IWeatherDescription[];
}

export interface ITemperature {
    min: number;
    max: number;
}

export interface IWeatherDescription {
    main: string;
    description: string;
}