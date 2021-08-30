import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ILocation } from '../../Models/Location';
import { setLoadingByDispatch } from '../../Store/Reducers/LoadingSlice';
import { getLocations } from '../../Store/Reducers/LocationSlice';
import { getWeather } from '../../Store/Reducers/WeatherSlice';
import { selectIsLoading } from '../../Store/Selectors/loadingSelector';
import { selectLocations } from '../../Store/Selectors/locationSelector';


const Search = () => {

  const [location, setLocation] = useState("");
  const locations = useSelector(selectLocations);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    // when the location is ready - then call the weather api
    const getWeatherFromLatLon = async () => {
      if(locations.length>=0 && locations[0]?.lat) {
        dispatch(setLoadingByDispatch(true));

        // artificial delay ; for demo-ing the timer
        setTimeout(function() {
          dispatch(getWeather(locations[0].lat, locations[0].lon))
          dispatch(setLoadingByDispatch(false));
        }, 2000);
        
      }
    };
    getWeatherFromLatLon();
  }, [dispatch, locations])

  const handleChange = (event: any)  => {
    setLocation(event.target.value);
  }

  const searchLocation = async () => {
    dispatch(getLocations(location));
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      searchLocation();
    }
  }

  return (
    <div>
      <h3>Weather Forecast Lookup</h3>
      <label>Enter Location&nbsp;&nbsp;</label>  
      <input type="text" name="location" value={location} onKeyDown={handleKeyDown} onChange={handleChange} />
      <button onClick={searchLocation}>Search</button>
      <br></br><br></br>
      {
        <div>
            { 
              // make sure that location exists before trying to render jsx
              location && location.length>=0 && 
                locations.map((location: ILocation) => {
                const { lat, lon, display_name } = location;
                return (
                  <>
                    <p className="searchResult">Location: {display_name} <br></br>
                       Latitude: {lat} <br></br>
                       Longitude: {lon}</p>
                  </>
                )
              })
            }
        </div>
      }
      {
        isLoading ?
        <Spinner animation="border" role="status" /> : <></>
      }
    </div>
  );
}
  
export default Search;
  