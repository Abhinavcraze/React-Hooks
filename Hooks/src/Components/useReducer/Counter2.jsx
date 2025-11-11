import React,{useReducer} from 'react'
const initialcurrentState = {
  firstCounter: 0,
  secondCounter: 10   //example for multiple currentStates and load in the object only
}

const reducer = (currentState , action) =>{
  switch(action.type){
    case 'increment':
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.value
      }
    case 'decrement':
      return {
        ...currentState,
        firstCounter: currentState.firstCounter - action.value
      }
      case 'increment2':
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value
      }
    case 'decrement2':
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.value
      }
    case 'reset':
      return initialcurrentState
    default:
      return currentState
  }
}

function Counter2() {
  const[count , dispatch] = useReducer(reducer , initialcurrentState)
  return (
    <div>
      <h2>First Counter - {count.firstCounter}</h2>
      <h2>Second Counter - {count.secondCounter}</h2>

      <button onClick={() => dispatch({type : 'increment' , value : 1})}>Increment</button>
      <button onClick={() => dispatch({type : 'decrement' , value : 1})}>Decrement</button>
      <button onClick={() => dispatch({type : 'increment' , value : 5})}>Increment 5</button>
      <button onClick={() => dispatch({type : 'decrement' , value : 5})}>Decrement 5</button>
      <div>
        <button onClick={() => dispatch({type : 'increment2' , value : 1})}>Increment Counter 2</button>
        <button onClick={() => dispatch({type : 'decrement2' , value : 1})}>Decrement Counter 2</button>
      </div>

      <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
    </div>
  )
}

export default Counter2