import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link} from 'react-router-dom';
import './Register.scss'


const Register = () => {
    
    const [email, setemail] = useState("");
    const emailRef = useRef();
    const [password, setpassword] = useState("");
    const passwordRef = useRef();
    const [username, setusername] = useState("");
    const [Show, setShow] = useState(false);
    const usernameRef = useRef();
    const validateEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };
    const handleStart = (e) => {
        e.preventDefault()
        const Email =emailRef.current.value
     if (!validateEmail(Email)) {
        setShow(true)
      } else {
        setemail(Email)
        setShow(false)
      }
    
    }
    const loginpage=()=>{
       window.location.replace("/Login")
    }


    const handleFinish = async (e) => {
        e.preventDefault();
        setpassword(passwordRef.current.value);
        setusername(usernameRef.current.value);
        try {
            await axios.post("http://localhost:8800/api/auth/Register/", {username,email,password});
            window.location.replace("/Login")
           
        } catch (err) {
            alert("An error occurred while Registering, Please try again later.");
        }
    }

    return (
        <div className='Register'>
            <div className="top">
                <div className="wrapper">
                    <img className='logo' src="" alt="" />
                   
                    
                </div>
            </div>
            <div className="container">
                <h1>Unilimited movies, TV shows, and more</h1>
                <h2>Watch  anywhere, Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                {!email ? (
                    <div className="input">
                        <input name='email' required={true} ref={emailRef} type="email"    placeholder='Email address......'/>
                        <button onClick={handleStart} className="registerbutton">Get Started</button>
                    </div>
                ) : (
                    <form className="input">
                        <input ref={usernameRef} onChange={e=>setusername(e.target.value)} type="text" placeholder='username' />
                        <input ref={passwordRef} onChange={e=>setpassword(e.target.value)} type="password" placeholder='password' />
                        <button onClick={handleFinish} className="registerbutton">Start</button>
                      
                    </form>
                )} 
                {Show && 
                 <span>Please enter a valid email address.</span>
                }
                <Link to={"/Login"}>
                <button onClick={loginpage} className="loginbutton">Sign In</button></Link>
            </div>
        </div>
    )
}

export default Register