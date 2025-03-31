import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { set } from 'mongoose'


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


export default App
