import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const[count, setCount] = useState(0);
  useEffect(()=>{
    console.log("useEffect");
  },[])

  const nameRef = useRef(null);
  const passRef = useRef(null);
  const inputReader = (e)=>{
    e.preventDefault()
    const name = nameRef.current.value;
    const password = passRef.current.value;

    console.log(name, password);
  }

  return(
    <>

      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <br /><br />
      <button onClick={()=>setCount(count-1)}>Decrement</button> 

      <h1> FIllup this Form</h1>

        <form onSubmit={inputReader} >
        <label>Name:-<input type='text' ref={nameRef}/></label><br /><br />
        <label>Password:-<input type='password' ref={passRef}/></label><br /><br />
        <button type="submit">Submit</button>
      </form>

    </>
  )
}

export default App
