import React,{useState,useEffect} from 'react'
import io from "socket.io-client";

let socket
const PORT = 'http://localhost:3001/';
function SignIn() {
    const[socketID,setSocketID]=useState("")
    const[name,setName]=useState("")
    const[useremail,setUseremail]=useState("")
    const[password,setPassword]=useState("")
    
    useEffect(() => {
        socket = io(PORT);
        
      }, []);
    const submitHandler = (e)=>{
    e.preventDefault()
    console.log(socket)
    setSocketID(socket.id)
    console.log(socket.id)
    socket.emit("signin",({socketID:socketID,name,useremail,password}))
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" value={useremail} onChange={(e)=>setUseremail(e.target.value)}/>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button>click</button>
            </form>
        </div>
    )
}

export default SignIn
