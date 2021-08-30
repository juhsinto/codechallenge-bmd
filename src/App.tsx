import Search from "./Components/Search/Search"
import Weather from "./Components/Weather/Weather";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div style={{margin: '10px'}}>
      <Search /> 
      
      <Weather />
    </div>
  );
}

export default App;
