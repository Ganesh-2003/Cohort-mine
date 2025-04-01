import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { set } from 'mongoose'
import React from 'react'
/*
function App() {

  return (
    <div>
      <HeaderWithButton />
      <Header title="Header 2"></Header>
      <Header title="Header 3"></Header>
      <Header title="Header 4"></Header>
      <Header title="Header 5"></Header>
      <Header title="Header 6"></Header>
    </div>

  )
}

function HeaderWithButton() {
  const [title,setTitle] = useState("My name is Ganesh")

  function updateTitle() {
    setTitle("My Name is " + Math.random().toString());
  }

  return <div>
    <button onClick={updateTitle}> Click to Change Title </button>
    <Header title={title}></Header>
  </div>
}

function Header(props) {
  return <div>
    {props.title}
  </div>
}
*/

// function App() {

//   const [Name,setName] = useState("Ganesh");

//   function Change () {
//     if(Name === "Ganesh") {
//       setName(Math.random().toString())
//     } else {
//       setName("Ganesh");
//     }
// }

//   return (
//     <div>
//     <button onClick={Change}> Click here to change the Title</button>
//     <p> My Name is : {Name}</p>
//     <p> Lives in Chennai</p>
//     </div>
//   )
// }


function App() {
  const [title,setTitle] = useState("My Name is Ganesh")

  function updateTitle() {
    setTitle("My Name is " + Math.random().toString());
  }

  return <div>

  <button onClick={updateTitle}> Click here to Change</button>
  <Header title = {title}> </Header>
  <Header title="Ganesh2"> </Header>
  <Header title="Ganesh3"> </Header>
  <Header title="Ganesh4"> </Header>
  <Header title="Ganesh5"> </Header>
  <Header title="Ganesh6"> </Header>
  </div>
}

const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})

export default App
