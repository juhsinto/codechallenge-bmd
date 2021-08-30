import { useSelector } from 'react-redux';
import { IWeather } from '../../Models/Weather';
import { selectWeather } from "../../Store/Selectors/weatherSelector";

const Weather = () => {

  const weatherData : IWeather[] = useSelector(selectWeather);

    return (
      <div>
        {
          weatherData && weatherData.length>0 &&
          weatherData.map((weatherData) => {
            const { dt, temp, weather} = weatherData;
            const {main} = weather[0];

            return (
              <div className="forecastTile" style={{border: '1px black solid', float: 'left', padding: '10px'}}>
                <p>Date:<br></br>{new Date(dt*1000).toDateString()}</p>
                <p>
                    Temperature:<br></br>
                    Min Temp: {temp.min} <br></br> 
                    Max Temp: {temp.max}
                </p>
                <p>Weather:<br></br>{main}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
  
export default Weather;
  