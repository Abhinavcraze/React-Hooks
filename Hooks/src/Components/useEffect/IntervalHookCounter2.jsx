import React from 'react'

function IntervalHookCounter() {
  const [count , setCount] = React.useState(0)

  const tick = () => {
    setCount(prevCount => prevCount + 1)
  }

  React.useEffect(() => {
    function doSomething() {
      console.log('Doing something...')
    }

    doSomething()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)   //component unmount in funcional
  }, [])

  return (
    <div>
      <h3>IntervalHookCounter - {count}</h3>
    </div>
  )

  //this or that

  // const tick = () => {
  //     setCount(count + 1)
  //   }
  
  //   React.useEffect(() => {
  //     const interval = setInterval(tick, 1000)
  //     return () => clearInterval(interval)
  //   }, [count])
  
  //   return (
  //     <div>
  //       <h3>IntervalHookCounter - {count}</h3>
  //     </div>
  //   )
}

export default IntervalHookCounter