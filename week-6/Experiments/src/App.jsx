import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div>
      <Header title="Ganesh1">Hi Ganes</Header>
      <Header title="Ganesh2"></Header>
    </div>
  )
}

function Header( props  ) {
  return <div>
    {props.title}
  </div>
}

export default App
