import React from 'react';
import useCounter from './useCounter.jsx';

function CounterOne() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h2>count - {count}</h2>
      <button onClick={increment}>Increment Count - {count}</button>
      <button onClick={decrement}>Decrement Count - {count}</button>
      <button onClick={reset}>Reset Count</button>
    </div>
  );
}

export default CounterOne;