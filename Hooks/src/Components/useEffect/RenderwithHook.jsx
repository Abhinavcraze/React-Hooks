{/*Conditinally run effects with hooks*/}

import React,{useState,useEffect} from 'react'

function RenderwithHook() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    console.log('useEffect - updating document title')
    document.title = `Clicked ${count} times`
  }, [count])

  return (
    <div>
      <input type = 'text' value={name} className="white-input" onChange = {e => setName(e.target.value)} />  
      <button onClick={() => setCount(count + 1)}>
        Click {count} times
      </button>
    </div>
  )
}
export default RenderwithHook