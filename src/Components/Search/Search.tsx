import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ILocation } from '../../Models/Location';
import { getLocations } from '../../Store/Reducers/LocationSlice';
import { selectLocations } from '../../Store/Selectors/locationSelector';


const Search = () => {

  const [location, setLocation] = useState("");
  const locations = useSelector(selectLocations);

  const dispatch = useDispatch();

  const handleChange = (event: any)  => {
    setLocation(event.target.value);
  }

  const searchLocation = async () => {
    dispatch(getLocations(location));
    // call api to get weather data
  }

  return (
    <div>
      <h3>Weather Forecast Lookup</h3>
      <label>Enter Location </label>
      <input type="text" name="location" value={location} onChange={handleChange} />
      <button onClick={searchLocation}>Search</button>
      <br></br>
      { 
        <div>
            { 
              // make sure that location exists before trying to render jsx
              location && location.length>=0 && 
                locations.map((location: ILocation) => {
                const { lat, lon, display_name } = location;
                return (
                  <>
                    <p>Location: {display_name}</p>
                    <p>Latitude: {lat}</p>
                    <p>Longitude: {lon}</p>
                  </>
                )
              })
            }
        </div>
      }
    </div>
  );
}
  
export default Search;
  