import { useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter } from "../../Store/Reducers/CounterSlice";


const Search = () => {

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementCounter(1));
  }

  const decrement = () => {
    dispatch(decrementCounter(1));
  }

    return (
      <div>
        <p> Search Component </p>
        <button onClick={increment}>Increment</button> ---- <button onClick={decrement}>decrement</button>
      </div>
    );
  }
  
export default Search;
  