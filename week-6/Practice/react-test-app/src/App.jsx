import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [exchangeData1,setExchangeData1] = useState({});
  const [exchangeData2,setExchangeData2] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 100
      })
    },1000)
  },[])

  useEffect(() => {
    setTimeout(()=>{
      setExchangeData2({
        return: 100
      })
    },1000)
  },[])

  useEffect(()=>{
      setTimeout(()=>{
      setExchangeData1({
        return: 100
      })
      },1000)
  },[])


  const exChangeReturns = useMemo(()=>{ 
    return exchangeData1.returns + exchangeData2.return;
  },[exchangeData1,exchangeData2])

  const incomeTax = (bankData.income + exChangeReturns) * 0.3;

  return <div>
    <h3> Hi there your income tax return is {incomeTax}</h3>
  </div>
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
//     </>
//   )
// }

export default App
