import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {

//   return (
//     <div>
//       <Header title="Ganesh1">Hi Ganes</Header>
//       <Header title="Ganesh2"></Header>
//     </div>
//   )
// }

// function Header( props  ) {
//   return <div>
//     {props.title}
//   </div>
// }


function App() {

  const [Name,setName] = useState("Ganesh");

  function Change () {
    if(Name === "Ganesh") {
      setName(Math.random().toString())
    } else {
      setName("Ganesh");
    }
}

  return (
    <div>
    <button onClick={Change}> Click here to change the Title</button>
    <p> My Name is : {Name}</p>
    <p> Lives in Chennai</p>
    </div>
  )
}



export default App
