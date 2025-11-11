import React,{useState} from 'react'
import './App.css'
import  ClassCounterState from './Components/useState/ClassCounterstate.jsx'
import FuncHookCounter from './Components/useState/FuncHookCounter.jsx'
import FuncHookCounter2 from './Components/useState/FuncHookCounter2.jsx'   
import UseStatewithObject from './Components/useState/useStatewithObject.jsx'  
import UseStatewithArray from './Components/useState/useStatewithArray.jsx'

import ComponentC from './Components/useContext/ComponentC.jsx'
const UserContext = React.createContext()
const ChannelContext = React.createContext()

import RenderwithClass from './Components/useEffect/RenderwithClassComponent.jsx'
import RenderwithHook from './Components/useEffect/RenderwithHook.jsx'
import RunEffectOnlyonceClass from './Components/useEffect/RunEffectOnlyonceClass.jsx'
import HookMouseonlyOnce from './Components/useEffect/HookMouseonlyOnce.jsx'
import Cleanup from './Components/useEffect/Cleanup.jsx'
import IntervalClassCounter from './Components/useEffect/IntervalClassCounter.jsx'  
import IntervalClassCounter2 from './Components/useEffect/IntervalClassCounter2.jsx'
import IntervalHookCounter2 from './Components/useEffect/IntervalHookCounter2.jsx'
import FetchData from './Components/useEffect/FetchData.jsx'
import FetchData2 from './Components/useEffect/FetchData2.jsx'
import FetchIndividualData from './Components/useEffect/FetchIndividualData.jsx'

import Counter1 from './Components/useReducer/Counter1.jsx'
import Counter2 from './Components/useReducer/Counter2.jsx'

import ParentComponent from './Components/useCallback/ParentComponent.jsx'

import Counter from './Components/useMemo/Counter.jsx'

import FocusInput from './Components/useRef/FocusInput.jsx'
import ClassTimer from './Components/useRef/ClassTimer.jsx'
import HookTimer from './Components/useRef/HookTimer.jsx'

import DocumentTitleOne from './Components/customHooks/DocumentTitleOne.jsx'
import DocumentTitleTwo from './Components/customHooks/DocumentTitleTwo.jsx' 
import CounterOne from './Components/customHooks/Counterone.jsx'
import CounterTwo from './Components/customHooks/Countertwo.jsx'
import UserForm from './Components/customHooks/UserForm.jsx'

function App() {
  const [showCounter, setShowCounter] = useState(true); //for interval hook counter


  return (
    <div className="App">
      <h1>Welcome to the Hooks App</h1>
      <h2>UseState Concept</h2>
      <p>useState using class Components</p>
      <ClassCounterState />
      <p>useState using functional Components</p>
      <FuncHookCounter />
      <p>useState using functional Components 2</p>
      <FuncHookCounter2 />
      <p>useState with Object</p>
      <UseStatewithObject />
      <p>useState with Array</p>
      <UseStatewithArray />

      <hr/>
      <hr/>

      <h2>UseContext Concept</h2>
      <p>Here App Component acts as a roo component where username or some other data pass to an A,D and F where D have a disturbance B and F has disturbance C and E </p>
      <p>To avoid passing data to every lvl useContext is used to pass data using ContextAPI, App Component acts as parent F acts as a grandChild</p>
      <UserContext.Provider value={'Good to know u r learning hooks concept'}>
        <ComponentC />  {/* acts as child over here */}
      </UserContext.Provider>

      <hr/>

      <UserContext.Provider value={'I THINK U UNDERSTAND ABOUT HOOKS QUICKLY'}>
        <ChannelContext.Provider value={'This is channel context value'}>
          <ComponentC />  {/* acts as child over here */}
        </ChannelContext.Provider>  
      </UserContext.Provider>

      <hr/>
      <hr/>


    <h2>UseEffect Concept</h2>
      <p>useEffect in class Component to demonstrate componentDidMount, componentDidUpdate and componentWillUnmount lifecycle methods</p>
      <RenderwithClass />
      <p>useEffect in functional Component to demonstrate useEffect hook</p>
      <RenderwithHook />
      <p>Run Effect only once in class Component</p>
      <RunEffectOnlyonceClass />
      <p>Run Effect only once in functional Component</p>
      <HookMouseonlyOnce />
      <p>cleanup</p>
      <Cleanup />
      <p>Incorrect dependency of Interval Counter</p>
      <IntervalClassCounter />
      <p>Incorrect dependency of Interval Counter in class component</p>
      <div>
        <button onClick={() => setShowCounter(prev => !prev)}>
          Toggle Counter
        </button>
        {showCounter && <IntervalClassCounter2 />}
      </div>
      
      <p>Incorrect dependency of Interval Counter in hooks</p>

      <div>
        <button onClick={() => setShowCounter(prev => !prev)}>
          Toggle Counter
        </button>
        {showCounter && <IntervalHookCounter2 />}
      </div>
      <p>Data fetching using useEffect and axios</p>
      <FetchData />
      <FetchData2 />
      <p>Fetching individual data</p>
      <FetchIndividualData />


      <hr/>
      <hr/>

      <h2>UseReducer Concept </h2>
      <Counter1/>
      <Counter2/>

      <hr/>
      <hr/>

      <ParentComponent />

      <hr/>
      <hr/>

      <h2>UseMemo Concept</h2>
      <p>useMemo is used to memoize the value so that it does not re-compute on every render unless dependencies change</p>
      <p>In below Counter component doubleCount is memoized using useMemo hook</p>
      <Counter /> 

      <hr/>
      <hr/>

      <h2>UseRef Concept</h2>
      <p>useRef is used to access the DOM element directly</p>
      <p>In below FocusInput component input box is focused using useRef hook</p>
      <FocusInput />
      <ClassTimer />
      <HookTimer />

      <hr/>
      <hr/>

      <p> Custom Hooks Concept</p>
      <p> Custom hooks are the reusable functions which can be used across multiple components</p>
      <DocumentTitleOne />
      <DocumentTitleTwo />
      <p> useCounter concept</p>
      <CounterOne />
      <CounterTwo />
      <p>UserInput Custom Hooks</p>
      <h2>Form</h2>
      <UserForm />

    </div>
  ) 
}

export default App
export { UserContext , ChannelContext }
