import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const todos = [
  { Title: "Task 1",
    Description: "Solve DSA question everyday"
  },
  {
    Title: "Task 2",
    Description: "Brush your Teeth everyday"
  },
  {
    Title: "Task 3",
    Description: "Play Badminton everyday"
  }
  ]
  const [todo,settodos] = useState(todos)

  function updateTodos() {
    const newTodo = {
      Title: prompt("Enter the title of the new todo:"),
      Description: prompt("Enter the description of the new todo:")
    };
    console.log(newTodo);
    settodos([...todos, newTodo]);
    console.log(todos)
  }

  return (
    <>
      <button onClick={updateTodos}>Add Todo</button>
      {todo.map((item, index) => (
        <Todo key={index} title={item.Title} Description={item.Description} />
      ))}
    </>
  );

  function Todo({title,Description}){
    return <div>
      <h2>{title}</h2>
      <h4>{Description}</h4>
    </div>
  }
}

export default App
