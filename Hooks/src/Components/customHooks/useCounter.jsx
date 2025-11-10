import {useState} from 'react'

function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    // setCount(count + 1);
    setCount (prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(initialCount);
  };

  return { count, increment, decrement, reset };
}

export default useCounter