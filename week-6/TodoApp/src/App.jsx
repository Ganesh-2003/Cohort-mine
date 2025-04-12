import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

// function App() {
  
//   const todos = [
//     { Title: "Task 1",
//       Description: "Solve DSA question everyday"
//     },
//     {
//       Title: "Task 2",
//       Description: "Brush your Teeth everyday"
//     },
//     {
//       Title: "Task 3",
//       Description: "Play Badminton everyday"
//     }
//   ]

//   const [todo,settodos] = useState(todos)

//   function updateTodos() {

//     const newTodo = {
//       Title: prompt("Enter the title of the new todo:"),
//       Description: prompt("Enter the description of the new todo:")
//     };
//     console.log(newTodo);
//     settodos([...todos, newTodo]);
//     console.log(todos)
//   }

//   return (
//     <>
//       <button onClick={updateTodos}>Add Todo</button>
//       {todo.map((item, index) => (
//         <Todo key={index} title={item.Title} Description={item.Description} />
//       ))}
//     </>
//   );

// }

// const Todo = React.memo(function Todo({ title, Description }) {
//   return (
//     <div>
//       <h2>{title}</h2>
//       <h4>{Description}</h4>
//     </div>
//   );
// });


// Wrapper Class

function App() {

  return <div>  
    <CardWrapper>
      Hi there
    </CardWrapper>

    <CardWrapper>
      Hello There
    </CardWrapper>

    <CardWrapper>
      <TextComponent />
    </CardWrapper>
    </div>
}

function CardWrapper({children}) {
  // Create a div which has a border
  console.log(children)
  return <div style={{border: "2px solid black", padding: 20}}>
    {children}
  </div>
}

function TextComponent() {
  return <div>
    TextComponent Wrapper
  </div>
}
export default App
