import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);

const incrementCounter = () => {
setCounter((prevCounter) => prevCounter + 1);
};

const decrementCounter = () => {
setCounter((prevCounter) => prevCounter - 1);
};

  return (
    <div className="App">
      <button data-testid="increment" onClick={incrementCounter}>
      +
      </button>
      <p data-testid="counter">{counter}</p>
      <button disabled data-testid="decrement" onClick={decrementCounter}>
      -
      </button>
    </div>
  );
}

export default App;
