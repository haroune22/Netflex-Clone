import { useContext } from "react";
import { useState } from "react";
import { redirect } from "react-router-dom";
import { login } from "../../Context/authContext/ApiCalls";
import { AuthContext } from "../../Context/authContext/AuthContext";
import "./Login.css"

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {isFetaching,dispatch}=useContext(AuthContext)

    const handelLogin=(e)=>{
e.preventDefault();
login({email,password},dispatch)

    }

  return (
    <div className="login">
        <form  className="loginForm">
            <input type="text" className="loginInput" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" className="loginInput" placeholder="password..."
            onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handelLogin} className="loginButton" disabled={isFetaching}>
                Login
            </button>
           
        </form>
        </div>
  )
}

export default Login