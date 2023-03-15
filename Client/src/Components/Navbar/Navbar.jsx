import React, { useContext, useState } from 'react'
import "./Navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthActions';



const Navbar = ({type}) => {
    const[isScrolled,setIsScrollled]=useState(false)
    const {dispatch} =useContext(AuthContext)
    window.onscroll=()=>{
        setIsScrollled(window.pageYOffset === 0 ? false : true)
        return()=>(window.onscroll=null)
    }
    const handelLogout = ()=>{
        dispatch(logout())
        window.location.replace("/Login")
    }
    
  return (
    <div className={isScrolled ? "navbar  scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="téléchargement.png" alt="" />
                <span><Link className='link' to={"/"} onClick={()=>Navigate("/")}>Home</Link></span>
                <span ><Link className='link'  to={"/series"} >Series</Link></span>
                <span><Link  className='link' to={"/movie"}>Movies</Link></span>
                <span>New and popular</span>
                <span>My List</span>
            
            </div>
            <div className="right">
               <SearchIcon className='icons'/> 
               <span>Kid</span>
                <NotificationsIcon className='icons'/>
                <img src="téléchargement.png" alt="" />
                <div className="profile">

                <ArrowDropDownIcon className='icons'/>
                <div className="options">
                    <span>Settings</span>
                    <span onClick={handelLogout}>Logout</span>
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar