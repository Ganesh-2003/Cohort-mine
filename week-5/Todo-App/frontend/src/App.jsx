import { useState } from 'react'
import './App.css'
import {CreateTodo} from './components/CreateTodo'
import { Todos } from './components/Todos'


function App() {
  const [todo, setTodos] = useState([]);

  return (
    <div>      
      <CreateTodo/>
      <Todos todos={todo}></Todos>
    </div>
  )
}

export default App
