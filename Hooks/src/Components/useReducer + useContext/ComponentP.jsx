import React,{useContext} from 'react'
//import { countContext } from '../../App.jsx'

function ComponentP() {
  const countContext = useContext(countContext)
  return (
    <div>
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
      <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentP