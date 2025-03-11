
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useState } from 'react'

//State, components


function App() {

  const[count,setCount] = useState(0); //[1,2]

  function onClickHandler(){
    setCount(count+1);
  }

  return (
    <div>
      <button onClick={onClickHandler}>Counter {count}</button>
    </div>
  )
}

export default App
