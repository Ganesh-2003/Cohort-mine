import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [diceVal,setdiceVal] = useState(0)
  /*const increment = ()=>{
    setCount(count+1);
  }

  const decrement = () =>{
    setCount(count-1);
  }*/

  function increment(){
    setCount(count+1);
  }

  function decrement() {
    setCount(count-1);
  }

  function diceGenerator(){
    setdiceVal(Math.floor(Math.random() * 6) + 1);
  }

  return (
      <div>
        <h1>Counter App</h1>
        <h2>You can either Increment or Decrement the Counter</h2>
        <p style={{
          
        }}>Count: {count}</p>
        <button onClick={increment}> Increment </button>
        <button onClick={decrement}> Decrement </button>

        <h2> Dice (1-6) </h2>
        <p>Dice Value: {diceVal} </p>
        <button onClick={diceGenerator}> Generate </button>
      </div>
  )
}

export default App
