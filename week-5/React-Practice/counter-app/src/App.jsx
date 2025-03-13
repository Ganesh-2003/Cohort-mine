
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useState } from 'react'

//State, components


// function App() {

//   const[count,setCount] = useState(0); //[1,2]

//   return (
//     <div>
//       <CustomButton count={count} setCount={setCount}></CustomButton>
//     </div>
//   )
// }

// function CustomButton(props) {

//   function OnClickHandler() {
//     props.setCount(props.count+1); 
//   }

//   return <button onClick = {OnClickHandler}>
//       Counter {props.count}
//     </button>

// }

function Todo({title, description}) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}



function App() {
  const [todos, setTodos] = useState([{
    title: "Go to Badminton",
    description: "Go to Badminton between 7-8",
    completed: false
  },{
    title: "Study DSA",
    description: "Practice Between 7 P.M - 9 P.M",
    completed: true
  }])

  function addTodo() {
    setTodos([...todos,{
      title: "Random Todo",
      description: "description for random todo"
    }])
  }
  

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      <Todo title={todos[0].title} description={todos[0].description}/>
      <Todo title={todos[1].title} description={todos[1].description}/>

      {todos.map(function(todos){
        return <Todo title={todos.title} description={todos.description}/>
      })}
    </div>
  )
}


export default App
