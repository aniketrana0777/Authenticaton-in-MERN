import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [form, setForm] = useState({});
  const handelForm=(e)=>{
   setForm({
    ...form,
    [e.target.name]:e.target.value
   })
  }
  const handelSubmit= async (e)=>{
    e.preventDefault();
   
   const response = await fetch("http://localhost:2000/demo",{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const data = await response.json();
    console.log(data);

  }
  return (
    <div className="App">
    <form onSubmit={handelSubmit}>
    <h1>FILL UP THE FORM</h1>
    NAME : <input type='text' name="name" placeholder='Name' onChange={(handelForm)}></input>
    <br></br>
    <br></br>
    PHONE NO. : <input type="number" name='number' placeholder="Phone no." onChange={(handelForm)}></input>
    <br></br>
    <br></br>
    PASSWORD : <input type="password" name='password' placeholder="Password" onChange={(handelForm)}></input>
    <br></br>
    <br></br>
    <button id='button'>SUBMIT</button>
    </form>
    </div>
  );
}

export default App;
