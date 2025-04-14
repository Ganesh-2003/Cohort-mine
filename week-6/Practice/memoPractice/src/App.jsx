import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [sum, setNum] = useState(0)

  return (
    <>
        <input 
          type="text" 
          onChange={function(e){
            let totSum = 0;
            const inputValue = parseInt(e.target.value, 10) || 0; // Convert input value to a number
            for(let i = 1; i <=inputValue; i++){
              totSum = totSum + i;
            }
            setNum(totSum);
          }} 
        />
        <p>Sum is {sum}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App
