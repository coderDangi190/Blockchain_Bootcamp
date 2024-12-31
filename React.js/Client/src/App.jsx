import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  /*
  const[count, setCount] = useState(0);
  useEffect(()=>{
    console.log("useEffect");
  },[])
  */

  const nameRef = useRef(null);
  const gmRef = useRef(null);
  const passRef = useRef(null);
  
  const sendData = async(e)=>{
    e.preventDefault()
    const Name = nameRef.current.value;
    const gmail = gmRef.current.value;
    const password = passRef.current.value;
    try{
      const res = await fetch("http://localhost:3000/user",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          Name,gmail,password
        }),
      })
      const data = await res.json();
      console.log(data);
    }
    catch(error){
      console.log(error);
    }

  }

  return(
    <>
{/*     
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <br /><br />
      <button onClick={()=>setCount(count-1)}>Decrement</button>  */}

      <h1> FIllup this Form</h1>

        <form onSubmit={sendData} >
        <label>Name:-<input type='text' ref={nameRef}/></label><br /><br />
        <label>Gmail:-<input type='text' ref={gmRef}/></label><br /><br />
        <label>Password:-<input type='password' ref={passRef}/></label><br /><br />
        <button type="submit">Submit</button>
      </form>

    </>
  )
}

export default App
