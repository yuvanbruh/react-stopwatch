import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  const [color, setColor] = useState(0)
  const [count, setCount] = useState(0)
//  const ref= useRef()
 const btn_ref= useRef()
const red_btn= useRef()
useEffect(()=>{
// a.current=a.current+1
// console.log(`this is a a ${a.current}`)
// ref.current.style.backgroundColor="red"
// btn_ref.current.style.backgroundColor="blue"
console.log('first Rendering') 
red_btn.current.style.backgroundColor="red"
btn_ref.current.style.backgroundColor="blue"
},[])

 
  return (
    <> 
      <div> 
        <Navbar/> 
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>  
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={red_btn} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more  
      </p>
      <button  ref={btn_ref}  onClick={()=>{
btn_ref.current.style.display="none"
      }}>Button</button>
    </>
  )
}

export default App
