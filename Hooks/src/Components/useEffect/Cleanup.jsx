import React from 'react'
import HookMouseonlyOnce from './HookMouseonlyOnce'

function Cleanup() {
  const[display,setDisplay]=React.useState(true)
  return (
    <div>
      {display && <h1>Cleanup</h1>}
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display && <HookMouseonlyOnce></HookMouseonlyOnce>}
    </div>
  )
}

export default Cleanup