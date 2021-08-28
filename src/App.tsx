import Search from "./Components/Search/Search"
import Weather from "./Components/Weather/Weather";

const App = () => {
  return (
    <div>
      {/* todo - set the location in serach  */}
      <Search /> 
      
      {/* todo - send the location to weather via redux */}
      <Weather />
    </div>
  );
}

export default App;
