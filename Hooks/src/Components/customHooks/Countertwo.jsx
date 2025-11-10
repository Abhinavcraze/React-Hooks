import useCounter from "./useCounter";

function CounterTwo() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <h2>count - {count}</h2>
      <button onClick={increment}>Increment Count - {count}</button>
      <button onClick={decrement}>Decrement Count - {count}</button>
      <button onClick={reset}>Reset Count</button>
    </div>
  );
}

export default CounterTwo;