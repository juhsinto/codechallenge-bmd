import { selectCurrentCounterValue } from "../../Store/Selectors/counterSelector";
import { useSelector } from 'react-redux';

const Weather = () => {

  const currentCounter = useSelector(selectCurrentCounterValue);

    return (
      <div>
        <p> Weather Component {currentCounter}</p>
      </div>
    );
  }
  
export default Weather;
  