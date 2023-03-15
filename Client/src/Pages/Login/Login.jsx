
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../../authContext/ApiCalls'
import { AuthContext } from '../../authContext/AuthContext'
import './Login.scss'


const Login = () => {
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')

  const {dispatch}=useContext(AuthContext)
    const handelLogin=(e)=>{
      e.preventDefault()
      login({email,password},dispatch)
    }


    return (
    <div className='Login'>
        
     <div className="top">
     <div className="wrapper">
        <img className='logo' src="" alt="" />
     </div>
     </div>
     <div className="container">
       <form>
        <h1>Sign in</h1>
        <input type="email" placeholder='Email or Phone number' name="" id=""onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder='Password...' name="" id="" onChange={e=>setPassword(e.target.value)}/>
        <button className="loginbutt" onClick={handelLogin}>
            Sign In
        </button>
        <span>New To Netflex? <b><Link to={"/Register"}>
        Sign Up Now</Link> </b></span>
        <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn More</b>.
        </small>
       </form>
     </div>
        </div>
  )
}

export default Login