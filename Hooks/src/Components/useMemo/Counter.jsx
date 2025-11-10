import {React,useMemo,useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const doubleCount = useMemo(() => {
    console.log('Calculating double count...')
    return count * 2
  }, [count])

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Counter