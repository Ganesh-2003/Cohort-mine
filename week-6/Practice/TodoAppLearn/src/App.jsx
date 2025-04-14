import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { memo } from 'react';


function App() {

  const [todos,setTodos] = useState([]);

  useEffect (()=>{
    fetch("https://dummyjson.com/todos")
    .then((res)=>{
      res.json()
      .then((obj)=> {
        const todoArray = obj.todos;
        setTodos(todoArray);
      })
    })
    .catch((err) => {
      console.log("An Error has occured ",err);
    })
  },[todos])

  return(
    <div>
      <h1> Todos </h1>
      {todos.map((todo) => (
        <TodoWrapper key={todo.id} result={todo.id}>
          <Todo description = {todo.todo}  status = {todo.completed} userID = {todo.userId} />
        </TodoWrapper>
      ))}
    </div>
  )  

}

const TodoWrapper = memo((props)=>{
  return (
    <div style={{border: "2px solid black", margin: 10, padding: 20, backgroundColor: "black", color:"white"}}>
      <h3>Todo Id: {props.result}</h3>
      {props.children}
    </div>
  )
})

function Todo (props) {
  return (
    <div>
      <h4>Description: {props.description} </h4>
      <h4>Status:  {props.status?"✅ Completed": "❌ Pending"} </h4>
      <h4>User ID:  {props.userID} </h4>
    </div>
  )
}

export default App
