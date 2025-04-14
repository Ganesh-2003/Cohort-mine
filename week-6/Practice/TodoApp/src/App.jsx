import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';

// function App() {

//   const [todos,setTodos] = useState([]);

//   useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/todos?id=1") //Axious figures out it is a JSON data and it does the parsing                     
//       .then(function(res){                   // Refer Todo App Learn for other syntax
//         console.log(res);
//         setTodos(res.data.todos)
//       })
//   },[]);

//   return (
//     <div>
//       {todos.map((todo)=>(
//         <Todo key={todo.id} description = {todo.todo} status = {todo.completed} />
//       ))}
//     </div>
//   )

// }

// function Todo (props) {
//   return (
//     <div>
//       <h3> {props.description} </h3>
//       <h5> {props.status? "✅Completed":"❌Not Completed"} </h5>
//     </div>
//   )
// }

function App() {

  const [btnNumber, setbtnNumber] = useState(1);

  return (
    <div>
      <button onClick={() => setbtnNumber(1)}> 1 </button>
      <button onClick={() => setbtnNumber(2)}> 2 </button>
      <button onClick={() => setbtnNumber(3)}> 3 </button>
      <button onClick={() => setbtnNumber(4)}> 4 </button>

      <Todo id = {btnNumber}/>
    </div>
  )
}

function Todo ({id}) {

  const [todo,setTodos] = useState([]);

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/todos?id=${id}`)
      .then(function(res){
        setTodos(res.data[0]);
        console.log(todo)
      })
  },[id])

  return (
    <div>
      <h3>
        ID: {id}
      </h3>
      <h3>
        {todo.title}
      </h3>
      <h3>
        {todo.completed? "✅ Completed" : "❌ Pending"}
      </h3>
    </div>
  )
}

export default App