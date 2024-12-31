import {useRef} from "react";
import "./app.css"

function App(){
  const nameRef = useRef(null);
  const passRef = useRef(null);
  const gmailRef = useRef(null);

  const SendData = async(e)=>{
    e.preventDefault();

    const name = nameRef.current.value;
    const gmail = gmailRef.current.value;
    const password = passRef.current.value;

    try{
      const Res = await fetch("https://localhost:3000/user",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          name, gmail, password,
        }),
      });

      if(!Res.ok){
        throw new Error(`Http error status:${Res.status}`);
      }
      const data = await Res.json();
      console.log(data);
    }
      catch(error){
        console.log(error);
        alert("Failed to send Data. Please try again later.");    
    }
  }
    return(
      <>
        <h1>FORM</h1>
        <form onSubmit={SendData}>
          <label>userName:- <input type="text" ref={nameRef}/></label> <br /><br />

          <label>Email:- <input type="text" ref={gmailRef}/></label><br /><br />

          <label>Password:- <input type="password" ref={passRef}/></label><br /><br />
  
          <button type="submit">Submit</button>
        </form>    
      </>
    )
}
  export default App;
