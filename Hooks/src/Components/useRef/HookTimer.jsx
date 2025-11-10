import React,{useRef} from 'react'

function HookTimer() {
  const [timer,setTimer] = React.useState(0)
  const intervalRef = useRef()
  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div>
      Hook Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>clear HOOK Timer</button>
    </div>
    
  )
}

export default HookTimer