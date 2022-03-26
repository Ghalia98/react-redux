import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";
import { decrement } from "./actions";


function App() {
  const counter = useSelector(state => state.counterReducer)
  const isLogged = useSelector(state => state.isLoggedReducer)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => {
        counter > 0 &&
        dispatch(decrement())
      }
      }>-</button>
      {isLogged &&
        <h3>Important Info</h3>
      }

    </div>
  );
}

export default App;
