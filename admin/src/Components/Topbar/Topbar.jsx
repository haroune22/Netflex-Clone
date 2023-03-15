import React from 'react'
import './Topsbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { useContext } from 'react';
import { AuthContext } from '../../Context/authContext/AuthContext';

const Topbar = () => {

    const {user,dispatch}=useContext(AuthContext)
    const handellogout=(e)=>{
        e.preventDefault()
        dispatch({type:"Logout"})
    }

  return (
    <div className='topbar'>
        <div className="topbarwrapper">
            <div className="topleft">
                <span className='Logo'>Logo admin</span>
                </div>
            <div    className="topright">
                <div className="topbarIconContainer">
                    <NotificationsNoneIcon/>
                    <span className="topIconBag">3</span>
                </div>
                <div className="topbarIconContainer">
                    <LanguageIcon/>
                    <span className="topIconBag">3</span>
                </div>
                <div className="topbarIconContainer">
                    <SettingsIcon/>
                    
                </div>
                <img src="https://media.istockphoto.com/id/1087531642/vector/male-face-silhouette-or-icon-man-avatar-profile-unknown-or-anonymous-person-vector.jpg?s=612x612&w=0&k=20&c=FEppaMMfyIYV2HJ6Ty8tLmPL1GX6Tz9u9Y8SCRrkD-o=" alt="" className="topAvatar" />
                <button onClick={handellogout} className='topbarLogoutButton'>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Topbar